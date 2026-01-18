// API Service for GoMaster Daily
// Connects frontend to Go backend

// Auto-detect API URL based on current host
const getApiBaseUrl = () => {
  // If accessing from localhost, use localhost
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://localhost:8080/api';
  }
  // If accessing from network (mobile), use the same host with backend port
  return `http://${window.location.hostname}:8080/api`;
};

const API_BASE_URL = import.meta.env.VITE_API_URL || getApiBaseUrl();

// Types matching backend models
export interface Concept {
  id: number;
  day: number;
  title: string;
  category: string;
  description: string;
  codeSnippet: string;
  explanation: string;
  keyPoints: string[];
}

export interface Challenge {
  id: number;
  day: number;
  conceptId: number;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  initialCode: string;
  hints: string[];
}

export interface DailyLesson {
  day: number;
  title: string;
  concept: Concept;
  challenge: Challenge;
}

export interface CodeExecutionResult {
  success: boolean;
  output: string;
  error?: string;
  executionMs: number;
  testsPassed: number;
  totalTests: number;
  feedback: string;
  isCorrect?: boolean;
}

export interface CodingTest {
  id: number;
  day: number;
  title: string;
  platform: 'programmers' | 'baekjoon';
  problemId: string;
  url: string;
  difficulty: string;
  category: string;
  description: string;
  tags: string[];
  hint: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// API Functions
export async function fetchDailyLesson(day: number): Promise<DailyLesson | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/lessons/${day}`);
    const result: ApiResponse<DailyLesson> = await response.json();

    if (result.success && result.data) {
      return result.data;
    }
    return null;
  } catch (error) {
    console.error('Failed to fetch daily lesson:', error);
    return null;
  }
}

export async function fetchAllConcepts(category?: string): Promise<Concept[]> {
  try {
    const url = category
      ? `${API_BASE_URL}/concepts?category=${category}`
      : `${API_BASE_URL}/concepts`;

    const response = await fetch(url);
    const result: ApiResponse<Concept[]> = await response.json();

    if (result.success && result.data) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.error('Failed to fetch concepts:', error);
    return [];
  }
}

export async function fetchCategories(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    const result: ApiResponse<string[]> = await response.json();

    if (result.success && result.data) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
}

export async function runCode(code: string, day?: number): Promise<CodeExecutionResult> {
  try {
    const response = await fetch(`${API_BASE_URL}/run`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, day: day || 0 }),
    });

    const result: ApiResponse<CodeExecutionResult> = await response.json();

    if (result.success && result.data) {
      return result.data;
    }

    return {
      success: false,
      output: '',
      error: result.error || 'Unknown error',
      executionMs: 0,
      testsPassed: 0,
      totalTests: 0,
      feedback: '서버 오류가 발생했습니다.',
    };
  } catch (error) {
    console.error('Failed to run code:', error);
    return {
      success: false,
      output: '',
      error: 'Network error',
      executionMs: 0,
      testsPassed: 0,
      totalTests: 0,
      feedback: '서버에 연결할 수 없습니다.',
    };
  }
}

export async function submitSolution(day: number, code: string): Promise<CodeExecutionResult> {
  try {
    const response = await fetch(`${API_BASE_URL}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ day, code }),
    });

    const result: ApiResponse<CodeExecutionResult> = await response.json();

    if (result.success && result.data) {
      return result.data;
    }

    return {
      success: false,
      output: '',
      error: result.error || 'Unknown error',
      executionMs: 0,
      testsPassed: 0,
      totalTests: 0,
      feedback: '제출 실패',
    };
  } catch (error) {
    console.error('Failed to submit solution:', error);
    return {
      success: false,
      output: '',
      error: 'Network error',
      executionMs: 0,
      testsPassed: 0,
      totalTests: 0,
      feedback: '서버에 연결할 수 없습니다.',
    };
  }
}

export async function checkHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    const result = await response.json();
    return result.success;
  } catch {
    return false;
  }
}

export async function fetchCodingTestsByDay(day: number): Promise<CodingTest[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/coding-tests/${day}`);
    const result: ApiResponse<CodingTest[]> = await response.json();

    if (result.success && result.data) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.error('Failed to fetch coding tests:', error);
    return [];
  }
}

export async function fetchAllCodingTests(platform?: string): Promise<CodingTest[]> {
  try {
    const url = platform
      ? `${API_BASE_URL}/coding-tests?platform=${platform}`
      : `${API_BASE_URL}/coding-tests`;

    const response = await fetch(url);
    const result: ApiResponse<CodingTest[]> = await response.json();

    if (result.success && result.data) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.error('Failed to fetch coding tests:', error);
    return [];
  }
}
