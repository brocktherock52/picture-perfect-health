import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * Cream-to-teal curtain wipe on first paint. Displays the Fraunces wordmark
 * "Picture Perfect Health" with "Est. 2006" tagline, then wipes upward.
 * Only fires once per session.
 */
export function LoadingReveal() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduce) {
      setVisible(false);
      return;
    }
    if (typeof window !== "undefined" && sessionStorage.getItem("pph-revealed")) {
      setVisible(false);
      return;
    }
    const t = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem("pph-revealed", "1");
      } catch {
        /* ignore */
      }
    }, 1200);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="reveal"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          initial={{ y: 0 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 0.85, ease: [0.83, 0, 0.17, 1] }}
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              background:
                "radial-gradient(circle at 50% 70%, hsl(166 60% 38% / 0.18), transparent 60%)",
            }}
          />

          <motion.p
            className="text-[10px] font-semibold uppercase tracking-[0.4em] text-secondary"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Est. 2006
          </motion.p>

          <motion.h1
            aria-hidden="true"
            className="mt-4 max-w-[90vw] text-center font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Picture Perfect Health
          </motion.h1>

          <motion.div
            className="mt-6 h-px w-24 origin-left bg-foreground/30"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeInOut" }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
