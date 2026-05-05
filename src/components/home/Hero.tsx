import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneCTAButton } from "@/components/shared/PhoneCTAButton";
import { AssetImage } from "@/components/shared/AssetImage";

export function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = {
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative isolate overflow-hidden bg-background pt-10 md:pt-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-ink-radial"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 -z-10 h-[460px] w-[460px] rounded-full bg-secondary/15 blur-3xl"
        animate={reduce ? undefined : { y: [0, 14, 0], x: [0, 12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 -z-10 h-[460px] w-[460px] rounded-full bg-gold/15 blur-3xl"
        animate={reduce ? undefined : { y: [0, -14, 0], x: [0, -12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative">
        <div className="grid items-center gap-10 pb-16 md:grid-cols-[1.05fr,1fr] md:gap-14 md:pb-24 lg:gap-20">
          <div className="max-w-2xl">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70 backdrop-blur"
              {...fadeUp}
              transition={{ duration: 0.5 }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
              </span>
              40 years · Fortune 500 trusted · All 50 states
            </motion.div>

            <motion.h1
              className="mt-6 font-serif text-[2.6rem] font-semibold leading-[0.95] tracking-tight text-balance text-foreground sm:text-6xl md:text-[4.5rem] lg:text-[5rem]"
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              Corporate wellness that{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-tr from-primary via-secondary to-gold bg-clip-text text-transparent">
                  moves the needle.
                </span>
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-3 left-0 h-3 w-full text-secondary/70"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 C 50 2, 150 14, 198 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              Picture Perfect Health, LLC delivers virtual contactless health fairs, on-site
              biometric screenings, and Dr. Eric Hal Feintuch's signature 12 Steps to Wellness
              program to Fortune 500 workforces in all 50 states. Quest Diagnostics, GE
              Healthcare, United Airlines, and many more.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              <Button asChild size="lg" className="group h-12 rounded-full px-7 text-base shadow-soft">
                <Link to="/contact">
                  Book a free virtual health fair
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <PhoneCTAButton
                size="lg"
                className="h-12 rounded-full border-foreground/15 bg-card/40 px-7 text-base backdrop-blur"
                variant="outline"
              />
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="flex items-center gap-2 text-foreground/70">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                HIPAA-aware
              </span>
              <span className="flex items-center gap-2 text-foreground/70">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                Free for qualifying employers
              </span>
              <span className="flex items-center gap-2 text-foreground">
                <span className="flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                <span className="text-foreground/70">250,000+ employees served</span>
              </span>
            </motion.div>
          </div>

          {/* Right: dramatic full-bleed portrait card */}
          <motion.div
            className="relative"
            initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-secondary/15 via-gold/15 to-transparent blur-3xl" />

            <motion.div
              className="relative overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <AssetImage
                src="/hero-pph.jpg"
                alt="Senior healthcare professional smiling, ready to consult"
                priority
                className="aspect-[4/5] object-cover sm:aspect-[5/6] md:aspect-[4/5]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              {/* Floating accreditation pill */}
              <motion.div
                className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md"
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                D.C., CCSD · est. 1986
              </motion.div>

              {/* Floating credibility card */}
              <motion.div
                className="absolute -bottom-5 -left-5 flex max-w-[280px] items-start gap-3 rounded-2xl border border-foreground/10 bg-card/95 p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)] backdrop-blur sm:-left-8"
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div className="text-xs leading-snug">
                  <p className="font-semibold text-foreground">Largest single-day event</p>
                  <p className="mt-0.5 text-muted-foreground">
                    1,600+ Quest Diagnostics employees
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-foreground/10 py-6"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Founded by Dr. Eric Hal Feintuch, D.C., CCSD
            <span className="mx-3 text-foreground/30">·</span>
            New York Chiropractic College, honors 1986
            <span className="mx-3 text-foreground/30">·</span>
            Korean Olympics delegate · Senator Ron Johnson, 2022
          </p>
        </motion.div>
      </div>
    </section>
  );
}
