import React, { useState } from 'react';
import { CodingTest } from '../types';
import { ArrowLeft, ExternalLink, Lightbulb, Tag, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

interface CodingTestCardProps {
  day: number;
  codingTests: CodingTest[];
  onBack: () => void;
  onComplete: () => void;
  onSolve?: (test: CodingTest) => void;
}

const getPlatformInfo = (platform: string) => {
  if (platform === 'programmers') {
    return {
      name: 'Programmers',
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    };
  }
  return {
    name: 'Baekjoon',
    color: 'bg-green-600',
    textColor: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  };
};

const getDifficultyColor = (difficulty: string) => {
  if (difficulty.includes('Bronze')) return 'bg-amber-700 text-white';
  if (difficulty.includes('Silver')) return 'bg-gray-400 text-white';
  if (difficulty.includes('Gold')) return 'bg-yellow-500 text-white';
  if (difficulty.includes('Lv.0')) return 'bg-gray-300 text-gray-700';
  if (difficulty.includes('Lv.1')) return 'bg-green-400 text-white';
  if (difficulty.includes('Lv.2')) return 'bg-blue-400 text-white';
  return 'bg-gray-200 text-gray-700';
};

const CodingTestCard: React.FC<CodingTestCardProps> = ({
  day,
  codingTests,
  onBack,
  onComplete,
  onSolve,
}) => {
  const [showHint, setShowHint] = useState<number | null>(null);

  const handleOpenProblem = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="h-full flex flex-col bg-slate-light relative overflow-hidden">
      {/* Header */}
      <div className="px-6 py-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-slate-dark" />
        </button>
        <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-2">
          Day {day} - Coding Test
        </div>
        <div className="w-8" />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 pb-4 flex flex-col max-w-lg mx-auto w-full">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden flex flex-col h-[75vh]">
          {/* Card Header */}
          <div className="p-8 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <h2 className="text-sm font-bold text-go-blue uppercase tracking-wide">
                Real Coding Test
              </h2>
            </div>
            <h1 className="text-2xl font-bold text-slate-dark leading-tight">
              Day {day} 실전 문제
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              오늘 배운 개념을 실제 코딩 테스트 문제로 연습해보세요.
            </p>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-8 pb-4">
            {codingTests.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>해당 Day의 추천 문제가 없습니다.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {codingTests.map((test) => {
                  const platformInfo = getPlatformInfo(test.platform);
                  return (
                    <div
                      key={test.id}
                      className={`rounded-xl border ${platformInfo.borderColor} ${platformInfo.bgColor} p-4 transition-all hover:shadow-md`}
                    >
                      {/* Problem Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full font-semibold ${platformInfo.color} text-white`}
                            >
                              {platformInfo.name}
                            </span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full font-semibold ${getDifficultyColor(
                                test.difficulty
                              )}`}
                            >
                              {test.difficulty}
                            </span>
                          </div>
                          <h3 className="font-bold text-slate-dark text-lg">
                            {test.title}
                          </h3>
                          <p className="text-xs text-gray-500">
                            #{test.problemId} | {test.category}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {test.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {test.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-xs bg-white/70 text-gray-600 px-2 py-1 rounded-full"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Hint Toggle */}
                      <button
                        onClick={() =>
                          setShowHint(showHint === test.id ? null : test.id)
                        }
                        className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 mb-3"
                      >
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>힌트 보기</span>
                        {showHint === test.id ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {/* Hint Content */}
                      {showHint === test.id && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-3">
                          <p className="text-sm text-yellow-800">{test.hint}</p>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        {onSolve && test.testCases && test.testCases.length > 0 ? (
                          <button
                            onClick={() => onSolve(test)}
                            className={`flex-1 flex items-center justify-center gap-2 ${platformInfo.color} text-white px-4 py-2.5 rounded-xl font-semibold hover:opacity-90 active:scale-[0.98] transition-all`}
                          >
                            문제 풀기
                          </button>
                        ) : (
                          <button
                            onClick={() => handleOpenProblem(test.url)}
                            className={`flex-1 flex items-center justify-center gap-2 ${platformInfo.color} text-white px-4 py-2.5 rounded-xl font-semibold hover:opacity-90 active:scale-[0.98] transition-all`}
                          >
                            문제 풀러 가기
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Card Footer */}
          <div className="p-6 bg-white border-t border-gray-50 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              {codingTests.length}개의 추천 문제
            </div>
            <button
              onClick={onComplete}
              className="flex items-center gap-2 bg-slate-dark text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 active:scale-95 transition-all"
            >
              학습 완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingTestCard;
