import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneCTAButton } from "@/components/shared/PhoneCTAButton";
import { UnsplashImage } from "@/components/shared/UnsplashImage";

export function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = {
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/40 via-background to-background pt-12 md:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60%_50%_at_50%_0%,hsl(var(--accent)/0.6),transparent)]"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-secondary/15 blur-3xl"
        animate={reduce ? undefined : { y: [0, 14, 0], x: [0, 16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 -z-10 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl"
        animate={reduce ? undefined : { y: [0, -14, 0], x: [0, -12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container">
        <div className="grid items-center gap-12 pb-16 md:grid-cols-2 md:pb-24">
          <div className="max-w-xl">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary"
              {...fadeUp}
              transition={{ duration: 0.5 }}
            >
              <Star className="h-3 w-3" />
              40 years · Fortune 500 trusted
            </motion.span>

            <motion.h1
              className="mt-5 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance"
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              Corporate wellness that{" "}
              <span className="text-secondary">moves the needle.</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg leading-relaxed text-muted-foreground"
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Picture Perfect Health, LLC delivers virtual contactless health fairs, on-site
              biometric screenings, and Dr. Eric Feintuch's signature 12 Steps to Wellness program
              to Fortune 500 workforces in all 50 states.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Button asChild size="lg" className="shadow-soft">
                <Link to="/contact">
                  Book a Free Virtual Health Fair
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <PhoneCTAButton size="lg" />
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <ShieldCheck className="h-5 w-5 text-secondary" />
              <span>HIPAA-aware · Free for qualifying corporate clients</span>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-secondary/20 via-accent to-primary/10 blur-2xl" />
            <motion.div
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <UnsplashImage
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80"
                alt="Healthcare professional smiling while consulting with a patient"
                priority
                className="aspect-[4/5] object-cover md:aspect-[5/6]"
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 hidden rounded-xl border border-border bg-card p-3 shadow-soft sm:flex sm:items-center sm:gap-3"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                <Star className="h-5 w-5 fill-current" />
              </div>
              <div className="text-xs leading-tight">
                <p className="font-semibold text-foreground">250,000+ employees</p>
                <p className="text-muted-foreground">across all 50 states</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
