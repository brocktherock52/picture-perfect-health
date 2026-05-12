import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

/**
 * Three-tier engagement ladder for corporate buyers. The "Most popular" tier
 * lifts and glows; the entire row reveals a comparison table below when the
 * reader clicks the "Compare tiers" toggle.
 */

interface Tier {
  name: string;
  cadence: string;
  priceLabel: string;
  blurb: string;
  features: string[];
  ctaLabel: string;
  href: string;
  primary?: boolean;
  badge?: string;
  compare: {
    employees: string;
    cadence: string;
    workshop: string;
    dashboard: string;
    manager: string;
  };
}

const tiers: Tier[] = [
  {
    name: "Wellness Day",
    cadence: "single event",
    priceLabel: "From $4,500",
    blurb:
      "One on-site or virtual event. Perfect for benefits open enrollment, kickoffs, or a culture moment.",
    features: [
      "On-site or virtual format",
      "Up to 500 employees",
      "Biometric screenings or workshop",
      "Same-day engagement report",
      "Optional Dr. Feintuch keynote",
    ],
    ctaLabel: "Book a Wellness Day",
    href: "/contact?engagement=wellness-day",
    compare: {
      employees: "Up to 500",
      cadence: "Single event",
      workshop: "Optional",
      dashboard: "Same-day report",
      manager: "Event lead",
    },
  },
  {
    name: "Quarterly Program",
    cadence: "12-week cycle",
    priceLabel: "$18k - $48k / quarter",
    blurb:
      "Multi-touch quarterly program combining screenings, workshops, and ongoing virtual touch points.",
    features: [
      "Quarterly cadence, 4 cycles / year",
      "Up to 5,000 employees",
      "12 Steps Workshop included",
      "Population health dashboard",
      "Dedicated program manager",
      "Quarterly executive review",
    ],
    ctaLabel: "Scope a quarterly program",
    href: "/contact?engagement=quarterly",
    primary: true,
    badge: "Most popular",
    compare: {
      employees: "Up to 5,000",
      cadence: "4 cycles / year",
      workshop: "Included",
      dashboard: "Population dashboard",
      manager: "Dedicated PM",
    },
  },
  {
    name: "Annual Partnership",
    cadence: "12-month custom",
    priceLabel: "Custom",
    blurb:
      "Fully custom, multi-site, multi-channel wellness partnership for Fortune 500 workforces.",
    features: [
      "Unlimited employees, all 50 states",
      "Multi-site on-site coordination",
      "HRIS and benefits integration",
      "Custom branded program",
      "Executive sponsor & quarterly reviews",
      "ROI tracking and outcome reporting",
    ],
    ctaLabel: "Request a Fortune 500 quote",
    href: "/contact?engagement=annual",
    badge: "Most booked",
    compare: {
      employees: "Unlimited",
      cadence: "12 months",
      workshop: "Custom curriculum",
      dashboard: "ROI + outcomes",
      manager: "Exec sponsor + PM",
    },
  },
];

export function EngagementOptions() {
  const reduce = useReducedMotion();
  const [showCompare, setShowCompare] = useState(false);

  return (
    <section
      aria-labelledby="engagement-heading"
      className="relative bg-background py-24 sm:py-32"
    >
      <div className="container">
        <div className="mb-14 grid items-end gap-6 md:grid-cols-[1.1fr,1fr]">
          <div>
            <p className="eyebrow text-secondary">Engagement options</p>
            <h2
              id="engagement-heading"
              className="mt-4 font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl text-balance display-tight"
              style={{ letterSpacing: "-0.035em" }}
            >
              Pick the cadence your workforce actually needs.
            </h2>
          </div>
          <p className="font-serif text-lg leading-relaxed text-foreground/75 sm:text-xl">
            Three deliberate ways to engage. Every tier is delivered by the
            same clinical team and reports into the same population health
            dashboard. All engagements start with a free 30-minute discovery
            call.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={
                reduce
                  ? undefined
                  : { y: -8, boxShadow: "0 30px 80px -30px hsl(166 60% 38% / 0.35)" }
              }
              className={`relative flex flex-col rounded-2xl border p-8 transition-shadow ${
                tier.primary
                  ? "border-secondary/40 bg-card shadow-[0_20px_60px_-20px_hsl(166_60%_38%_/0.4)] ring-1 ring-secondary/30"
                  : "border-foreground/10 bg-card shadow-soft"
              }`}
            >
              {tier.badge ? (
                <span
                  className={`absolute -top-3 left-7 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] shadow-soft ${
                    tier.primary
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-foreground text-background"
                  }`}
                >
                  {tier.primary ? (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-foreground/60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary-foreground/90" />
                    </span>
                  ) : null}
                  <span className={tier.primary ? "ml-2" : ""}>{tier.badge}</span>
                </span>
              ) : null}

              <div>
                <p className="eyebrow text-foreground/55">{tier.cadence}</p>
                <h3
                  className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  {tier.name}
                </h3>
                <p
                  className="mt-4 font-serif text-3xl font-semibold tabular-nums text-foreground"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {tier.priceLabel}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {tier.blurb}
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-foreground/85">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <Button
                  asChild
                  size="lg"
                  variant={tier.primary ? "default" : "outline"}
                  className="w-full rounded-full"
                >
                  <Link to={tier.href}>
                    {tier.ctaLabel}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() => setShowCompare((x) => !x)}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            {showCompare ? "Hide" : "Compare"} all tiers
            <motion.span
              animate={{ rotate: showCompare ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {showCompare ? (
              <motion.div
                key="cmp"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full overflow-hidden"
              >
                <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-card">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted/40 text-[11px] uppercase tracking-[0.22em] text-foreground/55">
                      <tr>
                        <th className="p-4">Detail</th>
                        {tiers.map((t) => (
                          <th key={t.name} className="p-4 font-semibold text-foreground">
                            {t.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-foreground/85">
                      {[
                        ["Employees", "employees"],
                        ["Cadence", "cadence"],
                        ["12 Steps Workshop", "workshop"],
                        ["Reporting", "dashboard"],
                        ["Program management", "manager"],
                      ].map(([label, key]) => (
                        <tr key={label} className="border-t border-foreground/10">
                          <td className="p-4 text-foreground/55">{label}</td>
                          {tiers.map((t) => (
                            <td key={t.name + label} className="p-4">
                              {t.compare[key as keyof Tier["compare"]]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            All engagements start with a free 30-minute discovery call. Pricing
            ranges reflect typical mid-market scope. Final quotes are
            workforce-sized.
          </p>
        </div>
      </div>
    </section>
  );
}
