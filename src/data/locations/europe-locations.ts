import { Location } from '../types';

export const europeLocations: Location[] = [
  // Germany
  { value: "berlin-de", label: "Berlin", multiplier: 1.3, country: "Germany" },
  { value: "munich-de", label: "Munich", multiplier: 1.4, country: "Germany" },
  { value: "hamburg-de", label: "Hamburg", multiplier: 1.3, country: "Germany" },
  
  // France
  { value: "paris-fr", label: "Paris", multiplier: 1.4, country: "France" },
  { value: "lyon-fr", label: "Lyon", multiplier: 1.2, country: "France" },
  
  // Netherlands
  { value: "amsterdam-nl", label: "Amsterdam", multiplier: 1.3, country: "Netherlands" },
  { value: "rotterdam-nl", label: "Rotterdam", multiplier: 1.2, country: "Netherlands" },
  
  // Ireland
  { value: "dublin-ie", label: "Dublin", multiplier: 1.4, country: "Ireland" },
  
  // Spain
  { value: "madrid-es", label: "Madrid", multiplier: 1.2, country: "Spain" },
  { value: "barcelona-es", label: "Barcelona", multiplier: 1.2, country: "Spain" },
];