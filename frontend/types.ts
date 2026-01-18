export type ViewState = 'dashboard' | 'concept' | 'editor' | 'codingTest';

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

// Legacy format for backward compatibility
export interface LegacyDailyLesson {
  day: number;
  title: string;
  concept: {
    description: string;
    codeSnippet: string;
    explanation: string;
  };
  challenge: {
    description: string;
    initialCode: string;
  };
}

export interface ActivityData {
  date: string;
  level: 0 | 1 | 2 | 3; // 0: none, 3: high
}

export interface UserProgress {
  userId: string;
  currentDay: number;
  currentStreak: number;
  longestStreak: number;
  totalCompleted: number;
  lastActiveDate: string;
  completedDays: number[];
  activityHistory: ActivityData[];
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
  platform: 'programmers' | 'baekjoon' | 'custom';
  problemId: string;
  url: string;
  difficulty: string;
  category: string;
  description: string;
  tags: string[];
  hint: string;
  // New fields for in-app solving
  problemStatement?: string;
  inputDescription?: string;
  outputDescription?: string;
  examples?: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  testCases?: {
    input: string;
    expected: string;
    isHidden: boolean;
  }[];
  initialCode?: string;
  constraints?: string[];
}