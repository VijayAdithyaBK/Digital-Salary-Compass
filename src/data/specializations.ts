interface Specialization {
  value: string;
  label: string;
  category: string;
}

export const specializations: Specialization[] = [
  // SEO
  { value: "technical-seo", label: "Technical SEO", category: "SEO" },
  { value: "local-seo", label: "Local SEO", category: "SEO" },
  { value: "ecommerce-seo", label: "E-commerce SEO", category: "SEO" },
  { value: "international-seo", label: "International SEO", category: "SEO" },
  
  // Content Marketing
  { value: "content-strategy", label: "Content Strategy", category: "Content Marketing" },
  { value: "content-writing", label: "Content Writing", category: "Content Marketing" },
  { value: "copywriting", label: "Copywriting", category: "Content Marketing" },
  { value: "content-optimization", label: "Content Optimization", category: "Content Marketing" },
  
  // Social Media
  { value: "social-media-strategy", label: "Social Media Strategy", category: "Social Media" },
  { value: "social-media-advertising", label: "Social Media Advertising", category: "Social Media" },
  { value: "community-management", label: "Community Management", category: "Social Media" },
  { value: "influencer-marketing", label: "Influencer Marketing", category: "Social Media" },
  
  // PPC & Paid Media
  { value: "google-ads", label: "Google Ads", category: "PPC" },
  { value: "facebook-ads", label: "Facebook Ads", category: "PPC" },
  { value: "display-advertising", label: "Display Advertising", category: "PPC" },
  { value: "programmatic-advertising", label: "Programmatic Advertising", category: "PPC" },
  
  // Analytics
  { value: "web-analytics", label: "Web Analytics", category: "Analytics" },
  { value: "data-analysis", label: "Data Analysis", category: "Analytics" },
  { value: "conversion-optimization", label: "Conversion Optimization", category: "Analytics" },
  
  // Email Marketing
  { value: "email-strategy", label: "Email Strategy", category: "Email Marketing" },
  { value: "email-automation", label: "Email Automation", category: "Email Marketing" },
  { value: "newsletter-management", label: "Newsletter Management", category: "Email Marketing" },
];