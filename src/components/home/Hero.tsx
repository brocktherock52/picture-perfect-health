import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneCTAButton } from "@/components/shared/PhoneCTAButton";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { TiltCard } from "@/components/shared/TiltCard";
import { SpineDrift } from "@/components/shared/SpineDrift";
import { FounderPortrait } from "@/components/shared/FounderPortrait";

/**
 * Editorial magazine hero.
 *
 * Left column: massive Fraunces headline ("Corporate wellness that moves the
 * needle.") with per-word letter-mask reveal, sr-only spaces preserved for
 * accessibility and Googlebot.
 *
 * Right column: a 4:5 "cover card" with an editorial line-art founder
 * portrait, a Fraunces wordmark, three drifting credibility chips, and a
 * 3D tilt on mouse.
 *
 * Background: very slow drifting line-art spine + heart (SpineDrift).
 */
export function Hero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, -40]);

  // SplitType-style letter reveal driven by CSS variables, kept simple to avoid
  // hydration races. Each word is wrapped, each letter is animated by index.
  useEffect(() => {
    if (reduce) return;
    const el = heroRef.current?.querySelector<HTMLHeadingElement>("h1.hero-h1");
    if (!el) return;
    const spans = el.querySelectorAll<HTMLElement>("[data-letter]");
    spans.forEach((s, i) => {
      s.style.setProperty("--d", `${i * 22}ms`);
    });
  }, [reduce]);

  const line1 = ["Corporate", "wellness"];
  const line2 = ["that", "moves", "the", "needle."];

  const renderLetters = (word: string, base: number) =>
    Array.from(word).map((ch, i) => (
      <span
        key={`${word}-${i}`}
        data-letter
        className="inline-block translate-y-[1.1em] opacity-0 [animation:hero-letter_700ms_cubic-bezier(.22,1,.36,1)_forwards] [animation-delay:var(--d)]"
        style={{ animationDelay: `${(base + i) * 22}ms` }}
      >
        {ch}
      </span>
    ));

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden bg-background pt-8 md:pt-12"
    >
      {/* letter reveal keyframes (scoped here for portability) */}
      <style>{`
        @keyframes hero-letter {
          0% { transform: translateY(1.1em); opacity: 0; }
          60% { opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      {/* Hand-drawn spine drift, very slow parallax */}
      <SpineDrift className="opacity-[0.22]" />

      {/* warm radial wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-ink-radial"
      />

      <div className="container relative">
        {/* Top folio bar (issue / volume), gives editorial feel */}
        <div className="hidden items-center justify-between border-b border-foreground/15 pb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground/55 md:flex">
          <span>Volume XL . Issue 06 . {new Date().getFullYear()}</span>
          <span>Picture Perfect Health, LLC</span>
          <span>The Wellness Quarterly</span>
        </div>

        <div className="grid items-end gap-10 pb-12 pt-10 md:grid-cols-[1.25fr,1fr] md:gap-14 md:pb-24 md:pt-16 lg:gap-20">
          {/* LEFT: massive editorial headline */}
          <div className="relative">
            <motion.div
              className="mb-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground/55"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
              </span>
              <span>The Cover Story</span>
              <span className="h-px w-10 bg-foreground/30" />
              <span>40 Years . 50 States . Fortune 500</span>
            </motion.div>

            <h1
              className="hero-h1 display-tight font-serif text-[3.4rem] font-semibold text-foreground sm:text-7xl md:text-[7.5rem] lg:text-[8.5rem]"
              style={{ letterSpacing: "-0.04em" }}
            >
              <span className="block overflow-hidden pb-[0.05em]">
                {line1.map((w, i) => (
                  <span key={w}>
                    <span className="mr-[0.18em] inline-block">
                      {renderLetters(w, i === 0 ? 0 : line1[0].length + 1)}
                    </span>
                    <span className="sr-only"> </span>
                  </span>
                ))}
              </span>
              <span className="block overflow-hidden pb-[0.05em]">
                <span className="sr-only"> </span>
                {line2.map((w, i) => {
                  const isAccent = w === "moves" || w === "needle.";
                  const base = line1.join("").length + 2 + i * 4;
                  return (
                    <span key={w}>
                      <span
                        className={`mr-[0.18em] inline-block ${
                          isAccent ? "italic text-secondary" : ""
                        }`}
                      >
                        {renderLetters(w, base)}
                      </span>
                      <span className="sr-only"> </span>
                    </span>
                  );
                })}
              </span>
            </h1>

            <motion.p
              className="mt-10 max-w-xl font-serif text-lg leading-relaxed text-foreground/80 sm:text-xl"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
            >
              Picture Perfect Health, LLC delivers virtual contactless health
              fairs, on-site biometric screenings, and Dr. Eric Hal Feintuch&apos;s
              signature 12 Steps to Wellness program to Fortune 500 workforces
              in all 50 states. Quest Diagnostics. United Airlines. GE
              Healthcare. The Korean Olympic delegation. A U.S. Senator.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  className="group h-12 rounded-full px-7 text-base shadow-soft"
                >
                  <Link to="/contact">
                    Get a wellness audit
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-foreground/15 bg-card/40 px-7 text-base backdrop-blur"
                >
                  <Link to="/services/12-steps-to-wellness">
                    See the 12 Steps
                    <Sparkles className="ml-1 h-4 w-4 text-secondary" />
                  </Link>
                </Button>
              </MagneticButton>
              <PhoneCTAButton
                size="lg"
                className="h-12 rounded-full px-7 text-base"
                variant="ghost"
              />
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-foreground/70"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.15 }}
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                HIPAA-aware
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                Free for qualifying employers
              </span>
              <span className="flex items-center gap-2 text-foreground">
                <span className="flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
                <span className="text-foreground/70">250,000+ employees served</span>
              </span>
            </motion.div>
          </div>

          {/* RIGHT: cover card with editorial portrait */}
          <motion.div
            className="relative"
            style={{ y: reduce ? 0 : imgY }}
            initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-tr from-secondary/15 via-gold/12 to-transparent blur-3xl" />

            <TiltCard className="relative" max={5}>
              <motion.div
                className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-foreground/15 bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] paper-grain"
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <FounderPortrait className="absolute inset-0 h-full w-full" />

                {/* magazine masthead overlay */}
                <div className="pointer-events-none absolute inset-0 flex flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-foreground/55">
                        Picture Perfect Health
                      </p>
                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-foreground/40">
                        The Founder Issue . est. 2006
                      </p>
                    </div>
                    <div className="rounded-full border border-foreground/25 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-foreground/70">
                      N&deg; 01
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="font-serif text-[10px] font-semibold uppercase tracking-[0.24em] text-secondary">
                      Cover . The Doctor
                    </p>
                    <p
                      className="mt-1 font-serif text-3xl font-semibold leading-[0.95] text-foreground sm:text-4xl"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      Dr. Eric
                      <br />
                      Hal Feintuch
                    </p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/60">
                      D.C., CCSD . New York . 1986
                    </p>
                  </div>
                </div>
              </motion.div>
            </TiltCard>

            {/* drifting chip 1 */}
            <motion.div
              className="absolute -bottom-6 -left-6 z-20 flex max-w-[260px] items-start gap-3 rounded-2xl border border-foreground/10 bg-card/95 p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)] backdrop-blur sm:-left-10"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={
                reduce
                  ? { opacity: 1, y: 0 }
                  : { opacity: 1, y: [0, -4, 0], x: [0, 2, 0] }
              }
              transition={
                reduce
                  ? { duration: 0.4 }
                  : { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.7 }
              }
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

            {/* drifting chip 2 */}
            <motion.div
              className="absolute -top-6 -right-4 z-20 flex max-w-[240px] items-start gap-3 rounded-2xl border border-foreground/10 bg-card/95 p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)] backdrop-blur sm:-right-8"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              animate={
                reduce
                  ? { opacity: 1, y: 0 }
                  : { opacity: 1, y: [0, 6, 0], x: [0, -2, 0] }
              }
              transition={
                reduce
                  ? { duration: 0.4 }
                  : { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }
              }
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="text-xs leading-snug">
                <p className="font-semibold text-foreground">Olympic delegation</p>
                <p className="mt-0.5 text-muted-foreground">Korea, 2018 wellness consult</p>
              </div>
            </motion.div>

            {/* drifting chip 3 */}
            <motion.div
              className="absolute right-6 bottom-1/3 z-20 flex max-w-[200px] items-start gap-3 rounded-2xl border border-foreground/10 bg-card/95 p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)] backdrop-blur"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, x: 12 }}
              animate={
                reduce
                  ? { opacity: 1, y: 0 }
                  : { opacity: 1, y: [0, -3, 0], x: [0, 3, 0] }
              }
              transition={
                reduce
                  ? { duration: 0.4 }
                  : { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.1 }
              }
            >
              <div className="text-[10px] leading-snug">
                <p className="font-semibold uppercase tracking-[0.18em] text-secondary">
                  Cited
                </p>
                <p className="mt-0.5 text-foreground/80">
                  U.S. Senator Ron Johnson, 2022
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-foreground/10 py-6"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Founded by Dr. Eric Hal Feintuch, D.C., CCSD
            <span className="mx-3 text-foreground/30">.</span>
            New York Chiropractic College, honors 1986
            <span className="mx-3 text-foreground/30">.</span>
            Korean Olympics delegate . Senator Ron Johnson, 2022
          </p>
        </motion.div>
      </div>
    </section>
  );
}
