import { motion, useReducedMotion } from "framer-motion";

/**
 * Editorial line-art founder portrait used in the hero card. Intentionally
 * non-photographic so we never ship a stock face. Reads as a New Yorker
 * spot illustration: a single-weight ink contour of a clinician at a desk.
 *
 * The hero card frames this on a warm cream background with magazine
 * typography on top, giving "founder cover" feel without a real photo.
 */
export function FounderPortrait({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 480 600"
      role="img"
      aria-label="Editorial illustration: Dr. Eric Hal Feintuch, D.C., founder of Picture Perfect Health"
      className={className}
    >
      <defs>
        <radialGradient id="paper" cx="50%" cy="40%" r="80%">
          <stop offset="0" stopColor="hsl(38 60% 95%)" />
          <stop offset="1" stopColor="hsl(38 38% 88%)" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="480" height="600" fill="url(#paper)" />

      {/* halftone speckle */}
      <g opacity="0.18" fill="hsl(215 35% 12%)">
        {Array.from({ length: 60 }).map((_, i) => {
          const x = (i * 73) % 480;
          const y = (i * 137) % 600;
          return <circle key={i} cx={x} cy={y} r={1.3} />;
        })}
      </g>

      {/* outer mat */}
      <rect
        x="32"
        y="32"
        width="416"
        height="536"
        fill="none"
        stroke="hsl(215 35% 12% / 0.18)"
        strokeWidth="1"
      />

      {/* ink portrait */}
      <motion.g
        fill="none"
        stroke="hsl(215 40% 10%)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* head */}
        <motion.path
          d="M180 168 c -10 -52, 50 -88, 100 -82 c 56 6, 86 60, 78 116 c -4 30, -22 56, -50 70 c 10 16, 16 32, 18 50"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {/* hair line */}
        <motion.path
          d="M186 158 c 22 -28, 70 -42, 116 -32 c 28 6, 50 22, 58 44"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
        />
        {/* glasses */}
        <motion.path
          d="M198 192 c 0 -10, 12 -16, 24 -16 s 24 6, 24 16 c 0 12, -12 18, -24 18 s -24 -6, -24 -18 z M258 192 c 0 -10, 12 -16, 24 -16 s 24 6, 24 16 c 0 12, -12 18, -24 18 s -24 -6, -24 -18 z M246 192 h 12"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
        />
        {/* nose + mouth */}
        <path d="M250 214 c 6 14, 0 22, -8 26" />
        <path d="M232 244 c 14 8, 30 8, 44 0" />
        {/* collar + coat */}
        <motion.path
          d="M150 296 c 28 -14, 64 -22, 96 -22 c 32 0, 70 8, 100 22 c 20 10, 36 26, 42 48 v 220 H 110 v -220 c 4 -22, 20 -38, 40 -48 z"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 0.4, ease: "easeInOut" }}
        />
        {/* lapel */}
        <path d="M210 296 l 36 56 l 38 -56" />
        {/* shirt v */}
        <path d="M232 304 l 14 22 l 14 -22" />
        {/* stethoscope arc */}
        <path d="M214 322 c -10 36, -28 52, -52 60" />
        <path d="M278 322 c 10 36, 28 52, 52 60" />
        <circle cx="160" cy="392" r="10" />
        <circle cx="332" cy="392" r="10" />
      </motion.g>

      {/* annotation marks */}
      <g
        fontFamily="Fraunces, Georgia, serif"
        fontSize="11"
        fill="hsl(215 35% 12% / 0.55)"
        letterSpacing="2.4"
      >
        <text x="60" y="64" textAnchor="start">PORTRAIT</text>
        <text x="420" y="64" textAnchor="end">N° I</text>
      </g>
      <g
        fontFamily="Fraunces, Georgia, serif"
        fontStyle="italic"
        fontSize="13"
        fill="hsl(215 35% 12% / 0.75)"
      >
        <text x="60" y="560">Eric Hal Feintuch, D.C., CCSD</text>
        <text x="420" y="560" textAnchor="end">est. 1986</text>
      </g>
    </svg>
  );
}
