import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/**
 * Full-bleed magazine-style newsletter CTA. Sits above the footer. Animated
 * success state on submit. No backend wiring required here, that lives at
 * the contact form. This is the lead-magnet promotion surface.
 */
export function SubscribeQuarterly() {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    window.setTimeout(() => {
      setSent(false);
      setEmail("");
    }, 3400);
  };

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* paper backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, hsl(38 38% 96%) 0%, hsl(38 28% 90%) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(215 35% 12%) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="container relative">
        <div className="grid items-end gap-12 md:grid-cols-[1.2fr,1fr]">
          <div>
            <p className="eyebrow text-secondary">Subscribe</p>
            <h2
              className="mt-4 font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl text-balance display-tight"
              style={{ letterSpacing: "-0.04em" }}
            >
              The Wellness Quarterly.
            </h2>
            <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-foreground/75 sm:text-xl">
              One short note a month, by Dr. Feintuch and the team. Field-tested
              ideas on workforce health, the 12 Steps in practice, and the
              programs running behind the curtain at Fortune 500 clients.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
              No spam, ever . Unsubscribe in one click
            </p>
          </div>

          <form onSubmit={onSubmit} className="relative">
            <div className="rounded-3xl border border-foreground/15 bg-card p-7 shadow-soft sm:p-9">
              <p className="eyebrow text-foreground/55">Volume XL . Issue 06</p>
              <p
                className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                Get the next dispatch.
              </p>

              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.div
                    key="ok"
                    initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 flex items-center gap-3 rounded-2xl border border-secondary/30 bg-secondary/10 px-5 py-4 text-sm font-semibold text-secondary"
                  >
                    <motion.span
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-secondary-foreground"
                      initial={reduce ? { scale: 1 } : { scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 280, damping: 18 }}
                    >
                      <Check className="h-4 w-4" />
                    </motion.span>
                    You are on the list. The next dispatch lands soon.
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={reduce ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-6 flex flex-col gap-2 sm:flex-row"
                  >
                    <Input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      aria-label="Work email"
                      className="h-12 rounded-full bg-background px-5"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="h-12 rounded-full px-6 shadow-soft"
                    >
                      Subscribe
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
