import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import ConceptCard from './components/ConceptCard';
import CodeEditor from './components/CodeEditor';
import { ViewState, DailyLesson } from './types';
import { fetchDailyLesson, checkHealth } from './services/api';
import { generateDailyContent } from './services/geminiService';
import { loadProgress, completeDay, UserProgress } from './services/storage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [progress, setProgress] = useState<UserProgress>(loadProgress);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [lesson, setLesson] = useState<DailyLesson | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [backendAvailable, setBackendAvailable] = useState(false);

  // Check backend availability on mount
  useEffect(() => {
    const checkBackend = async () => {
      const available = await checkHealth();
      setBackendAvailable(available);
      console.log('Backend available:', available);
    };
    checkBackend();
  }, []);

  // Load progress on mount
  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const handleStartLearning = async (day?: number) => {
    setIsLoading(true);
    const targetDay = day || progress.currentDay;
    setSelectedDay(targetDay);

    // Try backend first, fallback to Gemini
    if (backendAvailable) {
      const backendLesson = await fetchDailyLesson(targetDay);
      if (backendLesson) {
        setLesson(backendLesson);
        setIsLoading(false);
        setCurrentView('concept');
        return;
      }
    }

    // Fallback to Gemini AI
    const dailyData = await generateDailyContent(targetDay);
    setLesson(dailyData as DailyLesson);
    setIsLoading(false);
    setCurrentView('concept');
  };

  const handleGoToEditor = () => {
    setCurrentView('editor');
  };

  const handleCompleteLesson = () => {
    const updatedProgress = completeDay(selectedDay);
    setProgress(updatedProgress);
    setCurrentView('dashboard');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  const handleBackToConcept = () => {
    setCurrentView('concept');
  };

  if (isLoading) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-go-blue border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-slate-600 font-medium animate-pulse">Day {selectedDay} 레슨 준비 중...</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full max-w-lg mx-auto bg-white overflow-hidden shadow-2xl sm:rounded-none">
      {currentView === 'dashboard' && (
        <Dashboard
          onStart={handleStartLearning}
          progress={progress}
          onProgressUpdate={setProgress}
        />
      )}

      {currentView === 'concept' && lesson && (
        <ConceptCard
          lesson={lesson}
          onNext={handleGoToEditor}
          onBack={handleBackToDashboard}
          isCompleted={progress.completedDays.includes(selectedDay)}
        />
      )}

      {currentView === 'editor' && lesson && (
        <CodeEditor
          lesson={lesson}
          onBack={handleBackToConcept}
          onComplete={handleCompleteLesson}
          isCompleted={progress.completedDays.includes(selectedDay)}
        />
      )}
    </div>
  );
};

export default App;
