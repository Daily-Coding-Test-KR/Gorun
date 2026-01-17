package runner

import (
	"bytes"
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"

	"gomaster-daily/internal/data"
	"gomaster-daily/internal/models"
)

// CodeRunner handles Go code execution
type CodeRunner struct {
	timeout time.Duration
}

// NewCodeRunner creates a new CodeRunner with the specified timeout
func NewCodeRunner(timeout time.Duration) *CodeRunner {
	return &CodeRunner{
		timeout: timeout,
	}
}

// RunCode executes the provided Go code and returns the result
func (r *CodeRunner) RunCode(req models.CodeExecutionRequest) models.CodeExecutionResult {
	startTime := time.Now()

	// Create a temporary directory for the code
	tmpDir, err := os.MkdirTemp("", "gomaster-")
	if err != nil {
		return models.CodeExecutionResult{
			Success: false,
			Error:   "임시 디렉토리 생성 실패: " + err.Error(),
		}
	}
	defer os.RemoveAll(tmpDir)

	// Write the code to a file
	codePath := filepath.Join(tmpDir, "main.go")
	if err := os.WriteFile(codePath, []byte(req.Code), 0644); err != nil {
		return models.CodeExecutionResult{
			Success: false,
			Error:   "코드 파일 작성 실패: " + err.Error(),
		}
	}

	// Create context with timeout
	ctx, cancel := context.WithTimeout(context.Background(), r.timeout)
	defer cancel()

	// Run the code
	cmd := exec.CommandContext(ctx, "go", "run", codePath)
	var stdout, stderr bytes.Buffer
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr

	err = cmd.Run()
	executionTime := time.Since(startTime).Milliseconds()

	result := models.CodeExecutionResult{
		ExecutionMs: executionTime,
	}

	if ctx.Err() == context.DeadlineExceeded {
		result.Success = false
		result.Error = "실행 시간 초과 (5초)"
		result.Feedback = "코드 실행 시간이 너무 깁니다. 무한 루프가 있는지 확인해주세요."
		return result
	}

	if err != nil {
		result.Success = false
		result.Output = stderr.String()
		result.Error = r.parseGoError(stderr.String())
		result.Feedback = r.generateErrorFeedback(result.Error)
		return result
	}

	result.Success = true
	result.Output = stdout.String()

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
