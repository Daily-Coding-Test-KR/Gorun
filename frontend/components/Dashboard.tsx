import React, { useState } from 'react';
import Heatmap from './Heatmap';
import { Flame, Trophy, Target, ChevronDown, Check, X } from 'lucide-react';
import { UserProgress, updateUserName } from '../services/storage';

interface DashboardProps {
  onStart: (day?: number) => void;
  progress: UserProgress;
  onProgressUpdate?: (progress: UserProgress) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStart, progress, onProgressUpdate }) => {
  const [showDaySelector, setShowDaySelector] = useState(false);
  const [selectedDay, setSelectedDay] = useState(progress.currentDay);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [editName, setEditName] = useState(progress.userName);

  const handleSaveName = () => {
    if (editName.trim()) {
      const updated = updateUserName(editName.trim());
      if (onProgressUpdate) {
        onProgressUpdate(updated);
      }
      setShowProfileModal(false);
    }
  };

  // Available days (up to 40 for now)
  const availableDays = Array.from({ length: 40 }, (_, i) => i + 1);

  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
    setShowDaySelector(false);
  };

  const handleStart = () => {
    onStart(selectedDay);
  };

  return (
    <div className="flex flex-col h-full bg-white relative animate-fade-in">
      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-dark">프로필 수정</h2>
              <button
                onClick={() => setShowProfileModal(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">이름</label>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-go-blue focus:border-transparent"
                placeholder="이름을 입력하세요"
                autoFocus
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowProfileModal(false)}
                className="flex-1 py-3 border border-gray-200 rounded-xl font-semibold text-gray-600 hover:bg-gray-50"
              >
                취소
              </button>
              <button
                onClick={handleSaveName}
                className="flex-1 py-3 bg-go-blue text-white rounded-xl font-semibold hover:bg-[#0095bd]"
              >
                저장
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div className="pt-12 px-6 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-dark tracking-tight">Hello, {progress.userName}</h1>
          <p className="text-gray-400 text-sm mt-1 font-medium">Ready to code?</p>
        </div>
        <button
          onClick={() => {
            setEditName(progress.userName);
            setShowProfileModal(true);
          }}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm hover:bg-gray-200 transition-colors"
        >
           <span className="text-xl">🐹</span>
        </button>
      </div>

      {/* Progress Card */}
      <div className="mx-6 mt-4 p-6 bg-white border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="flex justify-between items-end mb-6">
          <div>
             <div className="flex items-center gap-2 mb-2">
               <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
               <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Current Streak</span>
             </div>
             <div className="text-4xl font-extrabold text-slate-dark">
               Day {progress.currentStreak} <span className="text-gray-300 text-2xl font-normal">/ 100</span>
             </div>
          </div>
        </div>

        {/* Heatmap Area */}
        <div className="bg-white rounded-xl">
           <Heatmap completedDays={progress.completedDays} />
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4 mx-6 mt-6">
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center gap-2">
           <Trophy className="w-6 h-6 text-yellow-500" />
           <span className="text-xs font-semibold text-gray-500">Completed</span>
           <span className="text-lg font-bold text-slate-dark">{progress.totalCompleted}</span>
        </div>
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center gap-2">
           <Target className="w-6 h-6 text-go-blue" />
           <span className="text-xs font-semibold text-gray-500">Longest Streak</span>
           <span className="text-lg font-bold text-slate-dark">{progress.longestStreak}</span>
        </div>
      </div>

      {/* Day Selector */}
      <div className="mx-6 mt-6">
        <button
          onClick={() => setShowDaySelector(!showDaySelector)}
          className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors"
        >
          <span className="font-semibold text-slate-700">
            Day {selectedDay} 학습하기
            {progress.completedDays.includes(selectedDay) && (
              <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">완료됨</span>
            )}
          </span>
          <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${showDaySelector ? 'rotate-180' : ''}`} />
        </button>

        {/* Day List */}
        {showDaySelector && (
          <div className="mt-2 max-h-48 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-lg">
            {availableDays.map((day) => (
              <button
                key={day}
                onClick={() => handleDaySelect(day)}
                className={`w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0 ${
                  selectedDay === day ? 'bg-blue-50' : ''
                }`}
              >
                <span className={`font-medium ${selectedDay === day ? 'text-go-blue' : 'text-slate-700'}`}>
                  Day {day}
                </span>
                <div className="flex items-center gap-2">
                  {progress.completedDays.includes(day) && (
                    <span className="flex items-center gap-1 text-xs text-green-600">
                      <Check className="w-4 h-4" />
                      완료
                    </span>
                  )}
                  {day === progress.currentDay && !progress.completedDays.includes(day) && (
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">현재</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Bottom CTA */}
      <div className="p-6 pb-8 bg-white/80 backdrop-blur-sm sticky bottom-0 z-20">
        <button
          onClick={handleStart}
          className="w-full bg-go-blue hover:bg-[#0095bd] active:scale-95 transition-all text-white font-bold text-lg py-4 rounded-2xl shadow-lg shadow-blue-200/50 flex items-center justify-center gap-2"
        >
          <span>
            {progress.completedDays.includes(selectedDay)
              ? `Day ${selectedDay} 다시 학습하기`
              : `Day ${selectedDay} 학습 시작하기`
            }
          </span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
