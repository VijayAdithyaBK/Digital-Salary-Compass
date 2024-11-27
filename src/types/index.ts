export interface SalaryFactors {
  yearsOfExperience: number;
  location: string;
  specialization: string;
  education: string;
  companySize: string;
}

export interface SalaryEstimate {
  min: number;
  max: number;
  median: number;
}

export interface UserProfile {
  email: string;
  isPremium: boolean;
}