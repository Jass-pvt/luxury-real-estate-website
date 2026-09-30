export interface StatItem {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ConsultantProfile {
  businessName: string;
  tagline: string;
  ownerName: string;
  role: string;
  experienceYears: string;
  bioHeadline: string;
  shortBio: string;
  fullBio: string[];
  philosophy: string;
  closingQuote: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  locationAddress: string;
  officeHours: string;
  ownerImageUrl: string;
  heroImageUrl: string;
  aboutHeroImageUrl: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  iconName: string;
}

export type DealCategory = 'ALL' | 'RESIDENTIAL' | 'LAND & PLOT' | 'COMMERCIAL' | 'OTHER';

export interface Deal {
  id: string;
  title: string;
  category: 'RESIDENTIAL' | 'LAND & PLOT' | 'COMMERCIAL' | 'OTHER';
  categoryLabel: string;
  location: string;
  status: 'Completed' | 'In Progress' | 'Advisory Done';
  year: string;
  imageUrl: string;
  description: string;
  isFeatured?: boolean;
  highlights?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole?: string;
  location: string;
  dealType: string;
  rating?: number;
}

export interface LocationItem {
  id: string;
  name: string;
  region: string;
  type: string;
  description?: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  requirement: string;
  message: string;
}
