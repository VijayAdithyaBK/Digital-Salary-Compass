import { Location } from '../types';
import { usLocations } from './us-locations';
import { ukLocations } from './uk-locations';
import { canadaLocations } from './canada-locations';
import { australiaLocations } from './australia-locations';
import { europeLocations } from './europe-locations';
import { asiaLocations } from './asia-locations';

export const locations: Location[] = [
  ...usLocations,
  ...ukLocations,
  ...canadaLocations,
  ...australiaLocations,
  ...europeLocations,
  ...asiaLocations,
  { value: "remote", label: "Remote", multiplier: 1.0 },
];