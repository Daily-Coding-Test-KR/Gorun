import React from 'react';

interface HeatmapProps {
  completedDays?: number[];
}

const Heatmap: React.FC<HeatmapProps> = ({ completedDays = [] }) => {
  // 12 weeks, 7 days each = 84 cells (representing ~84 days)
  const weeks = 12;
  const daysPerWeek = 7;

  const getIntensity = (weekIndex: number, dayIndex: number) => {
    // Calculate day number (1-84)
    const dayNum = weekIndex * 7 + dayIndex + 1;

    // Check if this day is completed
    if (completedDays.includes(dayNum)) {
      return 3; // Completed - darkest
    }

    // For days not yet available or not completed
    if (dayNum > 40) {
      return 0; // Future days - empty
    }

    return 0; // Available but not completed
  };

  const getColor = (level: number) => {
    switch(level) {
      case 3: return 'bg-go-blue'; // Completed
      case 2: return 'bg-[#40C9E8]';
      case 1: return 'bg-[#B0E8F5]';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="flex gap-1.5 justify-center py-4 overflow-hidden">
      {Array.from({ length: weeks }).map((_, w) => (
        <div key={w} className="flex flex-col gap-1.5">
          {Array.from({ length: daysPerWeek }).map((_, d) => {
             const level = getIntensity(w, d);
             const dayNum = w * 7 + d + 1;
             return (
               <div
                 key={d}
                 className={`w-3 h-3 sm:w-4 sm:h-4 rounded-[2px] ${getColor(level)} transition-colors duration-500`}
                 title={`Day ${dayNum}${completedDays.includes(dayNum) ? ' (완료)' : ''}`}
               />
             );
          })}
        </div>
      ))}
    </div>
  );
};

export default Heatmap;
