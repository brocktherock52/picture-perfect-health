import { Hero } from "@/components/home/Hero";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { StatsStrip } from "@/components/home/StatsStrip";
import { CaseStudyTriptych } from "@/components/home/CaseStudyTriptych";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TwelveStepsScrolly } from "@/components/home/TwelveStepsScrolly";
import { PressMentions } from "@/components/home/PressMentions";
import { EngagementOptions } from "@/components/home/EngagementOptions";
import { FoundersLetter } from "@/components/home/FoundersLetter";
import { BoxingTimeline } from "@/components/home/BoxingTimeline";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { ChirovisionCrossPromo } from "@/components/home/ChirovisionCrossPromo";
import { CTASection } from "@/components/shared/CTASection";
import { Seo } from "@/components/shared/Seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildSeo } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export default function HomePage() {
  const seo = buildSeo({
    title: "Picture Perfect Health, Corporate Wellness for Fortune 500",
    description:
      "Picture Perfect Health, LLC delivers corporate employee wellness programs, on-site chiropractic care, virtual contactless health fairs, and biometric screenings for Fortune 500 workforces in all 50 states. Founded by Dr. Eric Hal Feintuch, D.C. Call 1-800-GET-WELL.",
    path: "/",
  });

  return (
    <>
      <Seo {...seo} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: seo.title,
          description: seo.description,
          url: seo.url,
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }])} />
      <Hero />
      <LogoMarquee />
      <StatsStrip />
      <CaseStudyTriptych />
      <ServicesGrid />
      <TwelveStepsScrolly />
      <PressMentions />
      <EngagementOptions />
      <FoundersLetter />
      <BoxingTimeline />
      <TestimonialCarousel />
      <ChirovisionCrossPromo />
      <CTASection />
    </>
  );
}
