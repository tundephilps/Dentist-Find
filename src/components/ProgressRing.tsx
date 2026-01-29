import React from "react";
import { ProgressRingProps } from "../types";

const ProgressRing: React.FC<ProgressRingProps> = ({
  percentage,
  label,
  size = 60,
}) => {
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={
              percentage >= 90
                ? "#10b981"
                : percentage >= 70
                ? "#3b82f6"
                : "#ef4444"
            }
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{ animation: "fillProgress 1.5s ease-out" }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-gray-900">
            {percentage.toFixed(0)}%
          </span>
        </div>
      </div>
      <span className="text-xs text-gray-600 font-medium">{label}</span>

      <style>{`
        @keyframes fillProgress {
          from {
            stroke-dashoffset: ${circumference};
          }
        }
      `}</style>
    </div>
  );
};

export default ProgressRing;
