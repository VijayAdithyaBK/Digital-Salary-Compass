import React, { useState, useMemo } from 'react';
import { SalaryFactors } from '../types';
import { SearchableSelect } from './SearchableSelect';
import { locations } from '../data/locations';
import { specializations } from '../data/specializations';

interface Props {
  onSubmit: (factors: SalaryFactors) => void;
}

export function SalaryForm({ onSubmit }: Props) {
  const [factors, setFactors] = useState<SalaryFactors>({
    yearsOfExperience: 0,
    location: '',
    specialization: '',
    education: '',
    companySize: '',
  });

  const selectedLocation = useMemo(() => 
    locations.find(loc => loc.value === factors.location) || null
  , [factors.location]);

  const selectedSpecialization = useMemo(() => 
    specializations.find(spec => spec.value === factors.specialization) || null
  , [factors.specialization]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(factors);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm mb-2 text-gray-600">
          Years of Experience
        </label>
        <input
          type="number"
          min="0"
          max="50"
          value={factors.yearsOfExperience}
          onChange={(e) => setFactors({ ...factors, yearsOfExperience: Number(e.target.value) })}
          className="w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:border-gray-400 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm mb-2 text-gray-600">
          Location
        </label>
        <SearchableSelect
          options={locations}
          value={selectedLocation}
          onChange={(option) => setFactors({ ...factors, location: option?.value || '' })}
          placeholder="Search locations..."
        />
      </div>

      <div>
        <label className="block text-sm mb-2 text-gray-600">
          Specialization
        </label>
        <SearchableSelect
          options={specializations}
          value={selectedSpecialization}
          onChange={(option) => setFactors({ ...factors, specialization: option?.value || '' })}
          placeholder="Search specializations..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-gray-900 text-white text-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Calculate Salary
      </button>
    </form>
  );
}