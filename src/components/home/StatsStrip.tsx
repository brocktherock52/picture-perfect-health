import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/**
 * Editorial stats strip. Each stat is a massive Fraunces number that animates
 * from 0 to target as the section enters the viewport, with a thin animated
 * underline. Mouse-follow blob over a subtle teal gradient.
 *
 * Numbers preserved verbatim:
 *  - 40 years in practice (1986 - 2026)
 *  - 50 states served
 *  - 250,000+ employees supported
 *  - 1,600+ at our largest single-day event (Quest)
 */

interface Stat {
  num: number;
  display: string;       // formatted output (we render this once in view)
  suffix?: string;
  eyebrow: string;
  label: string;
  caption: string;
}

const stats: Stat[] = [
  {
    num: 40,
    display: "40",
    suffix: "",
    eyebrow: "Year I to Year XL",
    label: "Years in practice",
    caption: "1986 - 2026, every habit refined.",
  },
  {
    num: 50,
    display: "50",
    suffix: "",
    eyebrow: "Sea to shining sea",
    label: "States served",
    caption: "Coast-to-coast virtual + on-site delivery.",
  },
  {
    num: 250000,
    display: "250,000",
    suffix: "+",
    eyebrow: "Employees, not employees",
    label: "People supported",
    caption: "Quarter-million workforce reach to date.",
  },
  {
    num: 1600,
    display: "1,600",
    suffix: "+",
    eyebrow: "One day, one site",
    label: "Largest single event",
    caption: "Quest Diagnostics biometric screening.",
  },
];

export function StatsStrip() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [reduce]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-background via-accent/30 to-background py-24 sm:py-32"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 h-[520px] w-[520px] rounded-full bg-secondary/20 blur-3xl"
        animate={{
          left: `calc(${mouse.x * 100}% - 260px)`,
          top: `calc(${mouse.y * 100}% - 260px)`,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 22, mass: 0.6 }}
      />

      <div className="container">
        <div className="mb-16 grid items-end gap-6 md:grid-cols-[auto,1fr,auto]">
          <p className="eyebrow text-foreground/55">By the numbers</p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance display-loose">
            Forty years. Fifty states. A quarter million people.
          </h2>
          <p className="hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground/55 md:block">
            Updated {new Date().getFullYear()}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <li key={s.label} className="relative">
              <p className="eyebrow text-secondary">{s.eyebrow}</p>
              <div className="mt-3 flex items-baseline gap-1">
                <CountUp
                  inView={inView}
                  value={s.num}
                  display={s.display}
                  reduce={!!reduce}
                  delay={i * 0.15}
                />
                {s.suffix ? (
                  <span className="font-serif text-5xl font-semibold text-foreground sm:text-6xl">
                    {s.suffix}
                  </span>
                ) : null}
              </div>

              <motion.div
                className="mt-5 h-px origin-left bg-gradient-to-r from-secondary via-gold to-transparent"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />

              <p className="mt-4 font-serif text-lg font-semibold tracking-tight text-foreground">
                {s.label}
              </p>
              <p className="mt-1 max-w-[18ch] text-sm leading-snug text-muted-foreground">
                {s.caption}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CountUp({
  inView,
  value,
  display,
  reduce,
  delay,
}: {
  inView: boolean;
  value: number;
  display: string;
  reduce: boolean;
  delay: number;
}) {
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(value);
      return;
    }
    let raf = 0;
    let start = 0;
    const dur = 1500;
    const startAt = performance.now() + delay * 1000;
    const step = (t: number) => {
      if (t < startAt) {
        raf = requestAnimationFrame(step);
        return;
      }
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce, delay]);

  const formatted = value >= 1000 ? n.toLocaleString("en-US") : String(n);
  // When fully animated, swap to the exact "display" string to keep formatting intact
  const final = n === value ? display : formatted;
  return (
    <span
      className="watermark-num block font-serif text-7xl font-semibold tabular-nums text-foreground sm:text-8xl md:text-[7.5rem] lg:text-[8rem]"
      style={{ letterSpacing: "-0.04em" }}
    >
      {final}
    </span>
  );
}
