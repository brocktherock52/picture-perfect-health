import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfoBlock } from "@/components/contact/ContactInfoBlock";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Seo } from "@/components/shared/Seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildSeo } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { generalFaqs } from "@/data/faq";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  const seo = buildSeo({
    title: "Contact Us",
    description:
      "Talk to Dr. Feintuch's team about a corporate wellness program for your workforce. Call 1-800-GET-WELL or send a message — we respond within one business day.",
    path: "/contact",
  });

  return (
    <>
      <Seo {...seo} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />

      <section className="bg-gradient-to-b from-accent/40 via-background to-background py-20 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Let's talk"
            title="Talk to us about your team's health."
            description={`Tell us about your workforce. We'll be in touch within one business day. Or call ${siteConfig.phoneDisplay} to speak with a real person.`}
          />
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[7fr,5fr]">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft sm:p-10">
              <ContactForm />
            </div>
            <ContactInfoBlock />
          </div>
        </div>
      </section>

      <section className="bg-background pb-16">
        <div className="container">
          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="Valley Stream, NY headquarters area map"
              src="https://maps.google.com/maps?q=Valley+Stream,NY+11580&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <ServiceFAQ
        faqs={generalFaqs.slice(0, 5)}
        eyebrow="Before you call"
        title="Most common questions we hear first"
      />
    </>
  );
}
