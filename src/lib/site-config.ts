/**
 * Single source of truth for site-wide identity, contact info, and navigation.
 * Every header, footer, schema generator, and CTA reads from this file.
 *
 * Edit this file to update phone numbers, addresses, social links, etc.
 */

export const siteConfig = {
  name: "Picture Perfect Health",
  legalName: "Picture Perfect Health, LLC",
  tagline: "Corporate wellness that moves the needle.",
  description:
    "Picture Perfect Health, LLC delivers corporate employee wellness programs, virtual contactless health fairs, and on-site biometric screenings for Fortune 500 companies in all 50 states. Founded by Dr. Eric Feintuch, DC.",
  url: "https://pictureperfecthealth.com",
  ogImage: "/og-default.jpg",
  phone: "1-800-438-9355",
  phoneDisplay: "1-800-GET-WELL",
  phoneHref: "tel:+18004389355",
  email: "info@pictureperfecthealth.com",
  address: {
    street: "636 Nutley Place",
    locality: "Valley Stream",
    region: "NY",
    postalCode: "11581",
    country: "US",
  },
  geo: {
    latitude: 40.6587,
    longitude: -73.7085,
  },
  openingHours: ["Mo-Fr 09:00-18:00"],
  foundingDate: "2006-06",
  areaServed: [
    "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming",
  ],
  founder: {
    name: "Dr. Eric Feintuch, DC",
    fullName: "Dr. Eric Hal Feintuch, D.C., CCSD",
    title: "President & Founder",
    yearsInPractice: 40,
    yearsRunningPPH: 19,
    credentials: [
      "Doctor of Chiropractic",
      "Certified Chiropractic Sports Diplomate (CCSD)",
      "Chronic Care Management (CCM)",
      "HIPAA-compliant telehealth provider",
    ],
    education: [
      {
        school: "New York Chiropractic College (now Northeast College of Health Sciences)",
        degree: "Doctor of Chiropractic",
        years: "1983–1986",
        honors: "Graduated with honors",
      },
      {
        school: "Binghamton University",
        degree: "Bachelor of Arts, Political Science, Literature & English Language",
        years: "1977–1981",
      },
    ],
    practice: {
      name: "Finetouch Chiropractic Well Diagnostics, P.C.",
      address: "636 Nutley Place, Valley Stream, NY 11581",
      phone: "(516) 493-0948",
    },
    programs: [
      "12 Steps to Wellness Workshop",
      "The Remote Patient, pulmonary care at home program",
      "Direct Primary Care nationwide network",
    ],
    recognition: [
      {
        year: "2022",
        title: "Guest of U.S. Senator Ron Johnson",
        location: "Washington, D.C.",
      },
      {
        title: "Delegate to organizing committee",
        location: "Korean Olympics",
      },
    ],
  },
  // Cross-promo to ChiroVision (separate site, separate audience)
  chirovisionUrl: "https://chirovision.com",
  // Social
  social: {
    linkedin: "https://www.linkedin.com/in/dr-eric-feintuch/",
    twitter: "",
    facebook: "",
  },
  // Header navigation (corporate buyers, chiropractor product is intentionally NOT here)
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Membership", href: "/membership" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
