import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";
import { StatCounter } from "@/components/shared/StatCounter";

/**
 * Stats strip with a parallax background pattern. Numbers animate from 0 to
 * target the moment the section scrolls into view (see useInViewCounter).
 */
export function StatsStrip() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 6]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background py-20 sm:py-24">
      {/* Parallax decorative grid */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduce ? 0 : bgY, rotate: reduce ? 0 : bgRotate }}
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(circle_at_center,white,transparent_75%)]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><path fill='none' stroke='%2300000022' stroke-width='0.6' d='M0 30h60M30 0v60'/></svg>\")",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      <div className="container">
        <Reveal>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <StatCounter value={40} label="Years in practice" />
            <StatCounter value={50} label="States served" />
            <StatCounter value={250000} suffix="+" label="Employees supported" />
            <StatCounter value={1600} suffix="+" label="At our largest event" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
