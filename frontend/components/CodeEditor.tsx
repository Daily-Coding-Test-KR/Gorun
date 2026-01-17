import React, { useState, useRef } from 'react';
import { DailyLesson } from '../types';
import { Play, Check, ArrowLeft, RefreshCw, Lightbulb, Eye } from 'lucide-react';
import { runCode } from '../services/api';
import { checkCodeWithGemini } from '../services/geminiService';

interface CodeEditorProps {
  lesson: DailyLesson;
  onBack: () => void;
  onComplete: () => void;
  isCompleted?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ lesson, onBack, onComplete, isCompleted }) => {
  const [code, setCode] = useState(lesson.challenge.initialCode);
  const [output, setOutput] = useState<string>('');
  const [isChecking, setIsChecking] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [showExpected, setShowExpected] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Expected output examples based on day
  const getExpectedOutput = () => {
    const expectedOutputs: Record<number, string> = {
      1: 'Hello, [이름]!\n예: Hello, Gopher!',
      2: '[이름] [나이] [키]\n예: TaeHo 18 175.5',
      3: 'int to float64: 42.000000\nfloat64 to int: 3',
      4: '면적: 78.53',
      5: '덧셈: 19\n뺄셈: 11\n곱셈: 60\n나눗셈: 3\n나머지: 3',
      6: 'HELLO, WORLD\n[hello world]',
      7: '이름: [name], 나이: [age]세',
      8: 'C',
      9: '합계: 55',
      10: '수요일',
    };
    return expectedOutputs[lesson.day] || '문제 설명을 참고하세요.';
  };

  // Helper to insert text at cursor position
  const insertText = (text: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newCode = code.substring(0, start) + text + code.substring(end);

    setCode(newCode);

    // Restore focus and cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + text.length, start + text.length);
    }, 0);
  };

  const handleRun = async () => {
    setIsChecking(true);
    setOutput("코드 실행 중...");

    try {
      // Try backend first
      const result = await runCode(code, lesson.day);

      if (result.success) {
        const feedbackText = result.feedback + (result.output ? `\n\n출력:\n${result.output.trim()}` : '');
        setOutput(feedbackText);
      } else {
        // If backend fails, try Gemini
        if (result.error === 'Network error') {
          const feedback = await checkCodeWithGemini(code, lesson.challenge.description);
          setOutput(feedback);
        } else {
          setOutput(`오류: ${result.error}\n\n${result.feedback}`);
        }
      }
    } catch (error) {
      // Fallback to Gemini AI
      const feedback = await checkCodeWithGemini(code, lesson.challenge.description);
      setOutput(feedback);
    }

    setIsChecking(false);
  };

  // Quick symbols with tab, space, parentheses added
  const quickSymbols = [
    { label: 'Tab', value: '    ' },
    { label: 'Space', value: ' ' },
    { label: '()', value: '()' },
    { label: ':=', value: ':=' },
    { label: '<-', value: '<-' },
    { label: '[]', value: '[]' },
    { label: '{}', value: '{}' },
    { label: 'func', value: 'func ' },
    { label: 'fmt.', value: 'fmt.' },
    { label: 'go', value: 'go ' },
  ];

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Top Navigation & Problem Summary */}
      <div className="bg-white border-b border-gray-100 z-20">
        <div className="px-4 py-3 flex items-center justify-between">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-slate-500">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="font-semibold text-slate-dark flex items-center gap-2">
            Problem
            {isCompleted && (
              <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">완료됨</span>
            )}
          </div>
          <button
             onClick={() => setCode(lesson.challenge.initialCode)}
             className="p-2 -mr-2 text-go-blue hover:bg-blue-50 rounded-full"
          >
             <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        {/* Problem Description */}
        <div className="px-6 pb-4">
           <p className="text-slate-600 text-sm leading-relaxed font-medium">
             {lesson.challenge.description}
           </p>

           {/* Expected Output & Hints Buttons */}
           <div className="flex gap-2 mt-3">
             <button
               onClick={() => setShowExpected(!showExpected)}
               className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                 showExpected ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
               }`}
             >
               <Eye className="w-3.5 h-3.5" />
               예상 출력
             </button>
             {lesson.challenge.hints && lesson.challenge.hints.length > 0 && (
               <button
                 onClick={() => setShowHints(!showHints)}
                 className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                   showHints ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                 }`}
               >
                 <Lightbulb className="w-3.5 h-3.5" />
                 힌트
               </button>
             )}
           </div>

           {/* Expected Output Panel */}
           {showExpected && (
             <div className="mt-3 p-3 bg-purple-50 border border-purple-100 rounded-xl">
               <p className="text-xs font-semibold text-purple-600 mb-1">예상 출력:</p>
               <pre className="text-sm text-purple-800 font-mono whitespace-pre-wrap">{getExpectedOutput()}</pre>
             </div>
           )}

           {/* Hints Panel */}
           {showHints && lesson.challenge.hints && (
             <div className="mt-3 p-3 bg-yellow-50 border border-yellow-100 rounded-xl">
               <p className="text-xs font-semibold text-yellow-700 mb-2">힌트:</p>
               <ul className="space-y-1">
                 {lesson.challenge.hints.map((hint, idx) => (
                   <li key={idx} className="text-sm text-yellow-800 flex items-start gap-2">
                     <span className="text-yellow-500">•</span>
                     {hint}
                   </li>
                 ))}
               </ul>
             </div>
           )}
        </div>
      </div>

      {/* Code Editor Area */}
      <div className="flex-1 relative flex">
        {/* Line Numbers */}
        <div className="w-10 bg-gray-50 pt-4 text-right pr-2 text-gray-300 font-mono text-sm select-none border-r border-gray-100 leading-6">
          {code.split('\n').map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* Text Area */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 p-4 pt-4 bg-white text-slate-800 font-mono text-sm leading-6 resize-none focus:outline-none"
          spellCheck={false}
          autoCapitalize="none"
          autoCorrect="off"
        />

        {/* Floating AI Feedback / Output Overlay */}
        {output && (
          <div className="absolute bottom-4 left-4 right-4 bg-slate-800 text-white p-4 rounded-xl shadow-2xl animate-fade-in-up z-10 max-h-40 overflow-y-auto">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">Output</span>
              <button onClick={() => setOutput('')} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <pre className="font-mono text-sm whitespace-pre-wrap">{output}</pre>
          </div>
        )}
      </div>

      {/* Keyboard Accessory Bar (Quick Toolbar) */}
      <div className="bg-slate-50 border-t border-gray-200 px-2 py-2 flex gap-2 overflow-x-auto no-scrollbar items-center">
        {quickSymbols.map((sym) => (
          <button
            key={sym.label}
            onClick={() => insertText(sym.value)}
            className="flex-shrink-0 px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-go-blue font-mono font-bold text-sm active:bg-blue-50 transition-colors"
          >
            {sym.label}
          </button>
        ))}
      </div>

      {/* Action Bar */}
      <div className="p-4 bg-white border-t border-gray-100 flex gap-3">
        <button
           onClick={handleRun}
           disabled={isChecking}
           className="flex-1 bg-slate-dark text-white font-bold py-3.5 rounded-xl shadow-lg shadow-slate-200 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          {isChecking ? (
            <RefreshCw className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Play className="w-5 h-5 fill-current" /> Run Code
            </>
          )}
        </button>

        <button
           onClick={onComplete}
           className="px-5 bg-go-blue/10 text-go-blue rounded-xl font-bold border border-go-blue/20 flex items-center justify-center active:scale-95 transition-all"
        >
           <Check className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
