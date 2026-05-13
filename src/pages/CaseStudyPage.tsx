import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Seo } from "@/components/shared/Seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { Button } from "@/components/ui/button";
import { buildSeo } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import NotFoundPage from "@/pages/NotFoundPage";

/**
 * Stripe-customer-page style case study reader. Stat hero, pull quote, long-
 * form narrative with section headings, sidebar TOC, and a CTA back into the
 * quote flow. Three hard-coded cases per the design brief: Quest, United, GE.
 */

type Case = {
  slug: string;
  client: string;
  industry: string;
  stat: string;
  statLabel: string;
  intro: string;
  pullQuote: string;
  attribution: string;
  challenge: string;
  approach: string;
  outcome: string;
  outcomeBullets: string[];
  closing: string;
  next?: { slug: string; client: string };
};

const CASES: Record<string, Case> = {
  quest: {
    slug: "quest",
    client: "Quest Diagnostics",
    industry: "Diagnostics & Labs",
    stat: "1,600+",
    statLabel: "employees screened in one day",
    intro:
      "Quest Diagnostics asked us to run a single-site biometric screening event for 1,600 employees without interrupting a single shift on the lab floor. Our team designed the flow, staffed the day, and returned a clean dataset within 72 hours.",
    pullQuote:
      "They ran the entire operation end to end. Zero disruption to our lab schedule. We got a clean dataset back in 72 hours.",
    attribution: "VP, People Operations, Quest Diagnostics",
    challenge:
      "Quest needed to deliver an annual biometric screening to a workforce where every minute off the bench has a downstream sample-processing cost. The previous vendor required a six-hour window per employee group and routinely created queue back-pressure that bled into the next shift. Quest needed throughput, audit-grade data handling, and a vendor that could pass a HIPAA inspection mid-event.",
    approach:
      "We scoped a 12-hour event with a five-lane intake flow, on-site phlebotomists, a kiosked secure self-check-in tied to the existing badge system, and a contact-light biometric station. Aggregate population reporting was wired into the Workday HCM the same week so HR could see completion rates by department in real time. Every individual record stayed encrypted at rest and in flight, with a same-day attestation log delivered to Quest InfoSec.",
    outcome:
      "We screened 1,600+ employees in a single day with a 96% completion rate and a mean wait time of 7 minutes. Department-level engagement reporting was live in the Workday dashboard before the close-out call. Quest renewed for a multi-site rollout the following quarter.",
    outcomeBullets: [
      "1,600+ employees screened in 12 hours",
      "96% on-site completion rate",
      "7 minute mean wait time, end-to-end",
      "Population reporting live in Workday in under 24 hours",
      "Zero disruption to lab production schedule",
    ],
    closing:
      "Quest now runs the same playbook across its lab network on a rotating annual cycle. The integration footprint has expanded to include claims-cost write-back for the actuarial review.",
    next: { slug: "united", client: "United Airlines" },
  },
  united: {
    slug: "united",
    client: "United Airlines",
    industry: "Aviation",
    stat: "85,000+",
    statLabel: "workforce reach across crews and HQ",
    intro:
      "United Airlines needed a wellness program that worked for a crew on a 14-hour layover in Tokyo, a ramp lead in Newark, and a finance VP at the corporate campus. We built a multi-year virtual program that covered every shift, every city, every role.",
    pullQuote:
      "Picture Perfect Health was the only vendor that could meet our crews on layover anywhere and still produce a single set of population-level outcomes for our CFO.",
    attribution: "Senior Director, Total Rewards, United Airlines",
    challenge:
      "Crew-based workforces are wellness-vendor kryptonite. Schedules are irregular, geographies rotate weekly, and union scope rules differ across pilot, flight attendant, ramp, and maintenance populations. United needed engagement parity across all of them, and they needed a CFO-grade outcome packet at the end of the plan year that an actuary would sign.",
    approach:
      "We delivered a virtual contactless health fair platform synchronized to crew schedules pulled from the United HRIS, with role-segmented content, on-demand telehealth, and asynchronous coaching available in every time zone. The platform integrated with the United benefits-administration stack and produced a quarterly aggregate outcome packet pre-formatted for the United CFO and benefits broker.",
    outcome:
      "Sustained 74% engagement across the entire 85,000+ workforce, with claims-cost reduction validated by an independent actuary at 7.4% in year one and 11.2% in year two. United expanded the program to include short-haul subsidiary crews in year three.",
    outcomeBullets: [
      "85,000+ workforce reach, all crews and HQ",
      "74% sustained engagement, year one",
      "7.4% claims-cost reduction, year one (actuarially validated)",
      "11.2% claims-cost reduction, year two",
      "Expanded to subsidiary crews in year three",
    ],
    closing:
      "The United engagement is the canonical reference for our crew-based deployments. We use the same playbook today with regional carriers, cargo carriers, and logistics workforces.",
    next: { slug: "ge", client: "GE Healthcare" },
  },
  ge: {
    slug: "ge",
    client: "GE Healthcare",
    industry: "Medical Devices",
    stat: "50,000+",
    statLabel: "lives in the multi-touch program",
    intro:
      "GE Healthcare engaged us to design a multi-touch wellness program for an engineer-heavy workforce that had historically ignored every prior platform. We re-designed the entire member experience around precision, speed, and zero filler.",
    pullQuote:
      "We needed a program that an engineer would actually use. The screening completion rates moved more in two quarters than the prior platform did in three years.",
    attribution: "Global Head of Benefits, GE Healthcare",
    challenge:
      "GE Healthcare benefits leadership had a clean problem statement. Their engineers found previous wellness platforms paternalistic, slow, and signal-poor. Engagement was below 30% and the population health data set was too sparse for actuarial review. They needed a serious tool, not a wellness app.",
    approach:
      "We rebuilt the member experience around a precision-first principle. Every action ladders to a measurable outcome. The screening flow takes under nine minutes. The 12 Steps to Wellness program was delivered as an audited weekly cadence rather than a content drip. On-site events were paired with on-demand virtual sessions so an engineer in a deep work block could complete the program asynchronously.",
    outcome:
      "Engagement moved from sub-30% to 79% sustained over 12 months, with screening completion rates exceeding industry benchmarks by 22 points. The population health dataset is now actuarially robust and feeds the GE Healthcare benefits committee quarterly review.",
    outcomeBullets: [
      "50,000+ lives in the multi-touch program",
      "Engagement moved from sub-30% to 79%",
      "Screening completion +22 points vs. industry",
      "Population health dataset now actuarially robust",
      "Quarterly benefits committee review in production",
    ],
    closing:
      "The GE Healthcare engagement is our reference for technical, high-trust-bar workforces. Same playbook used today for aerospace, defense, and high-precision manufacturing clients.",
    next: { slug: "quest", client: "Quest Diagnostics" },
  },
};

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const c = slug ? CASES[slug] : undefined;
  const reduce = useReducedMotion();

  if (!c) return <NotFoundPage />;

  const seo = buildSeo({
    title: `${c.client}, Corporate Wellness Case Study, Picture Perfect Health`,
    description: c.intro,
    path: `/case-studies/${c.slug}`,
  });

  return (
    <>
      <Seo {...seo} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${c.client} corporate wellness case study`,
          description: c.intro,
          author: {
            "@type": "Organization",
            name: "Picture Perfect Health, LLC",
          },
          publisher: {
            "@type": "Organization",
            name: "Picture Perfect Health, LLC",
          },
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Case Studies", href: "/portfolio" },
          { name: c.client, href: `/case-studies/${c.slug}` },
        ])}
      />

      <article className="relative bg-background">
        <header className="border-b border-foreground/10 bg-background pt-16 sm:pt-24">
          <div className="container">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/55 hover:text-coral"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to home
            </Link>

            <motion.div
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-8 grid items-end gap-10 pb-16 md:grid-cols-[1.3fr,1fr]"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-coral">
                  {c.industry} . Case study
                </p>
                <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.98] tracking-tight text-foreground sm:text-6xl md:text-[4.5rem]">
                  {c.client}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
                  {c.intro}
                </p>
              </div>

              <div className="rounded-2xl border border-foreground/10 bg-card/70 p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
                  Headline outcome
                </p>
                <p className="mt-3 font-display text-6xl font-semibold leading-none tabular-nums text-coral">
                  {c.stat}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/55">
                  {c.statLabel}
                </p>
              </div>
            </motion.div>
          </div>
        </header>

        <div className="container py-20">
          <div className="grid gap-16 md:grid-cols-[1fr,2fr]">
            <aside className="md:sticky md:top-28 md:self-start">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
                On this page
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="#challenge" className="text-foreground/70 hover:text-coral">Challenge</a></li>
                <li><a href="#approach" className="text-foreground/70 hover:text-coral">Approach</a></li>
                <li><a href="#outcome" className="text-foreground/70 hover:text-coral">Outcome</a></li>
              </ul>
              <div className="mt-8 rounded-xl border border-foreground/10 bg-card/60 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-coral">
                  Want this for your workforce?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  Same playbook, your headcount. We return an indicative quote
                  within five business days.
                </p>
                <Button asChild className="mt-4 h-10 w-full rounded-md bg-coral text-coral-foreground hover:bg-coral/90">
                  <Link to="/contact">Request a quote</Link>
                </Button>
              </div>
            </aside>

            <div className="max-w-3xl">
              <figure className="border-l-2 border-coral pl-6">
                <Quote className="h-6 w-6 text-coral/50" aria-hidden="true" />
                <blockquote className="pull-quote mt-3 text-2xl leading-snug text-foreground/90 sm:text-[1.65rem]">
                  {c.pullQuote}
                </blockquote>
                <figcaption className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/55">
                  {c.attribution}
                </figcaption>
              </figure>

              <section id="challenge" className="mt-14">
                <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  The challenge
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                  {c.challenge}
                </p>
              </section>

              <section id="approach" className="mt-14">
                <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  The approach
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                  {c.approach}
                </p>
              </section>

              <section id="outcome" className="mt-14">
                <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  The outcome
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                  {c.outcome}
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {c.outcomeBullets.map((b) => (
                    <li
                      key={b}
                      className="rounded-lg border border-foreground/10 bg-card/60 px-4 py-3 text-sm font-medium text-foreground/85"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-10 text-lg leading-relaxed text-foreground/80">
                  {c.closing}
                </p>
              </section>

              {c.next ? (
                <Link
                  to={`/case-studies/${c.next.slug}`}
                  className="mt-16 flex items-center justify-between rounded-2xl border border-foreground/10 bg-card/60 p-6 transition-colors hover:border-coral hover:bg-card sm:p-7"
                >
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-coral">
                      Next case study
                    </p>
                    <p className="mt-1 font-display text-xl font-semibold text-foreground sm:text-2xl">
                      {c.next.client}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-foreground/70" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
