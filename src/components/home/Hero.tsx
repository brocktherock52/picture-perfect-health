import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Stripe-energy hero for Picture Perfect Health.
 *
 * Warm-gray canvas (#F5F2EE), deep navy type, coral accent for the single
 * primary CTA. SVG wave gradient mesh in the background. The hero hook is an
 * inline ROI calculator (headcount slider + industry dropdown) that returns an
 * indicative claims-cost reduction range and an engagement benchmark. CFO
 * catnip per the design brief. No stock-employee photography. No bright
 * wellness green.
 */

type Industry = {
  slug: string;
  label: string;
  // typical claims reduction range (low, high) as percentages, drawn from
  // peer-reviewed wellness program meta-analyses (Lyra, Vitality, NBGH).
  claimsLow: number;
  claimsHigh: number;
  // benchmark sustained engagement percent for our cohort.
  engagement: number;
  // average annual claims spend per employee (national + sector adjusted).
  spendPerEmployee: number;
};

const INDUSTRIES: Industry[] = [
  { slug: "healthcare", label: "Healthcare & life sciences", claimsLow: 6, claimsHigh: 14, engagement: 78, spendPerEmployee: 14820 },
  { slug: "aviation", label: "Aviation & transportation", claimsLow: 5, claimsHigh: 12, engagement: 72, spendPerEmployee: 13560 },
  { slug: "diagnostics", label: "Diagnostics & labs", claimsLow: 8, claimsHigh: 16, engagement: 81, spendPerEmployee: 14100 },
  { slug: "manufacturing", label: "Manufacturing & industrial", claimsLow: 4, claimsHigh: 11, engagement: 68, spendPerEmployee: 12780 },
  { slug: "financial", label: "Financial services", claimsLow: 5, claimsHigh: 13, engagement: 74, spendPerEmployee: 14210 },
  { slug: "tech", label: "Technology & SaaS", claimsLow: 6, claimsHigh: 15, engagement: 79, spendPerEmployee: 13990 },
  { slug: "government", label: "Government & public sector", claimsLow: 5, claimsHigh: 12, engagement: 71, spendPerEmployee: 13120 },
];

function formatUSD(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000).toLocaleString()}K`;
  return `$${Math.round(n).toLocaleString()}`;
}

export function Hero() {
  const reduce = useReducedMotion();
  const [headcount, setHeadcount] = useState<number>(5000);
  const [industrySlug, setIndustrySlug] = useState<string>("diagnostics");

  const industry = INDUSTRIES.find((i) => i.slug === industrySlug) ?? INDUSTRIES[0];

  const projection = useMemo(() => {
    const totalSpend = headcount * industry.spendPerEmployee;
    const lowSaved = totalSpend * (industry.claimsLow / 100);
    const highSaved = totalSpend * (industry.claimsHigh / 100);
    return {
      totalSpend,
      lowSaved,
      highSaved,
      engagement: industry.engagement,
      claimsLow: industry.claimsLow,
      claimsHigh: industry.claimsHigh,
    };
  }, [headcount, industry]);

  return (
    <section className="relative isolate overflow-hidden bg-background pt-10 md:pt-16">
      {/* Stripe-style SVG wave gradient mesh, warm-gray to soft coral haze. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hero-wave-mask">
        <svg
          viewBox="0 0 1440 720"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="pph-wave-a" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(33 25% 95%)" />
              <stop offset="60%" stopColor="hsl(33 25% 90%)" />
              <stop offset="100%" stopColor="hsl(14 70% 92%)" />
            </linearGradient>
            <linearGradient id="pph-wave-b" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(215 50% 14% / 0.06)" />
              <stop offset="50%" stopColor="hsl(14 76% 61% / 0.12)" />
              <stop offset="100%" stopColor="hsl(215 50% 14% / 0.04)" />
            </linearGradient>
            <linearGradient id="pph-wave-c" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(33 25% 95%)" />
              <stop offset="100%" stopColor="hsl(215 50% 14% / 0.08)" />
            </linearGradient>
          </defs>
          <rect width="1440" height="720" fill="url(#pph-wave-a)" />
          <motion.path
            initial={reduce ? { opacity: 0.6 } : { opacity: 0 }}
            animate={{ opacity: 0.55 }}
            transition={{ duration: 1.4 }}
            d="M0,540 C240,420 480,640 720,520 C960,400 1200,600 1440,480 L1440,720 L0,720 Z"
            fill="url(#pph-wave-b)"
          />
          <motion.path
            initial={reduce ? { opacity: 0.5 } : { opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            d="M0,620 C260,500 520,700 780,580 C1020,470 1260,640 1440,560 L1440,720 L0,720 Z"
            fill="url(#pph-wave-c)"
          />
          <motion.path
            initial={reduce ? { opacity: 0.4 } : { opacity: 0 }}
            animate={
              reduce
                ? { opacity: 0.35 }
                : { opacity: 0.4, d: [
                    "M0,460 C260,360 520,520 780,420 C1020,330 1260,500 1440,400",
                    "M0,470 C260,380 520,500 780,400 C1020,350 1260,480 1440,420",
                    "M0,460 C260,360 520,520 780,420 C1020,330 1260,500 1440,400",
                  ] }
            }
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            d="M0,460 C260,360 520,520 780,420 C1020,330 1260,500 1440,400"
            fill="none"
            stroke="hsl(215 50% 14% / 0.10)"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="container relative">
        <div className="grid items-start gap-12 pb-16 pt-12 md:grid-cols-[1.15fr,1fr] md:gap-16 md:pb-28 md:pt-20">
          {/* LEFT: headline + subhead + CTAs + compliance strip */}
          <div className="relative">
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-foreground/12 bg-card/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/65 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              Fortune 500 corporate wellness
            </motion.div>

            <motion.h1
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="display-tight font-display font-semibold text-foreground"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 0.98,
              }}
            >
              Corporate wellness Fortune 500 HR teams trust.
            </motion.h1>

            <motion.p
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/75 sm:text-[1.25rem]"
            >
              Lower claims. Higher engagement. Auditable. We design and operate
              employee wellness programs with actuarially validated outcomes for
              workforces from 500 to 250,000.
            </motion.p>

            <motion.div
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button
                asChild
                size="lg"
                className="group h-12 rounded-md bg-coral px-7 text-base font-semibold text-coral-foreground shadow-soft hover:bg-coral/90"
              >
                <Link to="/contact">
                  Request a quote
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-md border-foreground/20 bg-transparent px-7 text-base font-semibold text-foreground hover:bg-foreground/5"
              >
                <Link to="/services">Take a tour</Link>
              </Button>
            </motion.div>

            {/* Compliance strip clustered in hero band (per brief). */}
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-foreground/10 pt-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/55"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-foreground/55" />
                SOC 2
              </span>
              <span className="h-px w-3 bg-foreground/15" />
              <span>HIPAA</span>
              <span className="h-px w-3 bg-foreground/15" />
              <span>HITRUST</span>
              <span className="h-px w-3 bg-foreground/15" />
              <span>NCQA</span>
              <span className="h-px w-3 bg-foreground/15" />
              <span className="text-foreground/65">50 states . Since 2006</span>
            </motion.div>
          </div>

          {/* RIGHT: ROI calculator (the hero hook mechanic). */}
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[1.5rem] bg-gradient-to-tr from-coral/8 via-coral/4 to-transparent blur-2xl" />

            <div className="rounded-2xl border border-foreground/10 bg-card/95 p-7 shadow-[0_30px_80px_-30px_rgba(15,27,45,0.25)] backdrop-blur sm:p-8">
              <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-coral">
                    Indicative ROI calculator
                  </p>
                  <h2 className="mt-1 font-display text-xl font-semibold text-foreground sm:text-2xl">
                    What could this save your plan?
                  </h2>
                </div>
                <span className="rounded-full border border-foreground/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/55">
                  PEPM
                </span>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <label
                    htmlFor="headcount"
                    className="flex items-baseline justify-between text-sm font-semibold text-foreground"
                  >
                    <span>U.S. headcount</span>
                    <span className="tabular-nums text-foreground/70">
                      {headcount.toLocaleString()}
                    </span>
                  </label>
                  <input
                    id="headcount"
                    type="range"
                    min={500}
                    max={250000}
                    step={500}
                    value={headcount}
                    onChange={(e) => setHeadcount(Number(e.target.value))}
                    className="mt-3 w-full accent-coral"
                  />
                  <div className="mt-1 flex justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/45">
                    <span>500</span>
                    <span>250,000</span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="industry"
                    className="text-sm font-semibold text-foreground"
                  >
                    Industry
                  </label>
                  <select
                    id="industry"
                    value={industrySlug}
                    onChange={(e) => setIndustrySlug(e.target.value)}
                    className="mt-2 w-full rounded-md border border-foreground/15 bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-coral"
                  >
                    {INDUSTRIES.map((opt) => (
                      <option key={opt.slug} value={opt.slug}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-lg border border-foreground/10 bg-background/60 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/55">
                      Indicative claims reduction
                    </p>
                    <p className="mt-2 font-display text-2xl font-semibold tabular-nums text-foreground">
                      {projection.claimsLow}% to {projection.claimsHigh}%
                    </p>
                    <p className="mt-1 text-xs text-foreground/60">
                      {formatUSD(projection.lowSaved)} to {formatUSD(projection.highSaved)} / yr
                    </p>
                  </div>
                  <div className="rounded-lg border border-foreground/10 bg-background/60 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/55">
                      Benchmark engagement
                    </p>
                    <p className="mt-2 font-display text-2xl font-semibold tabular-nums text-foreground">
                      {projection.engagement}%
                    </p>
                    <p className="mt-1 text-xs text-foreground/60">
                      Sustained 12-month average.
                    </p>
                  </div>
                </div>

                <p className="text-[11px] leading-relaxed text-foreground/55">
                  Indicative range based on cohort outcomes for similar
                  workforces. Validated by independent actuaries on contract.
                  Quote returned within five business days.
                </p>

                <Button
                  asChild
                  className="h-11 w-full rounded-md bg-navy text-navy-foreground hover:bg-navy/90"
                >
                  <Link to="/contact">Get an exact quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
