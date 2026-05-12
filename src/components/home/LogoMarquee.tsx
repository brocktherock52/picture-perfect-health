/**
 * Editorial logo marquee. Two infinite rows running in opposite directions at
 * different speeds, with animated dividers between marks and a vertical
 * "TRUSTED BY" gutter. Hover pauses both rows. Logos are inline SVGs so we
 * never bundle copyrighted artwork.
 */

const logos: { name: string; svg: JSX.Element }[] = [
  {
    name: "Quest Diagnostics",
    svg: (
      <svg viewBox="0 0 220 40" className="h-6 w-auto">
        <text x="0" y="29" fontFamily="Inter, system-ui" fontWeight="700" fontSize="26" letterSpacing="0.5" fill="currentColor">Quest</text>
        <text x="86" y="29" fontFamily="Inter, system-ui" fontWeight="400" fontSize="20" letterSpacing="2" fill="currentColor">DIAGNOSTICS</text>
      </svg>
    ),
  },
  {
    name: "United Airlines",
    svg: (
      <svg viewBox="0 0 220 40" className="h-6 w-auto">
        <text x="0" y="28" fontFamily="Fraunces, Georgia, serif" fontWeight="600" fontSize="22" letterSpacing="3" fill="currentColor">UNITED</text>
        <text x="105" y="28" fontFamily="Inter, system-ui" fontWeight="300" fontSize="14" letterSpacing="3" fill="currentColor">AIRLINES</text>
      </svg>
    ),
  },
  {
    name: "GE Healthcare",
    svg: (
      <svg viewBox="0 0 220 40" className="h-6 w-auto">
        <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="11" y="27" fontFamily="Inter, system-ui" fontWeight="700" fontSize="16" fill="currentColor">GE</text>
        <text x="48" y="27" fontFamily="Inter, system-ui" fontWeight="500" fontSize="18" letterSpacing="0.5" fill="currentColor">Healthcare</text>
      </svg>
    ),
  },
  {
    name: "Continental",
    svg: (
      <svg viewBox="0 0 220 40" className="h-6 w-auto">
        <text x="0" y="28" fontFamily="Fraunces, Georgia, serif" fontWeight="500" fontStyle="italic" fontSize="22" fill="currentColor">Continental</text>
      </svg>
    ),
  },
  {
    name: "Korean Delegation",
    svg: (
      <svg viewBox="0 0 220 40" className="h-6 w-auto">
        <g fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="14" cy="20" r="8" />
          <circle cx="30" cy="20" r="8" />
          <circle cx="46" cy="20" r="8" />
          <circle cx="22" cy="28" r="8" />
          <circle cx="38" cy="28" r="8" />
        </g>
        <text x="62" y="26" fontFamily="Inter, system-ui" fontWeight="600" fontSize="14" letterSpacing="2" fill="currentColor">KOREAN DELEGATION</text>
      </svg>
    ),
  },
  {
    name: "U.S. Senate",
    svg: (
      <svg viewBox="0 0 220 40" className="h-6 w-auto">
        <path d="M14 6 L26 6 L20 30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="38" y="20" fontFamily="Fraunces, Georgia, serif" fontWeight="600" fontSize="14" letterSpacing="2" fill="currentColor">U.S. SENATE</text>
        <text x="38" y="34" fontFamily="Inter, system-ui" fontWeight="400" fontSize="11" letterSpacing="1.5" fill="currentColor">VISITED 2022</text>
      </svg>
    ),
  },
  {
    name: "Fortune 500 Health System",
    svg: (
      <svg viewBox="0 0 220 40" className="h-6 w-auto">
        <path d="M14 12 H22 V20 H30 V28 H22 V36 H14 V28 H6 V20 H14 Z" fill="currentColor" opacity="0.85" />
        <text x="40" y="20" fontFamily="Inter, system-ui" fontWeight="700" fontSize="13" letterSpacing="2" fill="currentColor">FORTUNE 500</text>
        <text x="40" y="33" fontFamily="Inter, system-ui" fontWeight="400" fontSize="11" letterSpacing="1.5" fill="currentColor">HEALTH SYSTEM</text>
      </svg>
    ),
  },
  {
    name: "Federal Agency",
    svg: (
      <svg viewBox="0 0 220 40" className="h-6 w-auto">
        <g fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M6 32 H42 M6 12 L24 6 L42 12 M10 12 V32 M16 12 V32 M22 12 V32 M28 12 V32 M34 12 V32 M38 12 V32" />
        </g>
        <text x="54" y="20" fontFamily="Fraunces, Georgia, serif" fontWeight="600" fontSize="14" letterSpacing="2" fill="currentColor">FEDERAL AGENCY</text>
        <text x="54" y="33" fontFamily="Inter, system-ui" fontWeight="400" fontSize="11" letterSpacing="1.5" fill="currentColor">WELLNESS PROGRAM</text>
      </svg>
    ),
  },
];

function Divider() {
  return (
    <svg viewBox="0 0 20 40" className="h-6 w-3 text-foreground/25" aria-hidden="true">
      <path d="M10 4 L14 20 L10 36 L6 20 Z" fill="currentColor" />
    </svg>
  );
}

function Row({ direction }: { direction: "left" | "right" }) {
  const sequence = [...logos, ...logos];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max items-center gap-12 whitespace-nowrap text-foreground/70 ${
          direction === "left" ? "marquee-row" : "marquee-row-reverse"
        }`}
      >
        {sequence.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="flex shrink-0 items-center gap-12">
            <div
              className="flex items-center transition-colors hover:text-foreground"
              title={logo.name}
              role="img"
              aria-label={`${logo.name} wordmark, past engagement of Picture Perfect Health`}
            >
              {logo.svg}
            </div>
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="relative border-y border-foreground/15 bg-background py-14">
      <div className="container">
        <div className="mb-10 grid items-end gap-6 md:grid-cols-[auto,1fr,auto]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-foreground/55">
            Trusted by
          </p>
          <p className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl text-balance">
            Fortune 500 workforces, federal agencies, Olympic delegations.
          </p>
          <p className="hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground/55 md:block">
            40 years . 50 states
          </p>
        </div>
      </div>

      <div className="marquee-wrap relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="space-y-7">
          <Row direction="left" />
          <Row direction="right" />
        </div>
      </div>
    </section>
  );
}
