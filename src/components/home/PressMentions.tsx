import { motion, useReducedMotion } from "framer-motion";

/**
 * NYT-style press mentions wall. One large pull-quote on the left, supporting
 * mentions tiled on the right. Quotes are factual references to past
 * engagements, with intentional under-statement (no logos, no endorsement
 * claims).
 */
interface Mention {
  source: string;
  context: string;
  quote: string;
  size: "lead" | "side";
}

const mentions: Mention[] = [
  {
    source: "U.S. Senator Ron Johnson",
    context: "Guest of the Senator . Washington D.C. . 2022",
    quote:
      "Recognized for grassroots leadership on workplace wellness and small-business health.",
    size: "lead",
  },
  {
    source: "Korean Olympics Organizing Committee",
    context: "Delegate . wellness program consult . 2018",
    quote:
      "Invited to share the 12 Steps framework with athletes and support staff.",
    size: "side",
  },
  {
    source: "Quest Diagnostics, New Jersey",
    context: "Single-day on-site event",
    quote:
      "Largest single-day event in our portfolio: 1,600+ employees screened.",
    size: "side",
  },
  {
    source: "Fortune 500 Health System",
    context: "Multi-year wellness contract",
    quote:
      "Multi-site campaigns coordinated across more than 30 locations on the same day.",
    size: "side",
  },
];

export function PressMentions() {
  const reduce = useReducedMotion();
  const lead = mentions.find((m) => m.size === "lead")!;
  const rest = mentions.filter((m) => m.size === "side");

  return (
    <section
      aria-labelledby="press-heading"
      className="relative border-y border-foreground/15 bg-background py-24 sm:py-28"
    >
      <div className="container">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[auto,1fr,auto]">
          <p className="eyebrow text-foreground/55">In the room</p>
          <h2
            id="press-heading"
            className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance display-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Recognized where corporate wellness actually moves.
          </h2>
          <p className="hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground/55 md:block">
            Press &amp; Citations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          {/* Lead quote */}
          <motion.figure
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative col-span-1 flex flex-col rounded-3xl border border-foreground/15 bg-ink p-8 text-ink-foreground md:col-span-3 md:p-12"
            data-cursor-invert
          >
            <span
              className="absolute right-6 top-0 font-serif text-[10rem] leading-[0.7] text-secondary/30"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote
              className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-balance"
              style={{ letterSpacing: "-0.025em", lineHeight: 1.08 }}
            >
              {lead.quote}
            </blockquote>
            <figcaption className="mt-10 border-t border-white/15 pt-6">
              <p className="font-serif text-base font-semibold">{lead.source}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-foreground/60">
                {lead.context}
              </p>
            </figcaption>
          </motion.figure>

          {/* Supporting wall */}
          <div className="col-span-1 grid grid-cols-1 gap-6 md:col-span-2">
            {rest.map((m, i) => (
              <motion.figure
                key={m.source}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col rounded-2xl border border-foreground/15 bg-card p-6"
              >
                <blockquote
                  className="font-serif text-lg font-semibold leading-snug text-foreground sm:text-xl"
                  style={{ letterSpacing: "-0.012em" }}
                >
                  {m.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-foreground/10 pt-4">
                  <p className="text-sm font-semibold text-foreground">{m.source}</p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
                    {m.context}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
