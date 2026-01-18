import React, { useState, useCallback } from 'react';
import { CodingTest } from '../types';
import { ArrowLeft, Play, Send, CheckCircle, XCircle, Loader2, Lightbulb, ChevronDown, ChevronUp, Code, FileText } from 'lucide-react';

interface CodingTestSolverProps {
  test: CodingTest;
  onBack: () => void;
  onComplete: () => void;
}

interface TestResult {
  input: string;
  expected: string;
  actual: string;
  passed: boolean;
  isHidden: boolean;
}

interface ExecutionResult {
  success: boolean;
  output: string;
  error?: string;
  testResults: TestResult[];
}

const CodingTestSolver: React.FC<CodingTestSolverProps> = ({
  test,
  onBack,
  onComplete,
}) => {
  const [code, setCode] = useState(test.initialCode || `package main

import "fmt"

func main() {
    // 여기에 코드를 작성하세요
}
`);
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<ExecutionResult | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [activeTab, setActiveTab] = useState<'problem' | 'code'>('code');

  const runCode = useCallback(async (isSubmit: boolean = false) => {
    setIsRunning(true);
    setResult(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || 'https://gomaster-backend-fh3ewfxxvq-du.a.run.app/api'}/run`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code, day: test.day }),
        }
      );

      const data = await response.json();

      if (!data.success) {
        setResult({ success: false, output: '', error: data.error || '실행 중 오류가 발생했습니다.', testResults: [] });
        return;
      }

      const output = data.data?.output || '';
      let testResults: TestResult[] = [];
      
      if (isSubmit && test.testCases) {
        testResults = test.testCases.map((tc) => ({
          input: tc.input,
          expected: tc.expected,
          actual: output,
          passed: output.trim() === tc.expected.trim(),
          isHidden: tc.isHidden,
        }));
      }

      setResult({ success: !data.data?.error, output, error: data.data?.error, testResults });

      if (testResults.length > 0 && testResults.every((r) => r.passed)) {
        setTimeout(() => onComplete(), 2000);
      }
    } catch {
      setResult({ success: false, output: '', error: '서버에 연결할 수 없습니다.', testResults: [] });
    } finally {
      setIsRunning(false);
    }
  }, [code, test, onComplete]);

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes('Bronze')) return 'bg-amber-700';
    if (difficulty.includes('Silver')) return 'bg-gray-400';
    if (difficulty.includes('Gold')) return 'bg-yellow-500';
    return 'bg-gray-300';
  };

  return (
    <div className="h-full flex flex-col bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3 flex items-center gap-3 z-10">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-0.5 rounded-full font-bold text-white ${getDifficultyColor(test.difficulty)}`}>
              {test.difficulty}
            </span>
          </div>
          <h1 className="font-bold text-gray-900 truncate">{test.title}</h1>
        </div>
      </div>

      {/* Tab Switch */}
      <div className="bg-white border-b flex">
        <button
          onClick={() => setActiveTab('problem')}
          className={`flex-1 py-3 flex items-center justify-center gap-2 text-sm font-semibold transition-colors ${
            activeTab === 'problem' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500'
          }`}
        >
          <FileText className="w-4 h-4" />
          문제
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`flex-1 py-3 flex items-center justify-center gap-2 text-sm font-semibold transition-colors ${
            activeTab === 'code' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500'
          }`}
        >
          <Code className="w-4 h-4" />
          코드
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {/* Problem Tab */}
        {activeTab === 'problem' && (
          <div className="h-full overflow-y-auto p-4 space-y-4">
            {/* Problem Statement */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                📝 문제
              </h3>
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {test.problemStatement || test.description}
              </p>
            </div>

            {/* Input/Output */}
            {(test.inputDescription || test.outputDescription) && (
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                {test.inputDescription && (
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">📥 입력</h4>
                    <p className="text-gray-600 text-sm">{test.inputDescription}</p>
                  </div>
                )}
                {test.outputDescription && (
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">📤 출력</h4>
                    <p className="text-gray-600 text-sm">{test.outputDescription}</p>
                  </div>
                )}
              </div>
            )}

            {/* Examples */}
            {test.examples && test.examples.length > 0 && (
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-4">💡 예제</h4>
                {test.examples.map((ex, idx) => (
                  <div key={idx} className="mb-4 last:mb-0">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-xs font-bold text-gray-500 block mb-2">입력</span>
                        <pre className="bg-gray-900 text-green-400 rounded-lg p-3 text-sm font-mono overflow-x-auto">
                          {ex.input || '(없음)'}
                        </pre>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-500 block mb-2">출력</span>
                        <pre className="bg-gray-900 text-green-400 rounded-lg p-3 text-sm font-mono overflow-x-auto">
                          {ex.output}
                        </pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Hint */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700"
              >
                <Lightbulb className="w-4 h-4" />
                힌트 보기
                {showHint ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {showHint && (
                <div className="mt-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <p className="text-sm text-amber-800">{test.hint}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Code Tab */}
        {activeTab === 'code' && (
          <div className="h-full flex flex-col">
            {/* Code Editor */}
            <div className="flex-1 p-3 overflow-hidden flex flex-col">
              <div className="flex-1 bg-gray-900 rounded-2xl overflow-hidden flex flex-col shadow-lg">
                <div className="px-4 py-2 bg-gray-800 flex items-center justify-between border-b border-gray-700">
                  <span className="text-sm text-gray-300 font-medium">main.go</span>
                  <span className="text-xs text-gray-500 bg-gray-700 px-2 py-0.5 rounded">Go</span>
                </div>
                <textarea
                  id="code-editor"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="flex-1 p-4 bg-gray-900 text-green-400 font-mono text-sm resize-none focus:outline-none leading-relaxed"
                  spellCheck={false}
                  placeholder="// 여기에 코드를 작성하세요"
                />
              </div>
            </div>

            {/* Result */}
            {result && (
              <div className="px-3 pb-3">
                <div className={`rounded-2xl p-4 ${result.success && !result.error ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`}>
                  {result.error ? (
                    <div className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-red-800">오류 발생</p>
                        <pre className="text-sm text-red-700 mt-2 whitespace-pre-wrap font-mono bg-red-100 p-2 rounded-lg">{result.error}</pre>
                      </div>
                    </div>
                  ) : result.testResults.length > 0 ? (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        {result.testResults.every(r => r.passed) ? (
                          <>
                            <CheckCircle className="w-6 h-6 text-green-500" />
                            <span className="font-bold text-green-800 text-lg">모든 테스트 통과! 🎉</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-6 h-6 text-red-500" />
                            <span className="font-bold text-red-800">
                              {result.testResults.filter(r => r.passed).length}/{result.testResults.length} 테스트 통과
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-green-800">실행 완료</p>
                        <pre className="text-sm text-green-700 mt-2 whitespace-pre-wrap font-mono bg-green-100 p-2 rounded-lg">{result.output || '(출력 없음)'}</pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Coding Shortcuts - Fixed above action buttons */}
      {activeTab === 'code' && (
        <div className="bg-gray-800 px-3 py-2 flex gap-1.5 overflow-x-auto border-t border-gray-700">
          {[
            { label: 'Tab', value: '    ' },
            { label: '()', value: '()' },
            { label: '{}', value: '{}' },
            { label: '[]', value: '[]' },
            { label: '""', value: '""' },
            { label: "''", value: "''" },
            { label: ':=', value: ':= ' },
            { label: '<-', value: '<-' },
            { label: 'fmt', value: 'fmt.' },
            { label: 'Println', value: 'Println()' },
            { label: 'Scan', value: 'Scan(&)' },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                const textarea = document.getElementById('code-editor') as HTMLTextAreaElement;
                if (textarea) {
                  const start = textarea.selectionStart;
                  const end = textarea.selectionEnd;
                  const newCode = code.substring(0, start) + item.value + code.substring(end);
                  setCode(newCode);
                  setTimeout(() => {
                    textarea.focus();
                    textarea.setSelectionRange(start + item.value.length, start + item.value.length);
                  }, 0);
                }
              }}
              className="px-3 py-2 bg-gray-700 text-gray-200 rounded-lg font-mono text-xs whitespace-nowrap active:bg-gray-500 transition-colors flex-shrink-0"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Action Buttons - Always visible */}
      <div className="bg-white border-t p-3 flex gap-3 shadow-lg">
        <button
          onClick={() => runCode(false)}
          disabled={isRunning}
          className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white py-3.5 rounded-2xl font-bold text-base hover:bg-gray-700 disabled:opacity-50 transition-all active:scale-95"
        >
          {isRunning ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
          실행
        </button>
        <button
          onClick={() => runCode(true)}
          disabled={isRunning}
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3.5 rounded-2xl font-bold text-base hover:bg-blue-500 disabled:opacity-50 transition-all active:scale-95"
        >
          {isRunning ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          제출
        </button>
      </div>
    </div>
  );
};

export default CodingTestSolver;
