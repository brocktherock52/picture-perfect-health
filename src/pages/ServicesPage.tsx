import { services } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { TrustBar } from "@/components/home/TrustBar";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { CTASection } from "@/components/shared/CTASection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Seo } from "@/components/shared/Seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildSeo } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { generalFaqs } from "@/data/faq";

export default function ServicesPage() {
  const seo = buildSeo({
    title: "Wellness Services for Employers",
    description:
      "Virtual contactless health fairs, biometric screenings, the 12 Steps to Wellness Workshop, custom corporate wellness programs, on-site events, and online patient monitoring, for workforces of 50 to 250,000+ employees in all 50 states.",
    path: "/services",
  });

  return (
    <>
      <Seo {...seo} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ])}
      />

      <section className="bg-gradient-to-b from-accent/40 via-background to-background py-20 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Our services"
            title="Corporate wellness, end-to-end."
            description="Six core services we deliver every day for Fortune 500 workforces. Mix, match, or combine into a custom program tailored to your population."
          />
        </div>
      </section>

      <TrustBar />

      <section className="bg-background py-20 sm:py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ
        faqs={generalFaqs}
        eyebrow="Before you call"
        title="Questions corporate buyers ask us first."
      />

      <CTASection />
    </>
  );
}
