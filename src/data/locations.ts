interface Location {
  value: string;
  label: string;
  multiplier: number;
}

export const locations: Location[] = [
  // United States
  { value: "new-york-ny", label: "New York, NY", multiplier: 1.6 },
  { value: "san-francisco-ca", label: "San Francisco, CA", multiplier: 1.7 },
  { value: "los-angeles-ca", label: "Los Angeles, CA", multiplier: 1.5 },
  { value: "chicago-il", label: "Chicago, IL", multiplier: 1.3 },
  { value: "boston-ma", label: "Boston, MA", multiplier: 1.4 },
  { value: "seattle-wa", label: "Seattle, WA", multiplier: 1.5 },
  { value: "austin-tx", label: "Austin, TX", multiplier: 1.2 },
  { value: "miami-fl", label: "Miami, FL", multiplier: 1.2 },
  { value: "denver-co", label: "Denver, CO", multiplier: 1.2 },
  
  // United Kingdom
  { value: "london-uk", label: "London, UK", multiplier: 1.5 },
  { value: "manchester-uk", label: "Manchester, UK", multiplier: 1.2 },
  { value: "birmingham-uk", label: "Birmingham, UK", multiplier: 1.1 },
  
  // Canada
  { value: "toronto-ca", label: "Toronto, Canada", multiplier: 1.3 },
  { value: "vancouver-ca", label: "Vancouver, Canada", multiplier: 1.2 },
  { value: "montreal-ca", label: "Montreal, Canada", multiplier: 1.1 },
  
  // Australia
  { value: "sydney-au", label: "Sydney, Australia", multiplier: 1.4 },
  { value: "melbourne-au", label: "Melbourne, Australia", multiplier: 1.3 },
  
  // Remote
  { value: "remote", label: "Remote", multiplier: 1.0 },
];