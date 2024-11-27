import { Location } from '../types';

export const canadaLocations: Location[] = [
  // Ontario
  { value: "toronto-on", label: "Toronto, ON", multiplier: 1.3, state: "Ontario", country: "Canada" },
  { value: "ottawa-on", label: "Ottawa, ON", multiplier: 1.2, state: "Ontario", country: "Canada" },
  { value: "mississauga-on", label: "Mississauga, ON", multiplier: 1.2, state: "Ontario", country: "Canada" },
  
  // British Columbia
  { value: "vancouver-bc", label: "Vancouver, BC", multiplier: 1.3, state: "British Columbia", country: "Canada" },
  { value: "victoria-bc", label: "Victoria, BC", multiplier: 1.2, state: "British Columbia", country: "Canada" },
  
  // Quebec
  { value: "montreal-qc", label: "Montreal, QC", multiplier: 1.2, state: "Quebec", country: "Canada" },
  { value: "quebec-city-qc", label: "Quebec City, QC", multiplier: 1.1, state: "Quebec", country: "Canada" },
  
  // Alberta
  { value: "calgary-ab", label: "Calgary, AB", multiplier: 1.2, state: "Alberta", country: "Canada" },
  { value: "edmonton-ab", label: "Edmonton, AB", multiplier: 1.1, state: "Alberta", country: "Canada" },
];