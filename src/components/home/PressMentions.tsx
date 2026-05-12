import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";

/**
 * Editorial "press strip" with named third-party mentions and one-line
 * blurbs. Mentions are factual references to past engagements and remain
 * intentionally understated (no logos, no attributions claiming endorsement).
 */
const mentions: { source: string; context: string; quote: string }[] = [
  {
    source: "U.S. Senator Ron Johnson",
    context: "Guest of the Senator, Washington D.C., 2022",
    quote:
      "Recognized for grassroots leadership on workplace wellness and small-business health.",
  },
  {
    source: "Korean Olympics organizing committee",
    context: "Delegate, wellness program consult",
    quote:
      "Invited to share the 12 Steps framework with athletes and support staff.",
  },
  {
    source: "Quest Diagnostics, New Jersey",
    context: "Single-day on-site event",
    quote:
      "Largest single-day event in our portfolio: 1,600+ employees screened.",
  },
  {
    source: "Fortune 500 Health System",
    context: "Multi-year wellness contract",
    quote:
      "Multi-site campaigns coordinated across more than 30 locations on the same day.",
  },
];

export function PressMentions() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="press-heading"
      className="relative border-y border-foreground/10 bg-background py-16 sm:py-24"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            In the room
          </p>
          <h2
            id="press-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance"
          >
            Recognized where corporate wellness actually moves.
          </h2>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mentions.map((m, i) => (
            <motion.li
              key={m.source}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-foreground/10 bg-card/70 p-6 shadow-soft backdrop-blur"
            >
              <Quote className="mb-3 h-5 w-5 text-secondary" aria-hidden="true" />
              <p className="font-serif text-base leading-snug text-foreground">
                {m.quote}
              </p>
              <div className="mt-5 border-t border-foreground/10 pt-4">
                <p className="text-sm font-semibold text-foreground">{m.source}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{m.context}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
