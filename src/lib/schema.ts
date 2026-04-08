import { siteConfig } from "./site-config";

/**
 * JSON-LD schema generators for Picture Perfect Health.
 * Each function returns a plain object that gets serialized by <JsonLd /> into a
 * <script type="application/ld+json"> tag for SEO / Google Rich Results.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "MedicalOrganization"],
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.title,
    },
    sameAs: [siteConfig.social.linkedin].filter(Boolean),
    priceRange: "$$",
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.founder.name,
    additionalName: "Dr. Eric Hal Feintuch, D.C., CCSD",
    jobTitle: siteConfig.founder.title,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "New York Chiropractic College (now Northeast College of Health Sciences)",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Binghamton University",
      },
    ],
    hasCredential: [
      "Doctor of Chiropractic (DC)",
      "Certified Chiropractic Sports Diplomate (CCSD)",
      "Chronic Care Management (CCM)",
    ],
    description:
      "Dr. Eric Hal Feintuch, D.C., CCSD, is a Doctor of Chiropractic with 40 years of clinical experience and the founder of Picture Perfect Health, LLC. Honors graduate of New York Chiropractic College, B.A. Binghamton University. Creator of the 12 Steps to Wellness Workshop and ChiroVision diagnostic imaging software. Guest of U.S. Senator Ron Johnson (2022) and Korean Olympics organizing committee delegate.",
    url: `${siteConfig.url}/about`,
    sameAs: [siteConfig.social.linkedin].filter(Boolean),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
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
