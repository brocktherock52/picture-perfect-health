import type { CaseStudy } from "@/types";

/**
 * Real client engagements. The Quest Diagnostics case is the lead, it is
 * referenced from the existing pictureperfecthealth.com site.
 * The other two are illustrative composites of typical engagements.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "quest-diagnostics-1600-employees",
    client: "Quest Diagnostics",
    industry: "Healthcare / Diagnostics",
    employees: "1,600+",
    result:
      "Single-day on-site biometric screening event for 1,600+ employees in New Jersey, completed without disruption to operations.",
    quote:
      "Single-day biometric screening for 1,600+ employees, delivered without disruption. (Real engagement, quote pending.)",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Healthcare professional preparing for a biometric screening event",
  },
  {
    slug: "fortune-500-airline",
    client: "Fortune 500 Airline",
    industry: "Aviation / Transportation",
    employees: "85,000+",
    result:
      "Multi-year virtual health fair program reaching every flight crew, ground operations, and corporate employee across the network.",
    quote:
      "Virtual health fairs that work for crews on the road and corporate teams in HQ. (Composite case, placeholder quote.)",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Commercial airliner taking off at sunset",
  },
  {
    slug: "ge-healthcare-population-program",
    client: "Global Healthcare Manufacturer",
    industry: "Medical Devices",
    employees: "50,000+",
    result:
      "Population health management program combining biometric screenings, virtual workshops, and ongoing patient monitoring.",
    quote:
      "Population-level wellness designed for a manufacturing-meets-engineering workforce. (Placeholder quote, TODO replace.)",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Industrial workers in a manufacturing facility",
  },
];
