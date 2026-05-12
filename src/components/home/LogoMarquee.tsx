import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated logo marquee. Two duplicated rows scroll infinitely; hover pauses.
 * Wordmarks are recreated as inline SVG so we don't bundle copyrighted artwork.
 * Names are factual references to past engagements.
 */

const logos: { name: string; svg: JSX.Element }[] = [
  {
    name: "Quest Diagnostics",
    svg: (
      <svg viewBox="0 0 220 40" className="h-7 w-auto">
        <text
          x="0"
          y="29"
          fontFamily="Inter, system-ui"
          fontWeight="700"
          fontSize="26"
          letterSpacing="0.5"
          fill="currentColor"
        >
          Quest
        </text>
        <text
          x="86"
          y="29"
          fontFamily="Inter, system-ui"
          fontWeight="400"
          fontSize="20"
          letterSpacing="2"
          fill="currentColor"
        >
          DIAGNOSTICS
        </text>
      </svg>
    ),
  },
  {
    name: "United Airlines",
    svg: (
      <svg viewBox="0 0 220 40" className="h-7 w-auto">
        <text
          x="0"
          y="28"
          fontFamily="Fraunces, Georgia, serif"
          fontWeight="600"
          fontSize="22"
          letterSpacing="3"
          fill="currentColor"
        >
          UNITED
        </text>
        <text
          x="105"
          y="28"
          fontFamily="Inter, system-ui"
          fontWeight="300"
          fontSize="14"
          letterSpacing="3"
          fill="currentColor"
        >
          AIRLINES
        </text>
      </svg>
    ),
  },
  {
    name: "GE Healthcare",
    svg: (
      <svg viewBox="0 0 220 40" className="h-7 w-auto">
        <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text
          x="11"
          y="27"
          fontFamily="Inter, system-ui"
          fontWeight="700"
          fontSize="16"
          fill="currentColor"
        >
          GE
        </text>
        <text
          x="48"
          y="27"
          fontFamily="Inter, system-ui"
          fontWeight="500"
          fontSize="18"
          letterSpacing="0.5"
          fill="currentColor"
        >
          Healthcare
        </text>
      </svg>
    ),
  },
  {
    name: "Continental",
    svg: (
      <svg viewBox="0 0 220 40" className="h-7 w-auto">
        <text
          x="0"
          y="28"
          fontFamily="Fraunces, Georgia, serif"
          fontWeight="500"
          fontStyle="italic"
          fontSize="22"
          fill="currentColor"
        >
          Continental
        </text>
      </svg>
    ),
  },
  {
    name: "Olympic Delegation",
    svg: (
      <svg viewBox="0 0 220 40" className="h-7 w-auto">
        <g fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="14" cy="20" r="8" />
          <circle cx="30" cy="20" r="8" />
          <circle cx="46" cy="20" r="8" />
          <circle cx="22" cy="28" r="8" />
          <circle cx="38" cy="28" r="8" />
        </g>
        <text
          x="62"
          y="26"
          fontFamily="Inter, system-ui"
          fontWeight="600"
          fontSize="14"
          letterSpacing="2"
          fill="currentColor"
        >
          KOREAN DELEGATION
        </text>
      </svg>
    ),
  },
  {
    name: "U.S. Senate",
    svg: (
      <svg viewBox="0 0 220 40" className="h-7 w-auto">
        <path
          d="M14 6 L26 6 L20 30 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <text
          x="38"
          y="20"
          fontFamily="Fraunces, Georgia, serif"
          fontWeight="600"
          fontSize="14"
          letterSpacing="2"
          fill="currentColor"
        >
          U.S. SENATE
        </text>
        <text
          x="38"
          y="34"
          fontFamily="Inter, system-ui"
          fontWeight="400"
          fontSize="11"
          letterSpacing="1.5"
          fill="currentColor"
        >
          VISITED 2022
        </text>
      </svg>
    ),
  },
  {
    name: "Fortune 500 Health System",
    svg: (
      <svg viewBox="0 0 220 40" className="h-7 w-auto">
        <path
          d="M14 12 H22 V20 H30 V28 H22 V36 H14 V28 H6 V20 H14 Z"
          fill="currentColor"
          opacity="0.85"
        />
        <text
          x="40"
          y="20"
          fontFamily="Inter, system-ui"
          fontWeight="700"
          fontSize="13"
          letterSpacing="2"
          fill="currentColor"
        >
          FORTUNE 500
        </text>
        <text
          x="40"
          y="33"
          fontFamily="Inter, system-ui"
          fontWeight="400"
          fontSize="11"
          letterSpacing="1.5"
          fill="currentColor"
        >
          HEALTH SYSTEM
        </text>
      </svg>
    ),
  },
  {
    name: "Federal Agency",
    svg: (
      <svg viewBox="0 0 220 40" className="h-7 w-auto">
        <g fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M6 32 H42 M6 12 L24 6 L42 12 M10 12 V32 M16 12 V32 M22 12 V32 M28 12 V32 M34 12 V32 M38 12 V32" />
        </g>
        <text
          x="54"
          y="20"
          fontFamily="Fraunces, Georgia, serif"
          fontWeight="600"
          fontSize="14"
          letterSpacing="2"
          fill="currentColor"
        >
          FEDERAL AGENCY
        </text>
        <text
          x="54"
          y="33"
          fontFamily="Inter, system-ui"
          fontWeight="400"
          fontSize="11"
          letterSpacing="1.5"
          fill="currentColor"
        >
          WELLNESS PROGRAM
        </text>
      </svg>
    ),
  },
];

export function LogoMarquee() {
  const reduce = useReducedMotion();
  const row = [...logos, ...logos];

  return (
    <section className="relative border-y border-foreground/10 bg-muted/30 py-12">
      <div className="container">
        <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          Past engagements span Fortune 500, government, and Olympic athletes
        </p>
      </div>

      <div className="group relative">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex items-center gap-16 whitespace-nowrap text-foreground/70"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
          }}
        >
          {row.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex shrink-0 items-center transition-colors hover:text-foreground"
              title={logo.name}
              role="img"
              aria-label={`${logo.name} wordmark, past engagement of Picture Perfect Health`}
            >
              {logo.svg}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
