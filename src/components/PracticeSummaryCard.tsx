import React from "react";
import { PracticeSummaryCardProps } from "../types";
import { formatPercentage } from "../utils/formatters";
import CSSBarChart from "./CSSBarChart";
import ProgressRing from "./ProgressRing";
import { TrendingUp } from "lucide-react";

const PracticeSummaryCard: React.FC<PracticeSummaryCardProps> = ({
  practice,
}) => {
  const {
    name,
    city,
    country,
    newPatientsThisMonth,
    appointmentRequests,
    conversionRate,
    monthlyTrend,
  } = practice;

  return (
    <div className="group relative rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-indigo-500/10 to-blue-500/10" />

      {/* Header */}
      <div className="relative z-10 px-6 pt-6 pb-4">
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-500">
          {city}, {country}
        </p>
      </div>

      {/* Hero Metric */}
      <div className="relative z-10 flex items-center justify-between px-6 pb-6">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Conversion Rate
          </p>
          <p className="mt-1 text-4xl font-extrabold text-indigo-600">
            {formatPercentage(conversionRate)}
          </p>
        </div>

        <ProgressRing
          percentage={conversionRate}
          label="Conversion"
          size={84}
        />
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Secondary Metrics */}
      <div className="relative z-10 grid grid-cols-2 gap-4 px-6 py-5">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs uppercase text-gray-500">New Patients</p>
          <p className="mt-1 text-2xl font-bold text-green-600">
            +{newPatientsThisMonth}
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs uppercase text-gray-500">Appointments</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">
            {appointmentRequests}
          </p>
        </div>
      </div>

      {/* Trend */}
      <div className="relative z-10 px-6 pb-6">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            6-Month Trend
          </p>
          <TrendingUp className="h-4 w-4 text-indigo-500" />
        </div>

        <CSSBarChart data={monthlyTrend} />
      </div>
    </div>
  );
};

export default PracticeSummaryCard;
