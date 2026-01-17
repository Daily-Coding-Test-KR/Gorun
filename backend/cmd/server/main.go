package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"gomaster-daily/internal/handlers"
)

// CORS middleware
func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Allow requests from frontend
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		// Handle preflight
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

// Logging middleware
func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("%s %s %s", r.RemoteAddr, r.Method, r.URL.Path)
		next.ServeHTTP(w, r)
	})
}

func main() {
	h := handlers.NewHandler()
	mux := http.NewServeMux()

	// API Routes
	mux.HandleFunc("GET /api/health", h.HealthCheck)
	mux.HandleFunc("GET /api/lessons/{day}", h.GetDailyLesson)
	mux.HandleFunc("GET /api/concepts", h.GetAllConcepts)
	mux.HandleFunc("GET /api/categories", h.GetCategories)
	mux.HandleFunc("POST /api/run", h.RunCode)
	mux.HandleFunc("POST /api/submit", h.SubmitSolution)

	// Apply middlewares
	handler := corsMiddleware(loggingMiddleware(mux))

	// Get port from environment or use default
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fmt.Printf(`
╔══════════════════════════════════════════════╗
║       GoMaster Daily - Backend Server        ║
╠══════════════════════════════════════════════╣
║  🚀 Server running on http://localhost:%s  ║
║                                              ║
║  📚 API Endpoints:                           ║
║    GET  /api/health         - Health check   ║
║    GET  /api/lessons/{day}  - Get lesson     ║
║    GET  /api/concepts       - All concepts   ║
║    GET  /api/categories     - Categories     ║
║    POST /api/run            - Run code       ║
║    POST /api/submit         - Submit answer  ║
╚══════════════════════════════════════════════╝
`, port)

	log.Fatal(http.ListenAndServe(":"+port, handler))
}
