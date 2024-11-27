export interface Location {
  value: string;
  label: string;
  multiplier: number;
  state?: string;
  country: string;
}

export interface Specialization {
  value: string;
  label: string;
  category: string;
  subCategory?: string;
}