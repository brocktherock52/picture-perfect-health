import {
  Video,
  Stethoscope,
  ListChecks,
  Settings2,
  CalendarDays,
  Activity,
} from "lucide-react";
import type { Service } from "@/types";

/**
 * The 6 core services. Drives:
 *  - /services index page
 *  - /services/:slug detail pages (via getServiceBySlug)
 *  - Homepage <ServicesGrid>
 *  - Sitemap entries (manually added in public/sitemap.xml)
 */
export const services: Service[] = [
  {
    slug: "virtual-health-fairs",
    name: "Virtual Contactless Health Fairs",
    shortDescription:
      "Bring a full health fair to every employee — wherever they work — with zero logistics on your end.",
    longDescription:
      "Our virtual health fairs deliver expert wellness content, live screenings, and one-on-one consultations directly to employees across every time zone. No booths to set up. No event to staff. No travel costs. Just measurable engagement and better health outcomes for your distributed workforce.",
    icon: Video,
    features: [
      "Live, interactive sessions led by licensed professionals",
      "On-demand replay library so no employee misses out",
      "Multi-day event format scales to 250,000+ employees",
      "Works for fully remote, hybrid, and on-site teams",
      "Zero hardware or software for employees to install",
      "Aggregated, de-identified engagement reports for HR",
    ],
    howItWorks: [
      {
        step: "Plan",
        description:
          "We meet with your HR and benefits team to map goals, audience size, and the topics that matter to your population.",
      },
      {
        step: "Launch",
        description:
          "We handle everything: speakers, scheduling, communication assets, and the live virtual platform.",
      },
      {
        step: "Measure",
        description:
          "After the event, you receive an engagement report and recommendations for ongoing wellness programming.",
      },
    ],
    faqs: [
      {
        question: "How many employees can attend a virtual health fair?",
        answer:
          "We have run virtual health fairs for audiences ranging from 50 employees up to 250,000+. The platform scales linearly — adding employees does not change the format or cost structure.",
      },
      {
        question: "Is there any cost to my company?",
        answer:
          "Our virtual contactless health fairs are FREE for qualifying corporate clients. Call 1-800-GET-WELL to confirm eligibility.",
      },
      {
        question: "Do employees need to install anything?",
        answer:
          "No. Everything runs in a standard web browser. Employees join with a link — no software, no plugins, no IT tickets.",
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Healthcare professional joining a video call for a virtual health fair",
  },
  {
    slug: "contactless-screenings",
    name: "Contact-Free Health Screenings",
    shortDescription:
      "Biometric screenings delivered safely, at scale, with results in hand within days.",
    longDescription:
      "Our contact-free screening program delivers blood pressure, cholesterol, glucose, BMI, and full biometric panels with strict safety protocols. Whether on-site or via at-home kits, employees get fast, accurate results — and your benefits team gets the population health data needed to design better programs.",
    icon: Stethoscope,
    features: [
      "Blood pressure, cholesterol, glucose, BMI, and lipid panels",
      "On-site or at-home kit delivery options",
      "HIPAA-aware data handling with de-identified reporting",
      "Results in 3–5 business days",
      "Optional 1:1 follow-up with a clinician",
      "Integration with your existing wellness platform",
    ],
    howItWorks: [
      {
        step: "Schedule",
        description:
          "Pick on-site, at-home, or hybrid. We handle the staffing, supplies, and scheduling.",
      },
      {
        step: "Screen",
        description:
          "Employees complete the screening in under 15 minutes with strict safety protocols.",
      },
      {
        step: "Report",
        description:
          "Aggregated population health insights for HR; private individual results for employees.",
      },
    ],
    faqs: [
      {
        question: "How is patient data handled?",
        answer:
          "Individual results are private and shared only with the employee. HR receives only de-identified, aggregated population health data — never individual records.",
      },
      {
        question: "Can we run screenings across multiple locations?",
        answer:
          "Yes. We currently run screening events in all 50 states and can coordinate same-day events across multiple sites.",
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Healthcare professional taking a blood pressure reading",
  },
  {
    slug: "12-steps-to-wellness",
    name: "12 Steps to Wellness Workshop",
    shortDescription:
      "Dr. Feintuch's signature program — a proven, twelve-step framework that has transformed thousands of employees.",
    longDescription:
      "The 12 Steps to Wellness Workshop is a proprietary methodology Dr. Eric Feintuch developed and refined over three decades. Delivered virtually or on-site, this multi-session workshop walks employees through twelve concrete habits that compound into lasting health change. It is the most-requested program in our portfolio.",
    icon: ListChecks,
    features: [
      "Twelve concrete, science-backed habits",
      "Live virtual or on-site delivery",
      "Includes workbook and 30-day follow-up plan",
      "Modular — runs in single sessions or multi-week formats",
      "Tracks self-reported behavior change at 30, 60, and 90 days",
      "Created and personally delivered by Dr. Feintuch",
    ],
    howItWorks: [
      {
        step: "Kickoff",
        description:
          "Dr. Feintuch leads the opening workshop and introduces the twelve steps.",
      },
      {
        step: "Practice",
        description:
          "Employees apply each habit between sessions with written prompts and reflection.",
      },
      {
        step: "Sustain",
        description:
          "30/60/90 day follow-up keeps habits sticky and tracks population-level progress.",
      },
    ],
    faqs: [
      {
        question: "Why twelve steps?",
        answer:
          "Each step represents a habit Dr. Feintuch has watched transform thousands of patients across three decades. The number is large enough to cover the full picture of health and small enough to be memorable.",
      },
      {
        question: "Who delivers the workshop?",
        answer:
          "Dr. Feintuch personally leads workshops for Fortune 500 clients. Trained facilitators deliver to scaled audiences with Dr. Feintuch's direct oversight.",
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Group of professionals in a wellness workshop",
  },
  {
    slug: "custom-corporate-programs",
    name: "Custom Corporate Wellness Programs",
    shortDescription:
      "Tailored, multi-touch wellness programs designed around your culture, your goals, and your data.",
    longDescription:
      "No two companies have the same workforce, the same risks, or the same culture. Our custom corporate programs combine screenings, education, virtual events, and one-on-one coaching into a cohesive program designed specifically for your organization. We have built programs for airlines, hospitals, government agencies, and Fortune 500s.",
    icon: Settings2,
    features: [
      "Workforce-specific risk and engagement assessment",
      "Multi-touch program with screenings + education + coaching",
      "Custom branding to match your internal benefits identity",
      "Quarterly executive reporting",
      "Integration with your existing HRIS and benefits stack",
      "Designed for workforces of 50 to 250,000+ employees",
    ],
    howItWorks: [
      {
        step: "Discover",
        description:
          "We audit your current wellness benefits, claims data, and employee feedback to find the highest-impact opportunities.",
      },
      {
        step: "Design",
        description:
          "We co-create a 12-month program tailored to your goals, budget, and culture.",
      },
      {
        step: "Deliver",
        description:
          "We execute end-to-end, then iterate quarterly based on engagement and outcome data.",
      },
    ],
    faqs: [
      {
        question: "How long does a typical engagement run?",
        answer:
          "Most custom programs run on annual cycles with quarterly checkpoints. Multi-year contracts are available and often more cost-effective.",
      },
      {
        question: "What does it cost?",
        answer:
          "Custom programs are priced per employee per month, with significant volume discounts above 5,000 employees. Call 1-800-GET-WELL for a tailored quote.",
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Diverse corporate team collaborating in a modern boardroom",
  },
  {
    slug: "on-site-events",
    name: "On-Site Health Events",
    shortDescription:
      "Full-service on-site health fairs and screening events at any location, in any state.",
    longDescription:
      "When your culture calls for in-person engagement, our on-site events deliver. From single-location lunch-and-learns to nationwide multi-site biometric screening campaigns, we coordinate the staff, the equipment, the safety protocols, and the follow-up care — so your team can focus on showing up.",
    icon: CalendarDays,
    features: [
      "Single-site events from 50 to 5,000 employees",
      "Multi-site campaigns coordinated across all 50 states",
      "Full equipment, supplies, and staffing",
      "Health fair booths, screenings, and live workshops",
      "Same-day result delivery options",
      "Detailed event-day engagement reports",
    ],
    howItWorks: [
      {
        step: "Book",
        description:
          "Pick your dates, locations, and the services you want represented.",
      },
      {
        step: "Show up",
        description:
          "Our team arrives early, sets everything up, and runs the event end-to-end.",
      },
      {
        step: "Follow up",
        description:
          "Employees receive private results; HR receives an engagement summary.",
      },
    ],
    faqs: [
      {
        question: "Can you run events at multiple sites on the same day?",
        answer:
          "Yes. We have run single-day campaigns across 30+ sites simultaneously, including a 1,600+ employee event for Quest Diagnostics in New Jersey.",
      },
      {
        question: "What safety protocols are in place?",
        answer:
          "All on-site events follow strict CDC-aligned protocols, with PPE and contact-free screening options available on request.",
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Healthcare team conducting on-site biometric screenings at a corporate event",
  },
  {
    slug: "online-patient-monitoring",
    name: "Online Patient Monitoring",
    shortDescription:
      "Ongoing virtual care between events, so health gains compound instead of fading.",
    longDescription:
      "Health fairs and screenings are one-time touch-points. Real outcomes come from sustained engagement. Our online patient monitoring program connects employees with licensed clinicians for ongoing virtual check-ins, lifestyle coaching, and data-driven progress tracking — turning a single event into a year-long behavior change program.",
    icon: Activity,
    features: [
      "Secure, browser-based clinician check-ins",
      "Lifestyle coaching and habit tracking",
      "Integration with screening results for continuity of care",
      "Population-level dashboards for HR",
      "Optional integration with wearables",
      "Available in all 50 states",
    ],
    howItWorks: [
      {
        step: "Enroll",
        description:
          "Employees opt in voluntarily after a screening event or as a standalone benefit.",
      },
      {
        step: "Engage",
        description:
          "Monthly clinician check-ins keep momentum. Habit tracking lives in a simple web app.",
      },
      {
        step: "Improve",
        description:
          "Aggregate trends inform next-year program design; individual employees see real change.",
      },
    ],
    faqs: [
      {
        question: "Is this telehealth?",
        answer:
          "It is wellness monitoring, not clinical care. For medical issues, employees are referred to their primary care provider or a telehealth network.",
      },
      {
        question: "What data does HR see?",
        answer:
          "Only de-identified, aggregated trends. Individual health data stays private to the employee and clinician.",
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Healthcare professional reviewing patient data on a tablet",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
