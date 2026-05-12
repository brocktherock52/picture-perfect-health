import { siteConfig } from "./site-config";

/**
 * JSON-LD schema generators for Picture Perfect Health.
 * Each function returns a plain object that gets serialized by <JsonLd /> into a
 * <script type="application/ld+json"> tag for SEO / Google Rich Results.
 */

/**
 * Single rich Organization schema: combined ProfessionalService + MedicalBusiness
 * + LocalBusiness so search engines can index local + corporate facets.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "MedicalBusiness", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: siteConfig.foundingDate,
    slogan: siteConfig.tagline,
    knowsAbout: [
      "Corporate employee wellness programs",
      "On-site chiropractic care",
      "Ergonomic assessment",
      "Occupational health",
      "Biometric health screenings",
      "Virtual health fairs",
      "Workplace wellness",
      "Population health management",
      "HIPAA-aware wellness reporting",
    ],
    medicalSpecialty: ["PreventiveMedicine", "Chiropractic", "OccupationalTherapy"],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: siteConfig.areaServed.map((state) => ({
      "@type": "State",
      name: state,
    })),
    serviceArea: {
      "@type": "Country",
      name: "United States",
    },
    founder: {
      "@type": "Person",
      "@id": `${siteConfig.url}/about#founder`,
      name: siteConfig.founder.fullName,
      jobTitle: siteConfig.founder.title,
    },
    sameAs: [
      siteConfig.social.linkedin,
      "https://www.chirovision.com",
    ].filter(Boolean),
    priceRange: "$$",
  };
}

/**
 * Rich Person schema for Dr. Eric Hal Feintuch (founder).
 */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/about#founder`,
    name: siteConfig.founder.name,
    additionalName: siteConfig.founder.fullName,
    givenName: "Eric",
    familyName: "Feintuch",
    jobTitle: siteConfig.founder.title,
    image: `${siteConfig.url}/hero-pph.jpg`,
    worksFor: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "New York Chiropractic College (now Northeast College of Health Sciences)",
        sameAs: "https://www.nyc.edu/",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Binghamton University",
        sameAs: "https://www.binghamton.edu/",
      },
    ],
    knowsAbout: [
      "Corporate employee wellness program design",
      "On-site chiropractic care",
      "Ergonomic assessment",
      "Occupational health",
      "Fortune 500 wellness consulting",
      "Long Island chiropractor",
      "12 Steps to Wellness Workshop",
      "Telehealth",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Doctor of Chiropractic (D.C.)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Certified Chiropractic Sports Diplomate (CCSD)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Chronic Care Management (CCM)",
      },
    ],
    description:
      "Dr. Eric Hal Feintuch, D.C., CCSD, is a Doctor of Chiropractic with 40 years of clinical experience and the founder of Picture Perfect Health, LLC. Honors graduate of New York Chiropractic College (1986), B.A. Binghamton University. Creator of the 12 Steps to Wellness Workshop and ChiroVision diagnostic imaging software. Guest of U.S. Senator Ron Johnson (2022) and Korean Olympics organizing committee delegate.",
    url: `${siteConfig.url}/about`,
    sameAs: [siteConfig.social.linkedin, "https://www.chirovision.com"].filter(Boolean),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  slug: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    image: service.image || `${siteConfig.url}${siteConfig.ogImage}`,
    serviceType: service.name,
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    url: `${siteConfig.url}/services/${service.slug}`,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.svg`,
      },
    },
    image: post.image || `${siteConfig.url}${siteConfig.ogImage}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}
