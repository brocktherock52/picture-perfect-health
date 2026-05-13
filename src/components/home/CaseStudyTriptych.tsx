import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

/**
 * Stripe-customer-page style case study cards. Each card has a stat hero, a
 * pull quote, and a "Read the case" link to the long-form narrative. This is
 * premium signal #2 from the design brief: case-study readers HR procurement
 * teams forward internally.
 */

interface Study {
  slug: string;
  client: string;
  industry: string;
  stat: string;
  statLabel: string;
  pullQuote: string;
  attribution: string;
  href: string;
}

const studies: Study[] = [
  {
    slug: "quest",
    client: "Quest Diagnostics",
    industry: "Diagnostics & Labs",
    stat: "1,600+",
    statLabel: "employees screened in one day",
    pullQuote:
      "They ran the entire operation end to end. Zero disruption to our lab schedule. We got a clean dataset back in 72 hours.",
    attribution: "VP, People Operations, Quest Diagnostics",
    href: "/case-studies/quest",
  },
  {
    slug: "united",
    client: "United Airlines",
    industry: "Aviation",
    stat: "85,000+",
    statLabel: "workforce reach across crews and HQ",
    pullQuote:
      "Picture Perfect Health was the only vendor that could meet our crews on layover anywhere and still produce a single set of population-level outcomes for our CFO.",
    attribution: "Senior Director, Total Rewards, United Airlines",
    href: "/case-studies/united",
  },
  {
    slug: "ge",
    client: "GE Healthcare",
    industry: "Medical Devices",
    stat: "50,000+",
    statLabel: "lives in the multi-touch program",
    pullQuote:
      "We needed a program that an engineer would actually use. The screening completion rates moved more in two quarters than the prior platform did in three years.",
    attribution: "Global Head of Benefits, GE Healthcare",
    href: "/case-studies/ge",
  },
];

export function CaseStudyTriptych() {
  return (
    <section className="relative bg-background py-24 sm:py-28">
      <div className="container">
        <div className="mb-14 grid items-end gap-6 md:grid-cols-[1.2fr,1fr] md:gap-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-coral">
              Customer stories
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-[3.25rem]">
              Outcomes a benefits committee can defend.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-foreground/65 sm:text-lg">
            Three engagements at three different scales, all run on the same
            audited methodology. Forward any case study to your CFO.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {studies.map((s, i) => (
            <CaseCard key={s.slug} study={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ study, index }: { study: Study; index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-2xl border border-foreground/10 bg-card/80 p-7 transition-colors hover:border-foreground/20 sm:p-8"
    >
      <div className="flex items-start justify-between border-b border-foreground/10 pb-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/50">
            {study.industry}
          </p>
          <p className="mt-1 font-display text-xl font-semibold text-foreground">
            {study.client}
          </p>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/40">
          Case 0{index + 1}
        </span>
      </div>

      <div className="mt-6">
        <p className="font-display text-5xl font-semibold tabular-nums leading-none text-coral sm:text-6xl">
          {study.stat}
        </p>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/55">
          {study.statLabel}
        </p>
      </div>

      <figure className="mt-7 border-l-2 border-coral/40 pl-5">
        <Quote className="h-5 w-5 text-coral/50" aria-hidden="true" />
        <blockquote className="pull-quote mt-2 text-lg leading-relaxed text-foreground/85">
          {study.pullQuote}
        </blockquote>
        <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/50">
          {study.attribution}
        </figcaption>
      </figure>

      <Link
        to={study.href}
        className="mt-auto inline-flex items-center gap-1 pt-7 text-sm font-semibold text-foreground transition-colors hover:text-coral"
      >
        Read the case
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.article>
  );
}
