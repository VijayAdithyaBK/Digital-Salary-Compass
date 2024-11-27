import { Location } from '../types';

export const ukLocations: Location[] = [
  // England
  { value: "london-uk", label: "London", multiplier: 1.5, state: "England", country: "United Kingdom" },
  { value: "manchester-uk", label: "Manchester", multiplier: 1.2, state: "England", country: "United Kingdom" },
  { value: "birmingham-uk", label: "Birmingham", multiplier: 1.1, state: "England", country: "United Kingdom" },
  { value: "leeds-uk", label: "Leeds", multiplier: 1.1, state: "England", country: "United Kingdom" },
  { value: "liverpool-uk", label: "Liverpool", multiplier: 1.1, state: "England", country: "United Kingdom" },
  { value: "bristol-uk", label: "Bristol", multiplier: 1.2, state: "England", country: "United Kingdom" },
  
  // Scotland
  { value: "edinburgh-uk", label: "Edinburgh", multiplier: 1.2, state: "Scotland", country: "United Kingdom" },
  { value: "glasgow-uk", label: "Glasgow", multiplier: 1.1, state: "Scotland", country: "United Kingdom" },
  
  // Wales
  { value: "cardiff-uk", label: "Cardiff", multiplier: 1.1, state: "Wales", country: "United Kingdom" },
  
  // Northern Ireland
  { value: "belfast-uk", label: "Belfast", multiplier: 1.0, state: "Northern Ireland", country: "United Kingdom" },
];