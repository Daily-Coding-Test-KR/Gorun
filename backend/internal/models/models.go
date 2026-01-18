package models

import "time"

// Concept represents a Go learning concept
type Concept struct {
	ID          int      `json:"id"`
	Day         int      `json:"day"`
	Title       string   `json:"title"`
	Category    string   `json:"category"`
	Description string   `json:"description"`
	CodeSnippet string   `json:"codeSnippet"`
	Explanation string   `json:"explanation"`
	KeyPoints   []string `json:"keyPoints"`
}

// Challenge represents a daily coding challenge
type Challenge struct {
	ID           int      `json:"id"`
	Day          int      `json:"day"`
	ConceptID    int      `json:"conceptId"`
	Title        string   `json:"title"`
	Difficulty   string   `json:"difficulty"` // easy, medium, hard
	Description  string   `json:"description"`
	InitialCode  string   `json:"initialCode"`
	SolutionCode string   `json:"solutionCode"`
	TestCases    []TestCase `json:"testCases"`
	Hints        []string `json:"hints"`
}

// TestCase for validating challenge solutions
type TestCase struct {
	Input    string `json:"input"`
	Expected string `json:"expected"`
	Hidden   bool   `json:"hidden"`
}

// DailyLesson combines concept and challenge for a day
type DailyLesson struct {
	Day       int       `json:"day"`
	Title     string    `json:"title"`
	Concept   Concept   `json:"concept"`
	Challenge Challenge `json:"challenge"`
}

// UserProgress tracks user's learning progress
type UserProgress struct {
	UserID          string           `json:"userId"`
	CurrentDay      int              `json:"currentDay"`
	CurrentStreak   int              `json:"currentStreak"`
	LongestStreak   int              `json:"longestStreak"`
	TotalCompleted  int              `json:"totalCompleted"`
	LastActiveDate  time.Time        `json:"lastActiveDate"`
	CompletedDays   []int            `json:"completedDays"`
	ActivityHistory []ActivityRecord `json:"activityHistory"`
}

// ActivityRecord for heatmap display
type ActivityRecord struct {
	Date  string `json:"date"`  // YYYY-MM-DD format
	Level int    `json:"level"` // 0-3 intensity
}

// CodeExecutionRequest for running user code
type CodeExecutionRequest struct {
	Code      string `json:"code"`
	Day       int    `json:"day"`
	TestInput string `json:"testInput,omitempty"`
}

// CodeExecutionResult from running code
type CodeExecutionResult struct {
	Success      bool     `json:"success"`
	Output       string   `json:"output"`
	Error        string   `json:"error,omitempty"`
	ExecutionMs  int64    `json:"executionMs"`
	TestsPassed  int      `json:"testsPassed"`
	TotalTests   int      `json:"totalTests"`
	Feedback     string   `json:"feedback"`
}

// CodingTest represents a real coding test problem from Programmers/Baekjoon
type CodingTest struct {
	ID          int      `json:"id"`
	Day         int      `json:"day"`          // Related day
	Title       string   `json:"title"`        // Problem title
	Platform    string   `json:"platform"`     // "programmers" or "baekjoon"
	ProblemID   string   `json:"problemId"`    // Platform-specific problem ID
	URL         string   `json:"url"`          // Direct link to the problem
	Difficulty  string   `json:"difficulty"`   // Level description
	Category    string   `json:"category"`     // Problem category
	Description string   `json:"description"`  // Brief description in Korean
	Tags        []string `json:"tags"`         // Related concepts
	Hint        string   `json:"hint"`         // Study hint
}
