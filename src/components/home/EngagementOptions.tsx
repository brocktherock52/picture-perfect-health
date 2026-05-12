import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

/**
 * Three-tier engagement ladder for corporate buyers, sized one step above
 * /membership (which targets individuals and small teams). These are
 * deliberate price *ranges*, not exact quotes, designed to qualify the
 * buyer and route them to a discovery call.
 */
const tiers = [
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
  },
];

export function EngagementOptions() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="engagement-heading"
      className="relative bg-muted/30 py-20 sm:py-28"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Engagement options
          </p>
          <h2
            id="engagement-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance"
          >
            Pick the cadence your workforce actually needs.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Three deliberate ways to engage. Every tier is delivered by the same
            clinical team and reports into the same population health dashboard.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-2xl border p-7 shadow-soft sm:p-8 ${
                tier.primary
                  ? "border-secondary/40 bg-card ring-1 ring-secondary/30"
                  : "border-foreground/10 bg-card"
              }`}
            >
              {tier.primary ? (
                <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary-foreground shadow-soft">
                  Most popular
                </span>
              ) : null}

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {tier.cadence}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-3 text-2xl font-semibold text-foreground">
                  {tier.priceLabel}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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

              <div className="mt-7 pt-7">
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

        <p className="mt-10 text-center text-xs text-muted-foreground">
          All engagements start with a free 30-minute discovery call. Pricing
          ranges reflect typical mid-market scope. Final quotes are workforce-sized.
        </p>
      </div>
    </section>
  );
}
