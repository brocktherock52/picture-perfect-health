import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin animated bar at the very top of the page that grows from 0 to 100%
 * as the user scrolls. Uses a spring for smooth tracking.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 36,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-secondary via-gold to-secondary"
      style={{ scaleX }}
    />
  );
}
