import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Hand-drawn line-art spine + heart used as ambient hero background.
 * Slow vertical parallax. Color is teal-on-cream. Picasso-ish single-stroke.
 */
export function SpineDrift({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -160]);
  const r = useTransform(scrollY, [0, 800], [0, 8]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      style={{ y: reduce ? 0 : y, rotate: reduce ? 0 : r }}
      className={`pointer-events-none absolute inset-0 -z-10 ${className}`}
    >
      <svg
        viewBox="0 0 800 1000"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full text-secondary"
      >
        <defs>
          <linearGradient id="spineStroke" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.55" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <g
          fill="none"
          stroke="url(#spineStroke)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* spine */}
          <path d="M400 60 C 430 140, 360 220, 410 300 C 460 380, 350 460, 410 540 C 470 620, 360 700, 410 780 C 460 860, 380 920, 410 960" />
          {/* vertebrae */}
          {Array.from({ length: 14 }).map((_, i) => {
            const y = 90 + i * 60;
            const x = 380 + ((i % 2) * 60);
            return (
              <path
                key={i}
                d={`M${x - 30} ${y} q 30 -14, 60 0 q -30 14, -60 0 z`}
              />
            );
          })}
          {/* heart sketch */}
          <path d="M520 280 c 30 -40, 100 -10, 70 40 c -10 18, -40 36, -70 56 c -30 -20, -60 -38, -70 -56 c -30 -50, 40 -80, 70 -40 z" />
          {/* gentle ribbon */}
          <path d="M120 740 C 220 700, 320 800, 420 760 C 540 720, 640 820, 720 780" strokeOpacity="0.6" />
        </g>
      </svg>
    </motion.div>
  );
}
