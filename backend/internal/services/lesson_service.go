package services

import (
	"gomaster-daily/internal/data"
	"gomaster-daily/internal/models"
)

// LessonService handles lesson-related operations
type LessonService struct{}

// NewLessonService creates a new LessonService
func NewLessonService() *LessonService {
	return &LessonService{}
}

// GetDailyLesson returns the lesson for a specific day
func (s *LessonService) GetDailyLesson(day int) (*models.DailyLesson, error) {
	concept := data.GetConceptByDay(day)
	if concept == nil {
		// Return nil if no concept found for this day
		return nil, nil
	}

	challenge := data.GetChallengeByDay(day)
	if challenge == nil {
		// Create a default challenge if none exists
		challenge = &models.Challenge{
			Day:         day,
			Title:       concept.Title + " 연습",
			Difficulty:  "easy",
			Description: "오늘 배운 " + concept.Title + " 개념을 활용하여 간단한 프로그램을 작성해보세요.",
			InitialCode: `package main

import "fmt"

func main() {
    // TODO: 여기에 코드를 작성하세요

}`,
		}
	}

	return &models.DailyLesson{
		Day:       day,
		Title:     concept.Title,
		Concept:   *concept,
		Challenge: *challenge,
	}, nil
}

// GetAllConcepts returns all available concepts
func (s *LessonService) GetAllConcepts() []models.Concept {
	return data.GetAllConcepts()
}

// GetConceptsByCategory returns concepts filtered by category
func (s *LessonService) GetConceptsByCategory(category string) []models.Concept {
	all := data.GetAllConcepts()
	var filtered []models.Concept
	for _, c := range all {
		if c.Category == category {
			filtered = append(filtered, c)
		}
	}
	return filtered
}

// GetCategories returns all unique categories
func (s *LessonService) GetCategories() []string {
	all := data.GetAllConcepts()
	categoryMap := make(map[string]bool)
	var categories []string

	for _, c := range all {
		if !categoryMap[c.Category] {
			categoryMap[c.Category] = true
			categories = append(categories, c.Category)
		}
	}
	return categories
}

// GetCodingTestsByDay returns coding tests for a specific day
func (s *LessonService) GetCodingTestsByDay(day int) []models.CodingTest {
	return data.GetCodingTestsByDay(day)
}

// GetAllCodingTests returns all coding tests
func (s *LessonService) GetAllCodingTests() []models.CodingTest {
	return data.GetAllCodingTests()
}

// GetCodingTestsByPlatform returns coding tests filtered by platform
func (s *LessonService) GetCodingTestsByPlatform(platform string) []models.CodingTest {
	return data.GetCodingTestsByPlatform(platform)
}
