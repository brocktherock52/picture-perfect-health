import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";

/**
 * Full-bleed editorial timeline of Dr. Feintuch's arc. Each beat is its own
 * generous spread with a B&W ink illustration, year tag, and 2-sentence
 * narrative. A scroll-driven year ticker at the bottom animates from 1972
 * (early childhood) to 2026 (present) as the reader walks the timeline.
 */

interface Beat {
  year: string;
  startYear: number;
  title: string;
  body: string;
  illo: "ring" | "mom" | "binghamton" | "diploma" | "shingle" | "quest" | "olympics" | "senator";
}

const beats: Beat[] = [
  {
    year: "Early 1980s",
    startYear: 1980,
    title: "The ring.",
    body:
      "Long before the clinic, the gym. Fast hands, real discipline, and enough talent that Arthur Mercante Jr. took notice from the corner.",
    illo: "ring",
  },
  {
    year: "The pivot",
    startYear: 1982,
    title: "Mom's three sentences.",
    body:
      "\"You have a gift in those hands. You can use them to break people or to fix them. Pick.\" He picked.",
    illo: "mom",
  },
  {
    year: "Undergrad",
    startYear: 1984,
    title: "Binghamton, BA.",
    body:
      "Four years that taught him how to read a body the way he had learned to read an opponent. Anatomy as adversary.",
    illo: "binghamton",
  },
  {
    year: "1986",
    startYear: 1986,
    title: "NY Chiropractic College, honors.",
    body:
      "Graduated with honors. Started practicing chiropractic the same way he had trained in the ring: methodical, repetitive, exact.",
    illo: "diploma",
  },
  {
    year: "2006",
    startYear: 2006,
    title: "Picture Perfect Health, LLC.",
    body:
      "Founded the practice that would become a corporate wellness firm trusted by Fortune 500 workforces and one Olympic delegation.",
    illo: "shingle",
  },
  {
    year: "2010s",
    startYear: 2012,
    title: "Quest, United, GE.",
    body:
      "Single-day events at Quest with 1,600+ employees screened. Multi-year virtual programs for United Airlines. GE Healthcare population studies.",
    illo: "quest",
  },
  {
    year: "2018",
    startYear: 2018,
    title: "The Korean delegation.",
    body:
      "Korea's Olympic team came through. He treated them the way he treats every patient. The way a corner treats a fighter.",
    illo: "olympics",
  },
  {
    year: "2022",
    startYear: 2022,
    title: "The Senate visit.",
    body:
      "A sitting U.S. Senator visited the office to learn the model. Forty years in, the practice was still drawing rooms full of people who wanted to see how it was done.",
    illo: "senator",
  },
];

export function BoxingTimeline() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 30%", "end 70%"],
  });

  const minY = 1972;
  const maxY = 2026;
  const tickerYear = useTransform(scrollYProgress, [0, 1], [minY, maxY]);
  const [yearText, setYearText] = useState(`${minY}`);
  useMotionValueEvent(tickerYear, "change", (v) => {
    setYearText(String(Math.round(v)));
  });

  const ringHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      data-cursor-invert
      className="relative overflow-hidden bg-ink py-24 text-ink-foreground sm:py-32"
    >
      {/* Crosshatch background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(circle_at_center,white,transparent_75%)]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path fill='none' stroke='%23ffffff' stroke-width='0.3' d='M0 20h40M20 0v40'/></svg>\")",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative">
        <div className="grid items-end gap-10 md:grid-cols-[1fr,1fr]">
          <div>
            <p className="eyebrow text-secondary">The Origin</p>
            <h2
              className="mt-4 font-serif text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl text-balance display-tight"
              style={{ letterSpacing: "-0.035em" }}
            >
              From the ring to the corner of forty thousand teams.
            </h2>
          </div>
          <p className="font-serif text-lg leading-relaxed text-ink-foreground/70 sm:text-xl">
            The discipline that built Dr. Feintuch&apos;s hands never left him.
            It is still in every appointment, every screening, every workshop,
            every event.
          </p>
        </div>
      </div>

      {/* Beats */}
      <div className="relative mt-20">
        {/* center rail */}
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-secondary to-gold md:block"
          style={{ height: reduce ? "100%" : ringHeight }}
        />

        <ul className="relative space-y-24 sm:space-y-32">
          {beats.map((b, i) => (
            <BeatRow key={b.title} beat={b} index={i} />
          ))}
        </ul>
      </div>

      {/* Year ticker pinned to viewport */}
      <div className="pointer-events-none sticky bottom-4 z-20 mt-20">
        <div className="container">
          <div className="flex items-end justify-between rounded-2xl border border-white/15 bg-ink/80 px-6 py-4 backdrop-blur">
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-ink-foreground/55">
              The Year
            </span>
            <span
              className="font-serif text-5xl font-semibold tabular-nums sm:text-6xl"
              style={{ letterSpacing: "-0.04em" }}
            >
              {yearText}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-ink-foreground/55">
              {minY} - {maxY}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeatRow({ beat, index }: { beat: Beat; index: number }) {
  const reduce = useReducedMotion();
  const onRight = index % 2 === 1;

  return (
    <li className="relative">
      {/* center node */}
      <span className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary bg-ink md:block" />
      <div
        className={`container grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
          onRight ? "md:[direction:rtl]" : ""
        }`}
      >
        <motion.div
          className="md:[direction:ltr]"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <BeatIllustration kind={beat.illo} />
        </motion.div>

        <motion.div
          className="md:[direction:ltr]"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="font-serif text-7xl font-semibold tabular-nums text-secondary sm:text-8xl display-tight"
            style={{ letterSpacing: "-0.04em" }}
          >
            {beat.year}
          </p>
          <h3
            className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-balance"
            style={{ letterSpacing: "-0.025em" }}
          >
            {beat.title}
          </h3>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-foreground/80 sm:text-xl">
            {beat.body}
          </p>
        </motion.div>
      </div>
    </li>
  );
}

/* B&W ink illustrations per beat. Single-stroke, editorial. */
function BeatIllustration({ kind }: { kind: Beat["illo"] }) {
  const base =
    "h-64 w-full max-w-sm text-ink-foreground/85 sm:h-72 md:h-80";
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const renderIllo = () => {
    switch (kind) {
      case "ring":
        return (
          <g {...stroke}>
            <rect x="20" y="40" width="160" height="100" />
            <path d="M30 50 L 170 130 M 170 50 L 30 130" />
            <path d="M40 40 V 26 M 60 40 V 26 M 80 40 V 26 M 100 40 V 26 M 120 40 V 26 M 140 40 V 26 M 160 40 V 26" />
            <circle cx="100" cy="90" r="12" />
            <path d="M88 96 L 78 110 M 112 96 L 122 110" />
          </g>
        );
      case "mom":
        return (
          <g {...stroke}>
            <path d="M70 56 c -8 -20, 22 -34, 40 -24 c 16 8, 18 30, 4 40 c 6 18, 0 30, -16 32 c -18 4, -36 -6, -36 -22 c -10 -4, -10 -20, 8 -26 z" />
            <path d="M80 80 q 14 8, 28 0" />
            <circle cx="84" cy="68" r="2" fill="currentColor" />
            <circle cx="104" cy="68" r="2" fill="currentColor" />
            <path d="M120 110 q 30 -10, 50 14" />
          </g>
        );
      case "binghamton":
        return (
          <g {...stroke}>
            <path d="M40 110 L 100 70 L 160 110 Z" />
            <rect x="60" y="110" width="80" height="40" />
            <path d="M70 110 V 150 M 90 110 V 150 M 110 110 V 150 M 130 110 V 150" />
            <path d="M88 60 V 50 H 112 V 60" />
          </g>
        );
      case "diploma":
        return (
          <g {...stroke}>
            <rect x="40" y="50" width="120" height="90" rx="4" />
            <path d="M55 70 H 145 M 55 84 H 145 M 55 98 H 130" />
            <circle cx="100" cy="130" r="10" />
            <path d="M94 138 L 88 158 L 100 152 L 112 158 L 106 138" />
          </g>
        );
      case "shingle":
        return (
          <g {...stroke}>
            <path d="M40 50 H 160 V 80 H 40 Z" />
            <path d="M50 64 H 150" />
            <path d="M70 80 V 150 M 130 80 V 150" />
            <path d="M70 100 H 130 M 70 120 H 130" />
            <path d="M90 50 V 30 L 110 30 V 50" />
          </g>
        );
      case "quest":
        return (
          <g {...stroke}>
            <rect x="30" y="40" width="140" height="100" />
            <path d="M30 70 H 170 M 70 40 V 140 M 110 40 V 140 M 150 40 V 140" />
            <circle cx="50" cy="56" r="3" fill="currentColor" />
            <circle cx="90" cy="56" r="3" fill="currentColor" />
            <circle cx="130" cy="56" r="3" fill="currentColor" />
          </g>
        );
      case "olympics":
        return (
          <g {...stroke}>
            <circle cx="50" cy="90" r="20" />
            <circle cx="90" cy="90" r="20" />
            <circle cx="130" cy="90" r="20" />
            <circle cx="70" cy="120" r="20" />
            <circle cx="110" cy="120" r="20" />
          </g>
        );
      case "senator":
        return (
          <g {...stroke}>
            <path d="M40 140 H 160" />
            <path d="M50 140 V 80 M 70 140 V 80 M 90 140 V 80 M 110 140 V 80 M 130 140 V 80 M 150 140 V 80" />
            <path d="M40 80 H 160 L 100 50 Z" />
            <path d="M70 30 L 100 50 L 130 30" />
          </g>
        );
    }
  };

  return (
    <svg viewBox="0 0 200 180" className={base} aria-hidden="true">
      <rect x="0" y="0" width="200" height="180" fill="none" stroke="currentColor" strokeOpacity="0.18" />
      {renderIllo()}
    </svg>
  );
}
