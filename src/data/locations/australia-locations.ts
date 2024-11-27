import { Location } from '../types';

export const australiaLocations: Location[] = [
  // New South Wales
  { value: "sydney-nsw", label: "Sydney, NSW", multiplier: 1.4, state: "New South Wales", country: "Australia" },
  { value: "newcastle-nsw", label: "Newcastle, NSW", multiplier: 1.2, state: "New South Wales", country: "Australia" },
  
  // Victoria
  { value: "melbourne-vic", label: "Melbourne, VIC", multiplier: 1.3, state: "Victoria", country: "Australia" },
  { value: "geelong-vic", label: "Geelong, VIC", multiplier: 1.1, state: "Victoria", country: "Australia" },
  
  // Queensland
  { value: "brisbane-qld", label: "Brisbane, QLD", multiplier: 1.2, state: "Queensland", country: "Australia" },
  { value: "gold-coast-qld", label: "Gold Coast, QLD", multiplier: 1.1, state: "Queensland", country: "Australia" },
  
  // Western Australia
  { value: "perth-wa", label: "Perth, WA", multiplier: 1.2, state: "Western Australia", country: "Australia" },
  
  // South Australia
  { value: "adelaide-sa", label: "Adelaide, SA", multiplier: 1.1, state: "South Australia", country: "Australia" },
];