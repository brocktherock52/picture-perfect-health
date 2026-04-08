import { DoctorBioHero } from "@/components/about/DoctorBioHero";
import { CredentialsList } from "@/components/about/CredentialsList";
import { NotableEngagements } from "@/components/about/NotableEngagements";
import { PersonalStory } from "@/components/about/PersonalStory";
import { TechCredibilityCallout } from "@/components/about/TechCredibilityCallout";
import { PhilosophyBlock } from "@/components/about/PhilosophyBlock";
import { StatsStrip } from "@/components/home/StatsStrip";
import { CTASection } from "@/components/shared/CTASection";
import { Seo } from "@/components/shared/Seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildSeo } from "@/lib/seo";
import { personSchema, breadcrumbSchema } from "@/lib/schema";

export default function AboutPage() {
  const seo = buildSeo({
    title: "About Dr. Eric Feintuch, DC",
    description:
      "Dr. Eric Hal Feintuch, D.C., CCSD — 40 years in chiropractic practice, founder of Picture Perfect Health, LLC, creator of the 12 Steps to Wellness Workshop and ChiroVision diagnostic imaging software. Honors graduate of New York Chiropractic College, B.A. Binghamton University. Guest of Senator Ron Johnson and Korean Olympics delegate.",
    path: "/about",
    type: "profile",
  });

  return (
    <>
      <Seo {...seo} />
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ])}
      />
      <DoctorBioHero />
      <CredentialsList />
      <PersonalStory />
      <NotableEngagements />
      <TechCredibilityCallout />
      <PhilosophyBlock />
      <StatsStrip />
      <CTASection />
    </>
  );
}
