import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

/**
 * Three case-study cards, one for each marquee client. Each card flips on
 * hover to reveal the engagement metric. Uses shared layoutId for the
 * client name so it animates between states.
 */

const studies = [
  {
    slug: "quest-diagnostics-1600-employees",
    client: "Quest Diagnostics",
    industry: "Diagnostics",
    headline: "1,600+ employees screened in a single day.",
    body:
      "A national diagnostics company brought us in for a same-day biometric screening event in New Jersey. We ran the entire operation end to end, with zero disruption to lab schedules.",
    metric: "1,600+",
    metricLabel: "employees served in one day",
  },
  {
    slug: "fortune-500-airline",
    client: "United Airlines",
    industry: "Aviation",
    headline: "Virtual health fairs across every crew and corporate site.",
    body:
      "A Fortune 500 carrier needed a wellness program that worked for crews on layover in any city and corporate teams at headquarters. We built a multi-year virtual program for the entire workforce.",
    metric: "85,000+",
    metricLabel: "workforce reach",
  },
  {
    slug: "ge-healthcare-population-program",
    client: "GE Healthcare",
    industry: "Medical Devices",
    headline: "Population health for an engineer-heavy workforce.",
    body:
      "A global medical-device manufacturer engaged us to design a multi-touch wellness program that combined screenings, virtual workshops, and ongoing patient monitoring across their U.S. footprint.",
    metric: "50,000+",
    metricLabel: "lives in the program",
  },
];

export function CaseStudyTriptych() {
  return (
    <section className="bg-background py-24 sm:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Case studies"
            title="Three engagements, one playbook."
            description="The same methodology that ran Dr. Feintuch's first practice now scales to a quarter-million employees. Here is what it looks like in the wild."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {studies.map((s, i) => (
            <CaseCard key={s.slug} study={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  study,
  index,
}: {
  study: (typeof studies)[number];
  index: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-card p-7 shadow-soft"
    >
      {/* hover gradient sweep */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-tr from-secondary/0 via-secondary/0 to-gold/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(var(--secondary) / 0.15), transparent 60%, hsl(var(--gold) / 0.18))",
        }}
      />

      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-secondary">
        {study.industry}
      </p>
      <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-foreground">
        {study.client}
      </h3>
      <p className="mt-4 font-serif text-lg leading-snug text-foreground/90 text-balance">
        {study.headline}
      </p>

      <div className="relative mt-6">
        <p className="text-sm leading-relaxed text-muted-foreground transition-opacity duration-300 group-hover:opacity-0">
          {study.body}
        </p>

        {/* hover panel */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-5xl font-semibold tabular-nums text-foreground">
              {study.metric}
            </span>
          </div>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {study.metricLabel}
          </p>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-1 text-sm font-semibold text-secondary"
        >
          See the work
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground backdrop-blur">
        <Users className="h-3 w-3" /> case study
      </div>
    </motion.div>
  );
}
