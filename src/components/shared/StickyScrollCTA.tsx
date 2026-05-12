import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

/**
 * Floating, bottom-center sticky CTA that surfaces once the visitor scrolls
 * past the hero (~85vh). Dismissible per-session via sessionStorage so it
 * does not nag returning users on the same visit.
 */
export function StickyScrollCTA() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("pph_sticky_cta_dismissed") === "1") {
      setDismissed(true);
      return;
    }
    const threshold = window.innerHeight * 0.85;
    const onScroll = () => {
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("pph_sticky_cta_dismissed", "1");
    }
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="sticky-cta"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-5 z-40 mx-auto flex w-fit max-w-[92%] items-center gap-2 rounded-full border border-foreground/10 bg-foreground/95 px-2 py-2 pl-5 text-background shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] backdrop-blur"
        >
          <span className="hidden text-sm font-medium sm:inline">
            Free wellness audit for your workforce.
          </span>
          <span className="text-sm font-medium sm:hidden">Free wellness audit.</span>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition hover:bg-secondary/90"
          >
            Get yours
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss"
            className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full text-background/70 transition hover:bg-background/10 hover:text-background"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
