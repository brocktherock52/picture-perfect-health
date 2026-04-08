import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  features: string[];
  howItWorks: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  heroImage: string;
  heroAlt: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  employees: string;
  result: string;
  quote: string;
  image: string;
  imageAlt: string;
}

export interface Testimonial {
  /** All testimonials are placeholders. Mark clearly. */
  isPlaceholder: true;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ClientLogo {
  /** Placeholder text logo until real SVGs are licensed. */
  name: string;
  industry?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
