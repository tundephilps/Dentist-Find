import React from "react";
import PracticeSummaryCard from "./components/PracticeSummaryCard";
import { mockPractices } from "./data/mockData";
import HeroSection from "./components/Hero";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <div className="mx-auto mt-8">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-900 sm:text-5xl">
          Practice Summary Overview
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {mockPractices.map((practice) => (
            <PracticeSummaryCard key={practice.id} practice={practice} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
