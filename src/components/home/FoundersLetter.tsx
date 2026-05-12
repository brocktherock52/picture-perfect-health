import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";

/**
 * Editorial founder's letter. Dark ink section with cream type and large
 * magazine pull quote. Section is marked data-cursor-invert so the custom
 * cursor inverts color over it.
 */
export function FoundersLetter() {
  const reduce = useReducedMotion();

  return (
    <section
      data-cursor-invert
      className="relative overflow-hidden bg-ink py-28 text-ink-foreground sm:py-36"
    >
      {/* paper grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(38 38% 96%) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 -z-0 h-[460px] w-[460px] rounded-full bg-secondary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-0 h-[460px] w-[460px] rounded-full bg-gold/15 blur-3xl"
      />

      <div className="container relative">
        <div className="grid items-end gap-10 md:grid-cols-[1fr,1.4fr] md:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow text-secondary">A note from Dr. Feintuch</p>
              <p
                className="mt-3 font-serif text-[10rem] font-semibold leading-[0.78] text-secondary/30 sm:text-[14rem]"
                aria-hidden="true"
                style={{ letterSpacing: "-0.04em" }}
              >
                &ldquo;
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-serif text-4xl font-semibold tracking-tight text-ink-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance display-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Wellness is not a benefit. It is a body of work.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-x-12 gap-y-6 sm:grid-cols-2">
          <Reveal delay={0.15}>
            <p className="font-serif text-xl leading-[1.6] text-ink-foreground/85 sm:text-[1.4rem]">
              I have spent forty years putting my hands on patients. Some of
              them were Fortune 500 executives in shirt and tie. Some of them
              were Olympic athletes from another country. Most of them were
              just people who needed a body that worked a little better
              tomorrow than it did today.
            </p>
            <p className="mt-5 font-serif text-xl leading-[1.6] text-ink-foreground/85 sm:text-[1.4rem]">
              None of them were a number. None of them were a wellness metric.
              They were people, and people change one habit at a time, with one
              person who cares enough to keep asking.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="font-serif text-xl leading-[1.6] text-ink-foreground/85 sm:text-[1.4rem]">
              That is what Picture Perfect Health is. It is twelve concrete
              steps. It is a screening that gets done because we brought it to
              the desk. It is one clinician who picks up the phone. It is the
              way a corner treats a fighter, applied at corporate scale.
            </p>
            <p className="mt-5 font-serif text-xl leading-[1.6] text-ink-foreground/85 sm:text-[1.4rem]">
              If that is the kind of program you want for your people, we
              should talk.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.35}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-end">
            <div>
              <motion.svg
                viewBox="0 0 320 80"
                className="h-14 w-auto text-secondary sm:h-16"
                aria-label="Signature: Dr. Eric Hal Feintuch"
                initial={reduce ? { opacity: 1 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.path
                  d="M8 56 C 24 18, 44 18, 56 42 C 62 54, 72 54, 80 38 C 88 22, 100 22, 108 40 C 114 52, 124 56, 136 38 C 144 26, 156 26, 162 44 C 168 56, 180 58, 192 38 C 200 24, 214 22, 220 40 C 226 56, 240 58, 252 36 C 260 22, 272 24, 280 42 C 286 54, 298 54, 312 30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              </motion.svg>
              <p className="mt-3 font-sans text-sm font-semibold text-ink-foreground">
                Dr. Eric Hal Feintuch, D.C., CCSD
              </p>
              <p className="text-xs text-ink-foreground/60">
                Founder, Picture Perfect Health, LLC
              </p>
            </div>
            <div className="text-right text-[11px] uppercase tracking-[0.28em] text-ink-foreground/60">
              Valley Stream, NY
              <br />
              est. 2006
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
