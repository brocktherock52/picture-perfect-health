import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MembershipTierCard,
  type MembershipTier,
} from "@/components/membership/MembershipTierCard";
import { GatedContentPreview } from "@/components/membership/GatedContentPreview";
import { CTASection } from "@/components/shared/CTASection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Seo } from "@/components/shared/Seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildSeo } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

const tiers: MembershipTier[] = [
  {
    name: "Individual",
    price: "$29",
    cadence: "month",
    description: "Best for individuals who want to take ownership of their own wellness.",
    features: [
      "Full 12 Steps to Wellness workbook",
      "Self-paced course library",
      "Member community access",
      "Monthly group Q&A",
      "Cancel anytime",
    ],
  },
  {
    name: "Corporate",
    price: "$199",
    cadence: "month",
    description: "Perfect for small teams (up to 25 employees) who want premium wellness content.",
    features: [
      "Everything in Individual",
      "Up to 25 employee seats",
      "Quarterly live workshop with Dr. Feintuch",
      "Internal champion training",
      "Aggregated engagement reports",
      "Priority support",
    ],
    primary: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "year",
    description: "For larger workforces ready for a full custom wellness engagement.",
    features: [
      "Everything in Corporate",
      "Unlimited employee seats",
      "Dedicated wellness coordinator",
      "Custom 12-month wellness program",
      "Quarterly executive reporting",
      "On-site events available",
    ],
  },
];

const membershipFaqs = [
  {
    question: "How do I get access after subscribing?",
    answer:
      "After checkout, you'll receive a welcome email with login credentials within minutes. The community and content library go live immediately.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, upgrade or downgrade at any time. Prorated billing applies. Enterprise migrations include a free onboarding call.",
  },
  {
    question: "Is this the same content Dr. Feintuch delivers to Fortune 500 clients?",
    answer:
      "The methodology is the same. Live custom workshops for Fortune 500 clients are tailored to their workforce, but the underlying 12 Steps framework, workbook, and educational content are identical to what members receive.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Individual and Corporate plans can be cancelled at any time and you keep access until the end of the billing period. Enterprise contracts have terms specified in the engagement agreement.",
  },
];

export default function MembershipPage() {
  const seo = buildSeo({
    title: "Membership",
    description:
      "Premium wellness content from Dr. Eric Feintuch, Individual, Corporate, and Enterprise membership tiers with the 12 Steps workbook, courses, and live Q&A.",
    path: "/membership",
  });

  return (
    <>
      <Seo {...seo} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Membership", href: "/membership" },
        ])}
      />

      <section className="bg-gradient-to-b from-accent/40 via-background to-background py-20 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Membership"
            title="Premium wellness content from Dr. Feintuch."
            description="Three membership tiers, for individuals taking ownership of their health, for small teams who want a real wellness benefit, and for enterprises ready for full custom engagement."
          />
        </div>
      </section>

      <section id="tiers" className="bg-background py-20 sm:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <MembershipTierCard key={tier.name} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      <GatedContentPreview />

      <section className="bg-muted/30 py-20 sm:py-24">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Frequently asked" title="Membership questions" />
          <Accordion type="single" collapsible className="mt-12 w-full">
            {membershipFaqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`mfaq-${idx}`}>
                <AccordionTrigger className="text-left text-base font-semibold sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection
        title="Want a fully custom corporate engagement instead?"
        description="Membership is for individuals and smaller teams. For full Fortune 500-style wellness programs, talk to our team directly."
        primaryCtaLabel="Talk to our team"
      />
    </>
  );
}
