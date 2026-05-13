import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Plug } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Premium signal #3 from the design brief.
 *
 * An integrations / API panel showing benefits-platform connectors
 * (Workday, Rippling, Sequoia, Mercer, BambooHR). Nobody in corporate wellness
 * publishes this. Per the brief, this is the single move that signals
 * enterprise-grade infrastructure to a procurement team.
 */

type Connector = {
  name: string;
  category: string;
  status: "Live" | "Beta" | "Coming";
  description: string;
};

const CONNECTORS: Connector[] = [
  {
    name: "Workday",
    category: "HCM",
    status: "Live",
    description: "Census sync, eligibility, deduction codes, biometric outcomes back-feed.",
  },
  {
    name: "Rippling",
    category: "HRIS + Benefits",
    status: "Live",
    description: "Real-time roster updates, SSO, and benefits-admin write-back.",
  },
  {
    name: "Sequoia",
    category: "Benefits Brokerage",
    status: "Live",
    description: "Open-enrollment feed, plan-year audit packet, broker dashboard reporting.",
  },
  {
    name: "Mercer",
    category: "Consulting + Brokerage",
    status: "Live",
    description: "Carrier-agnostic outcome packets and PEPM reconciliation files.",
  },
  {
    name: "BambooHR",
    category: "HRIS",
    status: "Live",
    description: "Bidirectional employee directory and engagement event sync.",
  },
  {
    name: "ADP Workforce Now",
    category: "Payroll + HCM",
    status: "Live",
    description: "Census, deductions, and population health aggregates by department.",
  },
  {
    name: "UKG Pro",
    category: "HCM",
    status: "Beta",
    description: "Eligibility, scheduling, and on-site event roster sync.",
  },
  {
    name: "Gusto",
    category: "Payroll",
    status: "Beta",
    description: "SMB census + benefits eligibility for mid-market clients.",
  },
];

function ConnectorTile({ c, index }: { c: Connector; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="logo-tile group flex items-start gap-4 rounded-xl border border-foreground/10 bg-card/70 p-5 transition-colors hover:border-foreground/20"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-foreground/10 bg-background text-coral">
        <Plug className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <p className="truncate font-display text-base font-semibold text-foreground">
            {c.name}
          </p>
          <span
            className={
              "shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] " +
              (c.status === "Live"
                ? "border-coral/30 bg-coral/8 text-coral"
                : "border-foreground/15 bg-background text-foreground/55")
            }
          >
            {c.status}
          </span>
        </div>
        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/45">
          {c.category}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
          {c.description}
        </p>
      </div>
    </motion.div>
  );
}

export function IntegrationsSection() {
  return (
    <section id="integrations" className="relative bg-background py-24 sm:py-28">
      <div className="container">
        <div className="grid items-end gap-6 md:grid-cols-[1.2fr,1fr] md:gap-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-coral">
              Integrations
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-[3.5rem]">
              Plugs into the benefits stack your CFO already trusts.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-foreground/65 sm:text-lg">
            We write to Workday, Rippling, Sequoia, Mercer, BambooHR, ADP, UKG,
            and Gusto. Eligibility, deductions, outcome write-back, audit-grade
            event logs. Zero manual reconciliation at plan-year close.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONNECTORS.map((c, i) => (
            <ConnectorTile key={c.name} c={c} index={i} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-foreground/10 bg-card/40 p-6 sm:p-7">
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              Don&apos;t see your stack? We will build the connector during implementation.
            </p>
            <p className="mt-1 text-sm text-foreground/60">
              Standard one-time integration scoping included with every contract.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-foreground/15 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-coral hover:text-coral"
          >
            Request integration spec
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
