import { useParams, Navigate } from "react-router-dom";
import { getServiceBySlug } from "@/data/services";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceFeatureList } from "@/components/services/ServiceFeatureList";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { CTASection } from "@/components/shared/CTASection";
import { Seo } from "@/components/shared/Seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildSeo } from "@/lib/seo";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const seo = buildSeo({
    title: `${service.name} | Corporate Wellness`,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
    image: service.heroImage,
  });

  return (
    <>
      <Seo {...seo} />
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.shortDescription,
          slug: service.slug,
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ])}
      />

      <ServiceDetailHero service={service} />
      <ServiceFeatureList features={service.features} howItWorks={service.howItWorks} />
      <ServiceFAQ faqs={service.faqs} />
      <CTASection
        title={`Bring ${service.name} to your workforce.`}
        description="Talk to Dr. Feintuch's team about adding this to your wellness program."
      />
    </>
  );
}
