import { Specialization } from '../types';
import { seoSpecializations } from './seo-specializations';
import { contentSpecializations } from './content-specializations';
import { socialMediaSpecializations } from './social-media-specializations';
import { ppcSpecializations } from './ppc-specializations';
import { analyticsSpecializations } from './analytics-specializations';
import { emailSpecializations } from './email-specializations';
import { marketingTechSpecializations } from './marketing-tech-specializations';

export const specializations: Specialization[] = [
  ...seoSpecializations,
  ...contentSpecializations,
  ...socialMediaSpecializations,
  ...ppcSpecializations,
  ...analyticsSpecializations,
  ...emailSpecializations,
  ...marketingTechSpecializations,
];