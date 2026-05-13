import { motion, useReducedMotion } from "framer-motion";

/**
 * Editorial founder portrait. Renders Dr. Eric Hal Feintuch's actual headshot
 * (downloaded from his pictureperfecthealth.com legacy site), framed inside a
 * magazine-cover treatment with serial number, era, and credential annotations.
 *
 * Photo originally 256x320 from the 2006 era of the legacy site, upscaled to
 * 1200x1500 via sharp with light tone adjustment so it matches the warm cream
 * canvas of the rest of the page.
 */
export function FounderPortrait({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-[2px] bg-[hsl(38,38%,88%)] ${className}`}
      role="img"
      aria-label="Dr. Eric Hal Feintuch, D.C., CCSD, founder of Picture Perfect Health"
    >
      {/* magazine paper backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(38,60%,95%)] via-[hsl(38,45%,90%)] to-[hsl(38,30%,84%)]" />

      {/* halftone speckle on the paper */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 480 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="hsl(215 35% 12%)">
          {Array.from({ length: 80 }).map((_, i) => {
            const x = (i * 73) % 480;
            const y = (i * 137) % 600;
            return <circle key={i} cx={x} cy={y} r={1.1} />;
          })}
        </g>
      </svg>

      {/* the actual portrait. positioned bottom so the head crops above the chin/tie */}
      <motion.picture
        initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-0 z-10 mx-auto block w-[78%]"
        style={{ filter: "contrast(1.04) saturate(0.92)" }}
      >
        <source srcSet="/eric-hero.webp" type="image/webp" />
        <img
          src="/eric-hero.jpg"
          alt="Dr. Eric Hal Feintuch, D.C., CCSD, founder of Picture Perfect Health, LLC"
          loading="eager"
          decoding="async"
          className="h-auto w-full object-cover object-top"
        />
      </motion.picture>

      {/* duotone overlay to bind the photo to the cream palette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-20 mix-blend-multiply"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, transparent 55%, hsl(38 30% 80% / 0.35) 100%)",
        }}
      />

      {/* outer mat / frame line */}
      <div
        aria-hidden="true"
        className="absolute inset-[6%] z-30 border border-[hsl(215,35%,12%)]/15"
      />

      {/* annotation marks, top */}
      <div className="absolute inset-x-0 top-6 z-40 flex items-center justify-between px-7 font-serif text-[10px] uppercase tracking-[0.28em] text-[hsl(215,35%,12%)]/60">
        <span>Portrait</span>
        <span>N&deg; I</span>
      </div>

      {/* annotation marks, bottom */}
      <div className="absolute inset-x-0 bottom-5 z-40 flex items-end justify-between px-7 pb-2 font-serif text-[11px] italic text-[hsl(215,35%,12%)]/80">
        <span>Eric Hal Feintuch, D.C., CCSD</span>
        <span>est. 1986</span>
      </div>
    </div>
  );
}
