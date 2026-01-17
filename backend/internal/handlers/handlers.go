package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"

	"gomaster-daily/internal/models"
	"gomaster-daily/internal/services"
	"gomaster-daily/pkg/runner"
)

// Handler contains all HTTP handlers
type Handler struct {
	lessonService *services.LessonService
	codeRunner    *runner.CodeRunner
}

// NewHandler creates a new Handler
func NewHandler() *Handler {
	return &Handler{
		lessonService: services.NewLessonService(),
		codeRunner:    runner.NewCodeRunner(5 * time.Second),
	}
}

// Response helper
type Response struct {
	Success bool        `json:"success"`
	Data    interface{} `json:"data,omitempty"`
	Error   string      `json:"error,omitempty"`
}

func writeJSON(w http.ResponseWriter, status int, data interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(data)
}

func writeError(w http.ResponseWriter, status int, message string) {
	writeJSON(w, status, Response{Success: false, Error: message})
}

func writeSuccess(w http.ResponseWriter, data interface{}) {
	writeJSON(w, http.StatusOK, Response{Success: true, Data: data})
}

// GetDailyLesson handles GET /api/lessons/:day
func (h *Handler) GetDailyLesson(w http.ResponseWriter, r *http.Request) {
	dayStr := r.PathValue("day")
	day, err := strconv.Atoi(dayStr)
	if err != nil || day < 1 {
		writeError(w, http.StatusBadRequest, "유효하지 않은 day 파라미터입니다")
		return
	}

	lesson, err := h.lessonService.GetDailyLesson(day)
	if err != nil {
		writeError(w, http.StatusInternalServerError, "레슨을 가져오는데 실패했습니다")
		return
	}

	if lesson == nil {
		writeError(w, http.StatusNotFound, "해당 일자의 레슨을 찾을 수 없습니다")
		return
	}

	writeSuccess(w, lesson)
}

// GetAllConcepts handles GET /api/concepts
func (h *Handler) GetAllConcepts(w http.ResponseWriter, r *http.Request) {
	category := r.URL.Query().Get("category")

	var concepts []models.Concept
	if category != "" {
		concepts = h.lessonService.GetConceptsByCategory(category)
	} else {
		concepts = h.lessonService.GetAllConcepts()
	}

	writeSuccess(w, concepts)
}

// GetCategories handles GET /api/categories
func (h *Handler) GetCategories(w http.ResponseWriter, r *http.Request) {
	categories := h.lessonService.GetCategories()
	writeSuccess(w, categories)
}

// RunCode handles POST /api/run
func (h *Handler) RunCode(w http.ResponseWriter, r *http.Request) {
	var req models.CodeExecutionRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		writeError(w, http.StatusBadRequest, "잘못된 요청 형식입니다")
		return
	}

	if req.Code == "" {
		writeError(w, http.StatusBadRequest, "코드가 비어있습니다")
		return
	}

	result := h.codeRunner.RunCode(req)
	writeSuccess(w, result)
}

// SubmitSolution handles POST /api/submit
func (h *Handler) SubmitSolution(w http.ResponseWriter, r *http.Request) {
	var req struct {
		Day  int    `json:"day"`
		Code string `json:"code"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		writeError(w, http.StatusBadRequest, "잘못된 요청 형식입니다")
		return
	}

	if req.Code == "" || req.Day < 1 {
		writeError(w, http.StatusBadRequest, "day와 code가 필요합니다")
		return
	}

	// Run code with test validation
	execReq := models.CodeExecutionRequest{
		Code: req.Code,
		Day:  req.Day,
	}
	result := h.codeRunner.RunCode(execReq)

	// Determine if solution is correct
	isCorrect := result.Success && result.TestsPassed == result.TotalTests

	response := struct {
		models.CodeExecutionResult
		IsCorrect bool `json:"isCorrect"`
	}{
		CodeExecutionResult: result,
		IsCorrect:           isCorrect,
	}

	writeSuccess(w, response)
}

// HealthCheck handles GET /api/health
func (h *Handler) HealthCheck(w http.ResponseWriter, r *http.Request) {
	writeSuccess(w, map[string]string{
		"status":  "healthy",
		"version": "1.0.0",
	})
}
