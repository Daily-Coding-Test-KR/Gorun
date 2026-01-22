import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import ConceptCard from './components/ConceptCard';
import CodeEditor from './components/CodeEditor';
import CodingTestCard from './components/CodingTestCard';
import CodingTestSolver from './components/CodingTestSolver';
import { DailyLesson, CodingTest } from './types';

type ViewState = 'dashboard' | 'concept' | 'editor' | 'codingTest' | 'codingTestSolver';
import { fetchDailyLesson, checkHealth } from './services/api';
import { getCodingTestsByDay } from './data/codingTests';
import { generateDailyContent } from './services/geminiService';
import { loadProgress, completeDay, UserProgress } from './services/storage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [progress, setProgress] = useState<UserProgress>(loadProgress);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [lesson, setLesson] = useState<DailyLesson | null>(null);
  const [codingTests, setCodingTests] = useState<CodingTest[]>([]);
  const [selectedTest, setSelectedTest] = useState<CodingTest | null>(null);
  const [currentTestIndex, setCurrentTestIndex] = useState<number>(-1);
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

  const handleGoToCodingTest = () => {
    // Get coding tests from hardcoded data
    const tests = getCodingTestsByDay(selectedDay);
    setCodingTests(tests);
    setCurrentView('codingTest');
  };

  const handleCompleteLesson = () => {
    const updatedProgress = completeDay(selectedDay);
    setProgress(updatedProgress);
    // Navigate to coding test after completing the lesson
    handleGoToCodingTest();
  };

  const handleCompleteCodingTest = () => {
    setCurrentView('dashboard');
  };

  const handleSolveProblem = (test: CodingTest) => {
    setSelectedTest(test);
    const index = codingTests.findIndex(t => t.id === test.id);
    setCurrentTestIndex(index);
    setCurrentView('codingTestSolver');
  };

  const handleNextProblem = () => {
    if (currentTestIndex < codingTests.length - 1) {
      const nextIndex = currentTestIndex + 1;
      setCurrentTestIndex(nextIndex);
      setSelectedTest(codingTests[nextIndex]);
      // The view is already 'codingTestSolver', but we update the selected test
    }
  };

  const handleBackToCodingTest = () => {
    setCurrentView('codingTest');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  const handleBackToConcept = () => {
    setCurrentView('concept');
  };

  const handleBackToEditor = () => {
    setCurrentView('editor');
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

      {currentView === 'codingTest' && (
        <CodingTestCard
          day={selectedDay}
          codingTests={codingTests}
          onBack={handleBackToEditor}
          onComplete={handleCompleteCodingTest}
          onSolve={handleSolveProblem}
        />
      )}

      {currentView === 'codingTestSolver' && selectedTest && (
        <CodingTestSolver
          test={selectedTest}
          onBack={handleBackToCodingTest}
          onComplete={handleCompleteCodingTest}
          onNext={handleNextProblem}
          hasNext={currentTestIndex < codingTests.length - 1}
        />
      )}
    </div>
  );
};

export default App;
