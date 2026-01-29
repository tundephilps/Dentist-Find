import { PracticeSummary } from "../types";

export const mockPractices: PracticeSummary[] = [
  {
    id: "p1",
    name: "Good Life Clinic",
    city: "Ibadan",
    country: "Nigeria",
    newPatientsThisMonth: 28,
    appointmentRequests: 65,
    conversionRate: 42.5,
    monthlyTrend: [10, 12, 8, 15, 18, 28],
  },
  {
    id: "p2",
    name: "Pretty Boy Paternity",
    city: "Lagos",
    country: "Nigeria",
    newPatientsThisMonth: 14,
    appointmentRequests: 38,
    conversionRate: 99.8,
    monthlyTrend: [18, 20, 15, 12, 10, 14],
  },
  {
    id: "p3",
    name: "ShIne Dentals",
    city: "Abuja",
    country: "Nigeria",
    newPatientsThisMonth: 45,
    appointmentRequests: 92,
    conversionRate: 78.9,
    monthlyTrend: [22, 25, 30, 35, 40, 45],
  },
];
