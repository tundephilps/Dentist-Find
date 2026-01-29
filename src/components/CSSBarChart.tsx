import React from "react";
import { CSSBarChartProps } from "../types";

const CSSBarChart: React.FC<CSSBarChartProps> = ({ data }) => {
  if (data.length === 0) return null;

  const max = Math.max(...data);

  // Determine trend
  const trendDiff =
    data.length >= 2 ? data[data.length - 1] - data[data.length - 2] : 0;

  return (
    <div className="flex items-end justify-between gap-1 h-16">
      {data.map((value, index) => {
        const heightPercent = (value / max) * 100;
        const isLast = index === data.length - 1;

        // Color based on position and trend
        let barColor = "bg-blue-400";
        if (isLast) {
          if (trendDiff > 0) barColor = "bg-green-500";
          else if (trendDiff < 0) barColor = "bg-red-500";
          else barColor = "bg-gray-400";
        }

        return (
          <div key={index} className="flex-1 relative group">
            {/* Bar */}
            <div
              className={`${barColor} rounded-t transition-all duration-500 ease-out hover:opacity-80`}
              style={{
                height: `${heightPercent}%`,
                minHeight: "4px",
                animation: `slideUp 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            />

            {/* Tooltip on hover */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
              {value}
            </div>
          </div>
        );
      })}

      <style>{`
  @keyframes slideUp {
    from {
      height: 0%;
    }
  }
`}</style>
    </div>
  );
};

export default CSSBarChart;
