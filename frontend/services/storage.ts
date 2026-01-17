// Local Storage Service for User Progress

export interface UserProgress {
  currentDay: number;
  currentStreak: number;
  longestStreak: number;
  totalCompleted: number;
  lastActiveDate: string;
  completedDays: number[];
  userName: string;
}

const STORAGE_KEY = 'gomaster_progress';

const DEFAULT_PROGRESS: UserProgress = {
  currentDay: 1,
  currentStreak: 1,
  longestStreak: 1,
  totalCompleted: 0,
  lastActiveDate: '',
  completedDays: [],
  userName: 'Developer',
};

export function updateUserName(name: string): UserProgress {
  const progress = loadProgress();
  progress.userName = name;
  saveProgress(progress);
  return progress;
}

export function loadProgress(): UserProgress {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...DEFAULT_PROGRESS, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error('Failed to load progress:', e);
  }
  return { ...DEFAULT_PROGRESS };
}

export function saveProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
}

export function completeDay(day: number): UserProgress {
  const progress = loadProgress();
  const today = new Date().toISOString().split('T')[0];

  // Add to completed days if not already
  if (!progress.completedDays.includes(day)) {
    progress.completedDays.push(day);
    progress.totalCompleted++;
  }

  // Update streak
  const lastDate = progress.lastActiveDate;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  if (lastDate === today) {
    // Already active today, no streak change
  } else if (lastDate === yesterdayStr) {
    // Consecutive day
    progress.currentStreak++;
  } else if (lastDate !== today) {
    // Streak broken or first day
    progress.currentStreak = 1;
  }

  progress.lastActiveDate = today;
  progress.longestStreak = Math.max(progress.longestStreak, progress.currentStreak);

  // Update current day to next uncompleted day
  let nextDay = 1;
  while (progress.completedDays.includes(nextDay) && nextDay <= 100) {
    nextDay++;
  }
  progress.currentDay = nextDay;

  saveProgress(progress);
  return progress;
}

export function resetProgress(): UserProgress {
  const progress = { ...DEFAULT_PROGRESS };
  saveProgress(progress);
  return progress;
}

export function isDayCompleted(day: number): boolean {
  const progress = loadProgress();
  return progress.completedDays.includes(day);
}
