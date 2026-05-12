import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
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
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Full-bleed editorial 12 Steps. Each step is its own asymmetric magazine
 * spread with a giant watermark number, the step title (Fraunces), a body
 * paragraph, a small hand-drawn line illustration, and a metric pill.
 *
 * A thin progress rail on the left edge tracks the reader through all 12.
 */

interface Step {
  n: number;
  title: string;
  body: string;
  icon: LucideIcon;
  metric: string;
}

const steps: Step[] = [
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const railFill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative bg-background">
      {/* Intro spread */}
      <div className="container relative py-24 sm:py-32">
        <div className="grid items-end gap-10 md:grid-cols-[1.1fr,1fr]">
          <div>
            <p className="eyebrow text-secondary">The Signature Program</p>
            <h2
              className="mt-4 font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl text-balance display-tight"
              style={{ letterSpacing: "-0.035em" }}
            >
              Twelve concrete habits, refined over four decades.
            </h2>
          </div>
          <div>
            <p className="font-serif text-lg leading-relaxed text-foreground/75 sm:text-xl">
              Dr. Feintuch&apos;s proprietary methodology, delivered to a
              quarter-million employees. Scroll for the entire workshop, one
              spread at a time. Each step is a habit, not a goal.
            </p>
            <div className="mt-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/55">
              <span className="h-px w-10 bg-foreground/30" />
              Walk the spread
            </div>
          </div>
        </div>
      </div>

      {/* Progress rail */}
      <div className="pointer-events-none absolute left-4 top-[20vh] z-10 hidden h-[calc(100%-30vh)] w-px bg-foreground/10 md:block">
        <motion.div
          className="absolute left-0 top-0 w-px bg-gradient-to-b from-secondary to-gold"
          style={{ height: railFill }}
        />
        <div className="sticky top-1/2 -translate-y-1/2 pl-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground/55 [writing-mode:vertical-rl] [text-orientation:mixed]">
          12 Steps to Wellness
        </div>
      </div>

      {/* Spreads */}
      <div className="space-y-0">
        {steps.map((s, i) => (
          <Spread key={s.n} step={s} index={i} />
        ))}
      </div>

      <div className="container pb-24 pt-12 text-center">
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

function Spread({ step, index }: { step: Step; index: number }) {
  const reduce = useReducedMotion();
  const onRight = index % 2 === 1;
  const Icon = step.icon;
  const num = String(step.n).padStart(2, "0");

  return (
    <article
      className={`relative border-t border-foreground/10 py-20 sm:py-24 ${
        index === 0 ? "border-t-0" : ""
      }`}
      style={{
        background:
          index % 2 === 0
            ? "linear-gradient(180deg, hsl(38 38% 96%), hsl(38 28% 93%))"
            : "linear-gradient(180deg, hsl(38 28% 93%), hsl(38 38% 96%))",
      }}
    >
      <div className="container">
        <div
          className={`grid items-center gap-10 md:grid-cols-2 md:gap-14 ${
            onRight ? "md:[direction:rtl]" : ""
          }`}
        >
          {/* watermark + small illustration */}
          <motion.div
            className="relative md:[direction:ltr]"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="watermark-num pointer-events-none block select-none text-[14rem] leading-none text-foreground/10 sm:text-[18rem] md:text-[22rem]"
              aria-hidden="true"
            >
              {num}
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <StepIllustration index={index} className="h-44 w-44 text-secondary sm:h-56 sm:w-56" />
            </div>
          </motion.div>

          <motion.div
            className="md:[direction:ltr]"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow text-secondary flex items-center gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Step {num} of 12
            </p>
            <h3
              className="mt-5 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance display-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              {step.title}
            </h3>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-foreground/80 sm:text-xl">
              {step.body}
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              {step.metric}
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
}

/* Tiny hand-drawn line illustrations, one per step, kept abstract. */
function StepIllustration({
  index,
  className = "",
}: {
  index: number;
  className?: string;
}) {
  const variants = [
    // 1 water drop
    <path key="1" d="M50 14 C 30 38, 18 60, 28 78 C 38 96, 64 96, 72 78 C 82 60, 70 38, 50 14 Z" />,
    // 2 pulse
    <path key="2" d="M6 60 H 28 L 36 32 L 50 84 L 60 50 L 70 64 H 96" />,
    // 3 apple
    <path key="3" d="M30 38 C 30 22, 50 18, 50 30 C 50 18, 70 22, 70 38 C 78 60, 60 86, 50 84 C 40 86, 22 60, 30 38 Z M 50 22 V 12" />,
    // 4 crescent
    <path key="4" d="M70 30 a 30 30 0 1 0 0 44 a 22 22 0 1 1 0 -44 Z" />,
    // 5 breath ribbon
    <path key="5" d="M6 50 C 26 30, 46 70, 66 50 C 86 30, 100 60, 100 50" />,
    // 6 heart
    <path key="6" d="M50 80 C 22 60, 14 38, 30 28 C 42 22, 50 36, 50 36 C 50 36, 58 22, 70 28 C 86 38, 78 60, 50 80 Z" />,
    // 7 brain swirl
    <path key="7" d="M40 24 c -16 0, -22 18, -10 26 c -10 12, 6 26, 18 18 c 4 8, 18 6, 18 -6 c 12 -4, 8 -22, -4 -22 c 0 -12, -16 -16, -22 -16 z" />,
    // 8 sun
    <g key="8">
      <circle cx="50" cy="50" r="16" />
      {Array.from({ length: 8 }).map((_, k) => {
        const a = (k * Math.PI) / 4;
        return (
          <path
            key={k}
            d={`M${50 + Math.cos(a) * 28} ${50 + Math.sin(a) * 28} L ${50 + Math.cos(a) * 40} ${50 + Math.sin(a) * 40}`}
          />
        );
      })}
    </g>,
    // 9 leaf
    <path key="9" d="M14 80 C 14 30, 60 14, 90 16 C 88 50, 64 86, 14 80 Z M 24 70 L 76 22" />,
    // 10 connected
    <g key="10">
      <circle cx="26" cy="50" r="10" />
      <circle cx="50" cy="30" r="10" />
      <circle cx="74" cy="50" r="10" />
      <circle cx="50" cy="78" r="10" />
      <path d="M30 46 L 46 34 M 54 34 L 70 46 M 70 54 L 54 74 M 46 74 L 30 54" />
    </g>,
    // 11 smile
    <g key="11">
      <circle cx="50" cy="50" r="34" />
      <circle cx="40" cy="44" r="2.6" fill="currentColor" />
      <circle cx="60" cy="44" r="2.6" fill="currentColor" />
      <path d="M36 58 C 42 70, 58 70, 64 58" />
    </g>,
    // 12 target
    <g key="12">
      <circle cx="50" cy="50" r="32" />
      <circle cx="50" cy="50" r="22" />
      <circle cx="50" cy="50" r="12" />
      <path d="M50 14 V 86 M 14 50 H 86" />
    </g>,
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {variants[index % variants.length]}
    </svg>
  );
}
