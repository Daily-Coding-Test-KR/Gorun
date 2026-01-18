package runner

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strings"
	"time"

	"gomaster-daily/internal/data"
	"gomaster-daily/internal/models"
)

// CodeRunner handles Go code execution via Go Playground API
type CodeRunner struct {
	timeout    time.Duration
	httpClient *http.Client
}

// NewCodeRunner creates a new CodeRunner with the specified timeout
func NewCodeRunner(timeout time.Duration) *CodeRunner {
	return &CodeRunner{
		timeout: timeout,
		httpClient: &http.Client{
			Timeout: timeout,
		},
	}
}

// PlaygroundResponse represents the response from Go Playground API
type PlaygroundResponse struct {
	Errors string `json:"Errors"`
	Events []struct {
		Message string `json:"Message"`
		Kind    string `json:"Kind"`
		Delay   int    `json:"Delay"`
	} `json:"Events"`
}

// RunCode executes the provided Go code via Go Playground API
func (r *CodeRunner) RunCode(req models.CodeExecutionRequest) models.CodeExecutionResult {
	startTime := time.Now()

	// Prepare the request to Go Playground
	formData := url.Values{}
	formData.Set("version", "2")
	formData.Set("body", req.Code)
	formData.Set("withVet", "true")

	httpReq, err := http.NewRequest("POST", "https://go.dev/_/compile", bytes.NewBufferString(formData.Encode()))
	if err != nil {
		return models.CodeExecutionResult{
			Success:  false,
			Error:    "요청 생성 실패: " + err.Error(),
			Feedback: "서버 오류가 발생했습니다.",
		}
	}
	httpReq.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	resp, err := r.httpClient.Do(httpReq)
	if err != nil {
		return models.CodeExecutionResult{
			Success:  false,
			Error:    "Go Playground 연결 실패: " + err.Error(),
			Feedback: "코드 실행 서버에 연결할 수 없습니다.",
		}
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return models.CodeExecutionResult{
			Success:  false,
			Error:    "응답 읽기 실패: " + err.Error(),
			Feedback: "서버 응답을 처리할 수 없습니다.",
		}
	}

	var pgResp PlaygroundResponse
	if err := json.Unmarshal(body, &pgResp); err != nil {
		return models.CodeExecutionResult{
			Success:  false,
			Error:    "응답 파싱 실패: " + err.Error(),
			Feedback: "서버 응답을 처리할 수 없습니다.",
		}
	}

	executionTime := time.Since(startTime).Milliseconds()

	result := models.CodeExecutionResult{
		ExecutionMs: executionTime,
	}

	// Check for compilation errors
	if pgResp.Errors != "" {
		result.Success = false
		result.Error = r.parseGoError(pgResp.Errors)
		result.Output = pgResp.Errors
		result.Feedback = r.generateErrorFeedback(result.Error)
		return result
	}

	// Collect output from events
	var outputBuilder strings.Builder
	for _, event := range pgResp.Events {
		if event.Kind == "stdout" || event.Kind == "" {
			outputBuilder.WriteString(event.Message)
		}
	}

	result.Success = true
	result.Output = outputBuilder.String()

	// Validate against test cases if day is provided
	if req.Day > 0 {
		result = r.validateWithTestCases(result, req.Day)
	} else {
		result.Feedback = "코드가 성공적으로 실행되었습니다!"
	}

	return result
}

// validateWithTestCases checks the output against test cases
func (r *CodeRunner) validateWithTestCases(result models.CodeExecutionResult, day int) models.CodeExecutionResult {
	challenge := data.GetChallengeByDay(day)
	if challenge == nil || len(challenge.TestCases) == 0 {
		result.Feedback = "코드가 성공적으로 실행되었습니다!"
		return result
	}

	passed := 0
	total := len(challenge.TestCases)
	output := strings.TrimSpace(result.Output)

	for _, tc := range challenge.TestCases {
		if strings.Contains(output, tc.Expected) {
			passed++
		}
	}

	result.TestsPassed = passed
	result.TotalTests = total

	if passed == total {
		result.Feedback = fmt.Sprintf("훌륭합니다! 모든 테스트를 통과했습니다. (%d/%d)", passed, total)
	} else if passed > 0 {
		result.Feedback = fmt.Sprintf("일부 테스트를 통과했습니다. (%d/%d) 출력 결과를 다시 확인해보세요.", passed, total)
	} else {
		result.Feedback = "테스트를 통과하지 못했습니다. 문제 설명을 다시 읽고 시도해보세요."
	}

	return result
}

// parseGoError extracts a user-friendly error message from Go compiler output
func (r *CodeRunner) parseGoError(stderr string) string {
	lines := strings.Split(stderr, "\n")
	for _, line := range lines {
		if strings.Contains(line, ".go:") {
			// Extract just the error part
			parts := strings.SplitN(line, ": ", 2)
			if len(parts) > 1 {
				return parts[1]
			}
			return line
		}
	}
	return stderr
}

// generateErrorFeedback provides helpful feedback for common errors
func (r *CodeRunner) generateErrorFeedback(errorMsg string) string {
	errorMsg = strings.ToLower(errorMsg)

	feedbackMap := map[string]string{
		"undefined":        "정의되지 않은 변수나 함수를 사용했습니다. 철자를 확인해주세요.",
		"syntax error":     "문법 오류가 있습니다. 괄호, 세미콜론, 따옴표 등을 확인해주세요.",
		"cannot use":       "타입이 맞지 않습니다. 변수의 타입을 확인해주세요.",
		"not enough":       "함수에 전달된 인자 수가 부족합니다.",
		"too many":         "함수에 전달된 인자 수가 너무 많습니다.",
		"declared but not": "선언했지만 사용하지 않은 변수가 있습니다.",
		"imported but not": "import했지만 사용하지 않은 패키지가 있습니다.",
		"missing return":   "함수에 return문이 필요합니다.",
	}

	for key, feedback := range feedbackMap {
		if strings.Contains(errorMsg, key) {
			return feedback
		}
	}

	return "코드에 오류가 있습니다. 에러 메시지를 확인해주세요."
}
