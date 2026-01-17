import React from 'react';
import { DailyLesson } from '../types';
import { ChevronRight, ArrowLeft } from 'lucide-react';

// Simple syntax highlighter for Go code
const highlightGoCode = (code: string) => {
  const keywords = ['func', 'package', 'import', 'var', 'const', 'return', 'make', 'append', 'if', 'else', 'for', 'range', 'switch', 'case', 'default', 'type', 'struct', 'interface', 'map', 'chan', 'go', 'defer', 'select'];
  const lines = code.split('\n');

  return lines.map((line, lineIdx) => {
    const parts: React.ReactNode[] = [];
    let remaining = line;
    let keyIdx = 0;

    // Handle comments first
    const commentIdx = remaining.indexOf('//');
    let comment = '';
    if (commentIdx !== -1) {
      comment = remaining.substring(commentIdx);
      remaining = remaining.substring(0, commentIdx);
    }

    // Process remaining text
    let i = 0;
    while (i < remaining.length) {
      // Check for string literals
      if (remaining[i] === '"') {
        const endQuote = remaining.indexOf('"', i + 1);
        if (endQuote !== -1) {
          if (i > 0) {
            const before = remaining.substring(0, i);
            parts.push(<span key={`t${keyIdx++}`}>{highlightKeywords(before, keywords, keyIdx)}</span>);
          }
          parts.push(<span key={`s${keyIdx++}`} className="text-green-600">{remaining.substring(i, endQuote + 1)}</span>);
          remaining = remaining.substring(endQuote + 1);
          i = 0;
          continue;
        }
      }
      i++;
    }

    // Process remaining with keywords
    if (remaining) {
      parts.push(...highlightKeywords(remaining, keywords, keyIdx));
    }

    // Add comment if exists
    if (comment) {
      parts.push(<span key={`c${lineIdx}`} className="text-gray-400 italic">{comment}</span>);
    }

    return (
      <div key={lineIdx}>
        {parts.length > 0 ? parts : '\u00A0'}
      </div>
    );
  });
};

const highlightKeywords = (text: string, keywords: string[], startKey: number): React.ReactNode[] => {
  const parts: React.ReactNode[] = [];
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  let lastIndex = 0;
  let match;
  let keyIdx = startKey;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<span key={`p${keyIdx++}`}>{text.substring(lastIndex, match.index)}</span>);
    }
    parts.push(<span key={`k${keyIdx++}`} className="text-blue-600 font-semibold">{match[0]}</span>);
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(<span key={`e${keyIdx++}`}>{text.substring(lastIndex)}</span>);
  }

  return parts;
};

interface ConceptCardProps {
  lesson: DailyLesson;
  onNext: () => void;
  onBack: () => void;
  isCompleted?: boolean;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ lesson, onNext, onBack, isCompleted }) => {
  return (
    <div className="h-full flex flex-col bg-slate-light relative overflow-hidden">
      {/* Header */}
      <div className="px-6 py-6 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-200 transition-colors">
          <ArrowLeft className="w-6 h-6 text-slate-dark" />
        </button>
        <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-2">
          Day {lesson.day}
          {isCompleted && (
            <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full normal-case">완료됨</span>
          )}
        </div>
        <div className="w-8" /> {/* Spacer */}
      </div>

      {/* Main Card Container */}
      <div className="flex-1 px-4 pb-4 flex flex-col justify-center max-w-lg mx-auto w-full">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden flex flex-col h-[75vh]">
          {/* Card Header */}
          <div className="p-8 pb-4">
             <h2 className="text-sm font-bold text-go-blue mb-2 uppercase tracking-wide">Today's Concept</h2>
             <h1 className="text-3xl font-bold text-slate-dark leading-tight">{lesson.title}</h1>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-8">
             <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
               {lesson.concept.description}
             </p>

             {/* Code Block */}
             <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-6 overflow-x-auto">
               <pre className="font-mono text-sm leading-relaxed">
                 <code>{highlightGoCode(lesson.concept.codeSnippet)}</code>
               </pre>
             </div>

             <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 mb-4">
               <h3 className="text-go-blue font-bold text-sm mb-2 flex items-center gap-2">
                 💡 Insight
               </h3>
               <p className="text-slate-700 text-sm leading-relaxed">
                 {lesson.concept.explanation}
               </p>
             </div>

             {lesson.concept.keyPoints && lesson.concept.keyPoints.length > 0 && (
               <div className="bg-green-50/50 p-5 rounded-xl border border-green-100 mb-8">
                 <h3 className="text-green-700 font-bold text-sm mb-3 flex items-center gap-2">
                   📌 Key Points
                 </h3>
                 <ul className="space-y-2">
                   {lesson.concept.keyPoints.map((point, idx) => (
                     <li key={idx} className="text-slate-700 text-sm flex items-start gap-2">
                       <span className="text-green-500 mt-1">•</span>
                       {point}
                     </li>
                   ))}
                 </ul>
               </div>
             )}
          </div>

          {/* Card Footer / Pagination */}
          <div className="p-6 bg-white border-t border-gray-50 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-800" />
              <div className="w-2 h-2 rounded-full bg-gray-200" />
            </div>
            <button 
              onClick={onNext}
              className="flex items-center gap-2 bg-slate-dark text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 active:scale-95 transition-all"
            >
              Start Challenge <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptCard;