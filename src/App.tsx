import React, { useState } from 'react';
import { SalaryFactors, SalaryEstimate } from './types';
import { SalaryForm } from './components/SalaryForm';
import { SalaryResult } from './components/SalaryResult';
import { calculateSalaryEstimate } from './utils/salaryCalculator';

export default function App() {
  const [salaryEstimate, setSalaryEstimate] = useState<SalaryEstimate | null>(null);

  const handleSubmit = (factors: SalaryFactors) => {
    const estimate = calculateSalaryEstimate(factors);
    setSalaryEstimate(estimate);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-light tracking-tight">
            Digital Salary Compass
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Calculate your market value based on experience, location, and specialization
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="grid gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-light mb-6">Enter Your Details</h2>
              <SalaryForm onSubmit={handleSubmit} />
            </div>
            
            {salaryEstimate && (
              <div>
                <h2 className="text-lg font-light mb-6">Your Estimated Salary Range</h2>
                <SalaryResult estimate={salaryEstimate} />
              </div>
            )}
          </div>

          <div className="border-t border-gray-100 pt-12">
            <h2 className="text-lg font-light mb-6">Why Use Our Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-medium mb-2">Data-Driven Insights</h3>
                <p className="text-sm text-gray-500">
                  Market-validated salary data from the digital marketing industry
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Industry Specific</h3>
                <p className="text-sm text-gray-500">
                  Tailored specifically for digital marketing professionals
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Career Growth</h3>
                <p className="text-sm text-gray-500">
                  Make informed decisions about your career progression
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}