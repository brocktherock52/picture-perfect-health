import { Download, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Premium signal #1 from the design brief.
 *
 * An actuarial-validation tile placed in the hero band: outcomes signed off by
 * an independent firm, with a downloadable PDF (placeholder methodology
 * brief). What Vitality does and what Wellable/WebMD do not.
 */
export function ActuarialValidation() {
  const reduce = useReducedMotion();

  return (
    <section className="relative border-y border-foreground/10 bg-background py-12 sm:py-16">
      <div className="container">
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-center gap-8 rounded-2xl border border-foreground/10 bg-card/70 p-7 backdrop-blur md:grid-cols-[auto,1fr,auto] md:gap-10 md:p-9"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-foreground/12 bg-background/70 text-coral">
            <ShieldCheck className="h-7 w-7" />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-coral">
              Outcomes validated by independent actuaries
            </p>
            <p className="mt-2 font-display text-2xl font-semibold leading-tight text-foreground sm:text-[1.75rem]">
              Claims-cost projections audited by Milliman methodology.
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/65">
              Every quoted savings figure is independently re-priced against the
              prior plan year using actuarial techniques benchmarked to the
              Milliman Medical Index. Read the methodology brief before your
              next benefits committee meeting.
            </p>
          </div>

          <a
            href="/picture-perfect-health-actuarial-methodology.pdf"
            download
            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-foreground/15 bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-coral hover:text-coral"
          >
            <Download className="h-4 w-4" />
            Methodology PDF
          </a>
        </motion.div>
      </div>
    </section>
  );
}
