import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneCTAButton } from "@/components/shared/PhoneCTAButton";
import { AssetImage } from "@/components/shared/AssetImage";
import { TiltCard } from "@/components/shared/TiltCard";
import { MagneticButton } from "@/components/shared/MagneticButton";

/**
 * Editorial split-layout hero.
 * Left: animated headline with per-word reveal, sub copy, CTAs, trust strip.
 * Right: 3D-tilt portrait card with two floating credibility chips that drift.
 * Background: mouse-follow gradient blob + slow parallax on scroll.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const { scrollY } = useScroll();
  const parallaxBg = useTransform(scrollY, [0, 600], [0, -80]);
  const parallaxImg = useTransform(scrollY, [0, 600], [0, -40]);

  useEffect(() => {
    if (reduce) return;
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [reduce]);

  const headlineLine1 = ["Corporate", "wellness"];
  const headlineLine2 = ["that", "moves", "the", "needle."];

  const wordFade = (i: number) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      delay: 0.1 + i * 0.07,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden bg-background pt-10 md:pt-14"
    >
      {/* slow parallax warm radial */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduce ? 0 : parallaxBg }}
        className="pointer-events-none absolute inset-0 -z-10 bg-ink-radial"
      />

      {/* mouse-follow gradient blob */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 h-[520px] w-[520px] rounded-full bg-secondary/20 blur-3xl"
        animate={{
          left: `calc(${mouse.x * 100}% - 260px)`,
          top: `calc(${mouse.y * 100}% - 260px)`,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 22, mass: 0.6 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 -z-10 h-[460px] w-[460px] rounded-full bg-gold/15 blur-3xl"
        animate={reduce ? undefined : { y: [0, -14, 0], x: [0, -12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative">
        <div className="grid items-center gap-10 pb-16 md:grid-cols-[1.05fr,1fr] md:gap-14 md:pb-24 lg:gap-20">
          <div className="max-w-2xl">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70 backdrop-blur"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
              </span>
              40 years . Fortune 500 trusted . All 50 states
            </motion.div>

            <h1 className="mt-6 font-serif text-[2.6rem] font-semibold leading-[0.95] tracking-tight text-balance text-foreground sm:text-6xl md:text-[4.5rem] lg:text-[5rem]">
              <span className="block">
                {headlineLine1.map((w, i) => (
                  <motion.span
                    key={w}
                    className="mr-3 inline-block"
                    {...wordFade(i)}
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
              <span className="block">
                {headlineLine2.map((w, i) => {
                  const isAccent = w === "moves" || w === "needle.";
                  return (
                    <motion.span
                      key={w}
                      className={`mr-3 inline-block ${isAccent ? "" : ""}`}
                      {...wordFade(headlineLine1.length + i)}
                    >
                      {isAccent ? (
                        <span className="bg-gradient-to-tr from-primary via-secondary to-gold bg-clip-text text-transparent">
                          {w}
                        </span>
                      ) : (
                        w
                      )}
                    </motion.span>
                  );
                })}
              </span>
              <motion.svg
                aria-hidden="true"
                className="mt-1 block h-3 w-48 text-secondary/70 sm:w-64"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
              >
                <motion.path
                  d="M2 8 C 50 2, 150 14, 198 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>
            </h1>

            <motion.p
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
            >
              Picture Perfect Health, LLC delivers virtual contactless health fairs, on-site
              biometric screenings, and Dr. Eric Hal Feintuch's signature 12 Steps to Wellness
              program to Fortune 500 workforces in all 50 states. Quest Diagnostics, GE
              Healthcare, United Airlines, and many more.
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
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.15 }}
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

          {/* Right: 3D-tilt portrait card */}
          <motion.div
            className="relative"
            style={{ y: reduce ? 0 : parallaxImg }}
            initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-secondary/20 via-gold/15 to-transparent blur-3xl" />

            <TiltCard className="relative" max={6}>
              <motion.div
                className="relative overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <AssetImage
                  src="/hero-pph.jpg"
                  alt="Dr. Eric Hal Feintuch, D.C., Long Island chiropractor and Fortune 500 corporate employee wellness program founder of Picture Perfect Health"
                  priority
                  className="aspect-[4/5] object-cover sm:aspect-[5/6] md:aspect-[4/5]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />

                {/* Floating accreditation pill */}
                <motion.div
                  className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md"
                  style={{ transform: "translateZ(40px)" }}
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  D.C., CCSD . est. 1986
                </motion.div>
              </motion.div>
            </TiltCard>

            {/* Two floating credibility chips that drift gently */}
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
      {/* AnimatePresence placeholder to keep import used by tooling */}
      <AnimatePresence />
    </section>
  );
}
