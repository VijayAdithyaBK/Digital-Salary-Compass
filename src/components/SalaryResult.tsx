import React from 'react';
import { SalaryEstimate } from '../types';

interface Props {
  estimate: SalaryEstimate | null;
}

export function SalaryResult({ estimate }: Props) {
  if (!estimate) return null;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="border border-gray-100 p-4">
        <div className="text-sm text-gray-500 mb-1">Minimum</div>
        <div className="text-xl font-light">${estimate.min.toLocaleString()}</div>
      </div>
      
      <div className="border border-gray-900 p-4">
        <div className="text-sm text-gray-500 mb-1">Median</div>
        <div className="text-xl font-light">${estimate.median.toLocaleString()}</div>
      </div>
      
      <div className="border border-gray-100 p-4">
        <div className="text-sm text-gray-500 mb-1">Maximum</div>
        <div className="text-xl font-light">${estimate.max.toLocaleString()}</div>
      </div>
      
      <div className="col-span-3 mt-4">
        <p className="text-xs text-gray-400 text-center">
          * Estimates are based on market data and may vary based on additional factors
        </p>
      </div>
    </div>
  );
}