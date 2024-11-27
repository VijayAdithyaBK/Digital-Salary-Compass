import { SalaryFactors, SalaryEstimate } from '../types';
import { locations } from '../data/locations';
import { specializations } from '../data/specializations';

const BASE_SALARY = 50000;
const EXPERIENCE_MULTIPLIER = 5000;

// Specialization category multipliers
const CATEGORY_MULTIPLIERS: Record<string, number> = {
  'SEO': 1.1,
  'Content Marketing': 1.0,
  'Social Media': 1.05,
  'PPC': 1.15,
  'Analytics': 1.2,
  'Email Marketing': 1.0,
};

export function calculateSalaryEstimate(factors: SalaryFactors): SalaryEstimate {
  const experienceBonus = factors.yearsOfExperience * EXPERIENCE_MULTIPLIER;
  
  // Get location multiplier
  const location = locations.find(loc => loc.value === factors.location);
  const locationMultiplier = location?.multiplier || 1.0;
  
  // Get specialization multiplier
  const specialization = specializations.find(spec => spec.value === factors.specialization);
  const specializationMultiplier = specialization 
    ? (CATEGORY_MULTIPLIERS[specialization.category] || 1.0)
    : 1.0;
  
  const baseCalculation = (BASE_SALARY + experienceBonus) * locationMultiplier * specializationMultiplier;
  
  return {
    min: Math.round(baseCalculation * 0.9),
    max: Math.round(baseCalculation * 1.1),
    median: Math.round(baseCalculation),
  };
}