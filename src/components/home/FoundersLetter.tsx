import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";

/**
 * Full-bleed founder's letter. Eric's voice, signed in a handwriting-style
 * stroke at the bottom. Sits between the Workshop and the Stats strip to
 * give the page a human pause.
 */
export function FoundersLetter() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-accent/30 to-background py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-secondary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-gold/15 blur-3xl"
      />

      <div className="container">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary">
              A note from Dr. Feintuch
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
              Wellness is not a benefit. It is a body of work.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 space-y-6 font-serif text-xl leading-[1.6] text-foreground/85 sm:text-[1.4rem]">
              <p>
                I have spent forty years putting my hands on patients. Some of them were
                Fortune 500 executives in shirt and tie. Some of them were Olympic athletes from
                another country. Most of them were just people who needed a body that worked
                a little better tomorrow than it did today.
              </p>
              <p>
                None of them were a number. None of them were a wellness metric. They were
                people, and people change one habit at a time, with one person who cares
                enough to keep asking.
              </p>
              <p>
                That is what Picture Perfect Health is. It is twelve concrete steps. It is a
                screening that gets done because we brought it to the desk. It is one
                clinician who picks up the phone. It is the way a corner treats a fighter,
                applied at corporate scale.
              </p>
              <p>
                If that is the kind of program you want for your people, we should talk.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex items-end justify-between">
              <div>
                {/* Hand-drawn signature */}
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
                <p className="mt-3 font-sans text-sm font-semibold text-foreground">
                  Dr. Eric Hal Feintuch, D.C., CCSD
                </p>
                <p className="text-xs text-muted-foreground">
                  Founder, Picture Perfect Health, LLC
                </p>
              </div>
              <div className="hidden text-right text-[11px] uppercase tracking-[0.24em] text-muted-foreground sm:block">
                Valley Stream, NY
                <br />
                est. 2006
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
