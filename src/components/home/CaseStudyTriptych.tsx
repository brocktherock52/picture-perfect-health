import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Editorial three-up case study triptych. Each card is a magazine "cover" with
 * a colossal Fraunces client name, an engagement metric, and a hover panel
 * that slides up with the case summary.
 */

interface Study {
  slug: string;
  client: string;
  industry: string;
  headline: string;
  body: string;
  metric: string;
  metricLabel: string;
  accent: "teal" | "gold" | "ink";
}

const studies: Study[] = [
  {
    slug: "quest-diagnostics-1600-employees",
    client: "Quest",
    industry: "Diagnostics",
    headline: "1,600+ screened in a single day.",
    body:
      "A national diagnostics company brought us in for a same-day biometric event in New Jersey. We ran the entire operation end to end, with zero disruption to lab schedules.",
    metric: "1,600+",
    metricLabel: "employees served in one day",
    accent: "teal",
  },
  {
    slug: "fortune-500-airline",
    client: "United",
    industry: "Aviation",
    headline: "Virtual health fairs for every crew, every city.",
    body:
      "A Fortune 500 carrier needed wellness that worked for crews on layover anywhere and corporate teams at HQ. We built a multi-year virtual program covering the entire workforce.",
    metric: "85,000+",
    metricLabel: "workforce reach",
    accent: "gold",
  },
  {
    slug: "ge-healthcare-population-program",
    client: "GE",
    industry: "Medical Devices",
    headline: "Population health for an engineer-heavy workforce.",
    body:
      "A global medical-device manufacturer engaged us to design a multi-touch wellness program combining screenings, virtual workshops, and ongoing patient monitoring across their U.S. footprint.",
    metric: "50,000+",
    metricLabel: "lives in the program",
    accent: "ink",
  },
];

export function CaseStudyTriptych() {
  return (
    <section
      data-cursor-view
      className="relative bg-background py-24 sm:py-32"
    >
      <div className="container">
        <div className="mb-16 grid items-end gap-6 md:grid-cols-[1.1fr,1fr]">
          <div>
            <p className="eyebrow text-secondary">Case studies</p>
            <h2
              className="mt-4 font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl text-balance display-tight"
              style={{ letterSpacing: "-0.035em" }}
            >
              Three engagements, one playbook.
            </h2>
          </div>
          <p className="font-serif text-lg leading-relaxed text-foreground/75 sm:text-xl">
            The same methodology that ran Dr. Feintuch&apos;s first practice now
            scales to a quarter-million employees. Hover any card to read the
            case.
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

const accentMap: Record<Study["accent"], { bg: string; text: string; chip: string }> = {
  teal: {
    bg: "bg-secondary",
    text: "text-secondary-foreground",
    chip: "bg-secondary/15 text-secondary",
  },
  gold: {
    bg: "bg-gold",
    text: "text-gold-foreground",
    chip: "bg-gold/20 text-gold",
  },
  ink: {
    bg: "bg-ink",
    text: "text-ink-foreground",
    chip: "bg-ink/10 text-ink",
  },
};

function CaseCard({ study, index }: { study: Study; index: number }) {
  const reduce = useReducedMotion();
  const palette = accentMap[study.accent];

  return (
    <motion.article
      data-cursor-read
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
      className="group relative aspect-[3/4] overflow-hidden rounded-[1.25rem] border border-foreground/15 bg-card"
    >
      {/* Resting cover */}
      <div className="relative flex h-full w-full flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between">
          <p className="eyebrow text-foreground/55">N&deg; 0{index + 1}</p>
          <p className="eyebrow text-foreground/55">{study.industry}</p>
        </div>

        <div className="mt-auto">
          <p className="eyebrow text-secondary">Client</p>
          <h3
            className="mt-2 font-serif text-7xl font-semibold tracking-tight text-foreground sm:text-8xl md:text-[6.5rem] display-tight"
            style={{ letterSpacing: "-0.04em" }}
          >
            {study.client}
          </h3>
          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-serif text-4xl font-semibold tabular-nums text-foreground sm:text-5xl">
              {study.metric}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/55">
              {study.metricLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Hover panel slides up */}
      <div
        className={`pointer-events-none absolute inset-0 flex translate-y-full flex-col p-6 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0 sm:p-7 ${palette.bg} ${palette.text}`}
        aria-hidden="true"
      >
        <p className="eyebrow opacity-80">Case study . The work</p>
        <h4
          className="mt-3 font-serif text-3xl font-semibold leading-[0.98] text-balance sm:text-4xl"
          style={{ letterSpacing: "-0.02em" }}
        >
          {study.headline}
        </h4>
        <p className="mt-5 max-w-[34ch] text-sm leading-relaxed opacity-90">
          {study.body}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <Link
            to="/portfolio"
            className="pointer-events-auto inline-flex items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline"
          >
            See the work
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] opacity-70">
            {study.metric}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
