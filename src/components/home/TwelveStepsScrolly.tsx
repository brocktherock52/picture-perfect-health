import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  Apple,
  Droplets,
  Moon,
  Activity,
  HeartPulse,
  Brain,
  Smile,
  Users,
  Sun,
  Wind,
  Leaf,
  ClipboardCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * Apple-product-page style scroll-pinned section. The right column pins while
 * the user scrolls; the active step + copy fade through twelve panels. The
 * left side keeps a sticky progress rail with numbered ticks.
 *
 * Each step is a real, science-backed habit Dr. Feintuch teaches in the
 * 12 Steps to Wellness Workshop.
 */

const steps = [
  {
    n: 1,
    title: "Drink the water you actually need.",
    body:
      "Most professionals run 1.5L below baseline by 3pm. We anchor hydration to fixed daily triggers so it stops being a decision.",
    icon: Droplets,
    metric: "+27% afternoon focus self-report",
  },
  {
    n: 2,
    title: "Move every 50 minutes.",
    body:
      "Forty seconds of micro-movement, eight times a day, beats the gym trip you didn't take. The cardiovascular data is unambiguous.",
    icon: Activity,
    metric: "8 micro-breaks per workday",
  },
  {
    n: 3,
    title: "Eat protein first.",
    body:
      "Reordering the plate stabilizes glucose, kills 3pm crashes, and removes the willpower tax from every meal.",
    icon: Apple,
    metric: "Glucose variability cut ~30%",
  },
  {
    n: 4,
    title: "Sleep on a window, not a wish.",
    body:
      "A 30-minute consistent bedtime window outperforms 8 hours of irregular sleep. We pick the window with the employee, not for them.",
    icon: Moon,
    metric: "+1.2 hr quality sleep / week",
  },
  {
    n: 5,
    title: "Breathe before you react.",
    body:
      "A 4-7-8 breath before email, before the meeting, before the hard conversation. Vagal tone is trainable.",
    icon: Wind,
    metric: "Stress reactivity down measurably",
  },
  {
    n: 6,
    title: "Get the screening done.",
    body:
      "Blood pressure, cholesterol, glucose, BMI. We bring the screening to the desk so the excuse disappears.",
    icon: HeartPulse,
    metric: "94% participation rate",
  },
  {
    n: 7,
    title: "Train the mind on purpose.",
    body:
      "Ten minutes of structured attention work. We pick a method that fits the personality, not the fad cycle.",
    icon: Brain,
    metric: "Cognitive load relief in 4 weeks",
  },
  {
    n: 8,
    title: "Get outside, every day.",
    body:
      "Sunlight before 10am sets the entire circadian system. The cheapest, most ignored health intervention there is.",
    icon: Sun,
    metric: "Mood lift verified at 30 days",
  },
  {
    n: 9,
    title: "Eat more plants than you think.",
    body:
      "Color count beats calorie count. We coach the plate, not the spreadsheet.",
    icon: Leaf,
    metric: "Fiber intake up 1.6x",
  },
  {
    n: 10,
    title: "Stay socially connected.",
    body:
      "Lonely employees burn out 2.3x faster. Wellness without belonging is a leak the company pays for.",
    icon: Users,
    metric: "Belonging score lifted 18%",
  },
  {
    n: 11,
    title: "Laugh on purpose.",
    body:
      "Cortisol drops measurably after sustained laughter. We build it in to programming because it works.",
    icon: Smile,
    metric: "Cortisol dip lasts ~24 hours",
  },
  {
    n: 12,
    title: "Track the right one number.",
    body:
      "Not steps. Not calories. We pick the single metric that matches the employee's goal and remove the rest.",
    icon: ClipboardCheck,
    metric: "90-day retention 4x baseline",
  },
];

export function TwelveStepsScrolly() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const railFill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative bg-gradient-to-b from-background via-muted/40 to-background">
      <div className="container py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4">
            The Signature Program
          </Badge>
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            The 12 Steps to Wellness Workshop
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Dr. Feintuch's proprietary methodology, refined over four decades and
            delivered to a quarter-million employees. Twelve concrete habits that
            compound into lasting change. Scroll to walk through each.
          </p>
        </div>
      </div>

      {/* Pinned scrolly. height = 12 panels x viewport so each step gets equal scroll. */}
      <div ref={ref} className="relative" style={{ height: `${steps.length * 70}vh` }}>
        <div className="sticky top-0 flex h-screen items-center">
          <div className="container">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr,1.2fr]">
              {/* Left: progress rail + step list */}
              <div className="relative hidden lg:block">
                <div className="absolute left-3 top-0 h-full w-px bg-foreground/10" />
                <motion.div
                  aria-hidden="true"
                  className="absolute left-3 top-0 w-px bg-gradient-to-b from-secondary to-gold"
                  style={{ height: reduce ? "100%" : railFill }}
                />
                <ul className="space-y-3 pl-9">
                  {steps.map((s, i) => {
                    const start = i / steps.length;
                    const end = (i + 1) / steps.length;
                    return (
                      <ScrollyStepLabel
                        key={s.n}
                        scrollYProgress={scrollYProgress}
                        start={start}
                        end={end}
                        n={s.n}
                        title={s.title}
                      />
                    );
                  })}
                </ul>
              </div>

              {/* Right: active step panel */}
              <div className="relative h-[460px]">
                <AnimatePresence mode="wait">
                  <ActiveStep scrollYProgress={scrollYProgress} />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-24 text-center">
        <Button asChild size="lg" className="rounded-full px-8 shadow-soft">
          <Link to="/services/12-steps-to-wellness">
            Explore the full workshop
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

/* -------------------------------- helpers -------------------------------- */

import type { MotionValue } from "framer-motion";

function ScrollyStepLabel({
  scrollYProgress,
  start,
  end,
  n,
  title,
}: {
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
  n: number;
  title: string;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(start - 0.05, 0), start, end, Math.min(end + 0.05, 1)],
    [0.35, 1, 1, 0.35]
  );
  const scale = useTransform(scrollYProgress, [start, (start + end) / 2, end], [0.97, 1.02, 0.97]);
  return (
    <motion.li
      className="relative flex items-baseline gap-3 text-sm"
      style={{ opacity, scale, transformOrigin: "left center" }}
    >
      <span className="absolute -left-9 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-foreground/15 bg-background text-[10px] font-semibold text-foreground/70">
        {String(n).padStart(2, "0")}
      </span>
      <span className="font-serif text-base text-foreground">{title}</span>
    </motion.li>
  );
}

function ActiveStep({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // We render all twelve panels stacked and fade them based on scroll bucket.
  return (
    <>
      {steps.map((s, i) => (
        <Panel
          key={s.n}
          step={s}
          index={i}
          total={steps.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </>
  );
}

function Panel({
  step,
  index,
  total,
  scrollYProgress,
}: {
  step: (typeof steps)[number];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(start - 0.04, 0), start, end, Math.min(end + 0.04, 1)],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [Math.max(start - 0.04, 0), start, end, Math.min(end + 0.04, 1)],
    [24, 0, 0, -24]
  );
  const Icon = step.icon;

  return (
    <motion.article
      style={{ opacity, y }}
      className="absolute inset-0 rounded-2xl border border-foreground/10 bg-card p-8 shadow-soft sm:p-10"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Step {String(step.n).padStart(2, "0")} of 12
        </span>
      </div>
      <h3 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
        {step.title}
      </h3>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{step.body}</p>
      <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
        <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
        {step.metric}
      </div>
    </motion.article>
  );
}
