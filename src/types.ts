export interface PracticeSummary {
  id: string;
  name: string;
  city: string;
  country: string;
  newPatientsThisMonth: number;
  appointmentRequests: number;
  conversionRate: number;
  monthlyTrend: number[];
}

export interface PracticeSummaryCardProps {
  practice: PracticeSummary;
}

export interface CSSBarChartProps {
  data: number[];
}

export interface ProgressRingProps {
  percentage: number;
  label: string;
  size?: number;
}
