import { caseStudies } from "@/data/caseStudies";
import { ClientLogoGrid } from "@/components/portfolio/ClientLogoGrid";
import { CaseStudyCard } from "@/components/portfolio/CaseStudyCard";
import { PhotoGallery } from "@/components/portfolio/PhotoGallery";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { CTASection } from "@/components/shared/CTASection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Seo } from "@/components/shared/Seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildSeo } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export default function PortfolioPage() {
  const seo = buildSeo({
    title: "Portfolio & Past Events",
    description:
      "Past corporate wellness events and case studies from Picture Perfect Health, LLC, including a single-day biometric screening event for 1,600+ Quest Diagnostics employees in New Jersey.",
    path: "/portfolio",
  });

  const [featuredStudy, ...otherStudies] = caseStudies;

  return (
    <>
      <Seo {...seo} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Portfolio", href: "/portfolio" },
        ])}
      />

      <section className="bg-gradient-to-b from-accent/40 via-background to-background py-20 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Proof, not promises"
            title="Proven results across industries."
            description="From single-day biometric screening events to multi-year wellness programs, Picture Perfect Health has supported workforces of every shape and size."
          />
        </div>
      </section>

      <ClientLogoGrid />

      <section className="bg-muted/30 py-20 sm:py-24">
        <div className="container">
          <SectionHeading eyebrow="Lead case study" title="Quest Diagnostics, 1,600+ employees" />
          <div className="mt-14">
            <CaseStudyCard study={featuredStudy} featured />
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container">
          <SectionHeading eyebrow="More engagements" title="Other workforces we've served" />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {otherStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <PhotoGallery />
      <TestimonialCarousel />
      <CTASection />
    </>
  );
}
