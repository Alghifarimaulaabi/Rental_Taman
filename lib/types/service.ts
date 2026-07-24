export interface ServiceBenefit {
  title: string;
  description: string;
  iconName: string; // e.g. "ShieldCheck", "RefreshCw", "Sparkles", "Clock", "HeartHandshake", "Leaf"
}

export interface ServiceFacility {
  name: string;
  description: string;
  included: boolean;
}

export interface ServiceGalleryItem {
  url: string;
  alt: string;
  caption: string;
}

export interface ServiceWorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  comment: string;
  rating: number;
  date: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  heroImage: string;
  shortDesc: string;
  fullDesc: string;
  startingPrice?: string;
  benefits: ServiceBenefit[];
  facilities: ServiceFacility[];
  gallery: ServiceGalleryItem[];
  workflow: ServiceWorkflowStep[];
  faqs: ServiceFAQ[];
  testimonials: ServiceTestimonial[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}
