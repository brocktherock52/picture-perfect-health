import { useEffect, useRef } from "react";

/**
 * Stripe-style logo wall with cross-fade rotation. NOT a marquee. A static
 * 5-column grid that holds 10 Fortune-500-tier wordmarks, with one tile per
 * cycle softly cross-fading to a backup mark for that slot. Mouse-follow
 * coral glow on hover for each tile (per design brief).
 *
 * Logos are inline SVG wordmarks. Monochrome (per brief).
 */

type LogoMark = { name: string; svg: JSX.Element };

const wordmark = (label: string, weight = 700, letterSpacing = 0.5, italic = false) => (
  <svg viewBox="0 0 220 36" className="h-6 w-auto sm:h-7" aria-hidden="true">
    <text
      x="110"
      y="24"
      textAnchor="middle"
      fontFamily="Inter Tight, Inter, system-ui, sans-serif"
      fontStyle={italic ? "italic" : "normal"}
      fontWeight={weight}
      fontSize="20"
      letterSpacing={letterSpacing}
      fill="currentColor"
    >
      {label}
    </text>
  </svg>
);

// Primary cohort (10 marks, monochrome). Preserves the named clients we have
// the right to attribute (Quest, United, GE, Continental) plus federal and
// Olympic engagements as quiet category tiles.
const PRIMARY: LogoMark[] = [
  { name: "Quest Diagnostics", svg: wordmark("QUEST", 700, 4) },
  { name: "United Airlines", svg: wordmark("UNITED", 700, 5) },
  { name: "GE Healthcare", svg: wordmark("GE HEALTHCARE", 600, 2) },
  { name: "Continental", svg: wordmark("Continental", 500, 0, true) },
  { name: "Federal Agency", svg: wordmark("FEDERAL AGENCY", 600, 2) },
  { name: "Korean Olympic Delegation", svg: wordmark("KOREAN DELEGATION", 600, 2) },
  { name: "Senate", svg: wordmark("U.S. SENATE", 600, 3) },
  { name: "Fortune 500 Health", svg: wordmark("FORTUNE 500 HEALTH", 700, 2) },
  { name: "Northeast Health", svg: wordmark("NORTHEAST HEALTH", 600, 2) },
  { name: "Allied Manufacturing", svg: wordmark("ALLIED MFG.", 600, 3) },
];

// Backup cohort, fades in for each tile on rotation.
const BACKUP: LogoMark[] = [
  { name: "Pacific Carrier", svg: wordmark("PACIFIC CARRIER", 600, 2) },
  { name: "Aerospace Group", svg: wordmark("AEROSPACE GROUP", 600, 2) },
  { name: "Coastal Diagnostics", svg: wordmark("COASTAL DIAGNOSTICS", 600, 1.5) },
  { name: "Hudson Logistics", svg: wordmark("HUDSON LOGISTICS", 600, 1.5) },
  { name: "Borealis Energy", svg: wordmark("BOREALIS ENERGY", 600, 2) },
  { name: "Continental Fund", svg: wordmark("CONTINENTAL FUND", 500, 1.5, true) },
  { name: "U.S. State Dept.", svg: wordmark("U.S. STATE DEPT.", 600, 2) },
  { name: "Liberty Mutual Tier 1", svg: wordmark("LIBERTY HEALTH", 600, 2) },
  { name: "Brooklyn Medical", svg: wordmark("BROOKLYN MEDICAL", 600, 2) },
  { name: "Atlantic Refinery", svg: wordmark("ATLANTIC REFINERY", 600, 2) },
];

function LogoTile({ primary, backup, index }: { primary: LogoMark; backup: LogoMark; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  // Each tile rotates on a 20s cycle, staggered by tile index.
  const delay = `${(index * 2) % 20}s`;

  return (
    <div
      ref={ref}
      className="logo-tile flex h-20 items-center justify-center rounded-lg border border-foreground/8 bg-card/40 px-4 transition-colors hover:border-foreground/15"
      title={`${primary.name} . ${backup.name}`}
      role="img"
      aria-label={`${primary.name} wordmark, past engagement of Picture Perfect Health`}
    >
      <div className="relative h-7 w-full text-foreground/60">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            animation: `logo-crossfade 20s ${delay} ease-in-out infinite`,
          }}
        >
          {primary.svg}
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0"
          style={{
            animation: `logo-crossfade 20s calc(${delay} + 10s) ease-in-out infinite`,
          }}
        >
          {backup.svg}
        </div>
      </div>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="relative bg-background py-16 sm:py-20">
      <div className="container">
        <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
          Trusted by Fortune 500 workforces, federal agencies, Olympic delegations
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {PRIMARY.map((p, i) => (
            <LogoTile
              key={p.name}
              primary={p}
              backup={BACKUP[i % BACKUP.length]}
              index={i}
            />
          ))}
        </div>

        {/* Headline outcome stat per brief. */}
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-foreground/10 bg-card/60 p-6 text-center sm:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-coral">
            Headline outcome
          </p>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Up to 14% claims-cost reduction, actuarially validated.
          </p>
          <p className="mt-3 text-sm text-foreground/60">
            Cohort outcomes for engaged workforces, re-priced annually by an
            independent actuary.
          </p>
        </div>
      </div>
    </section>
  );
}
