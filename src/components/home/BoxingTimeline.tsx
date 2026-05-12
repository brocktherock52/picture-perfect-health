import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered vertical timeline that walks through Dr. Feintuch's arc:
 * boxing -> Mercante -> mother's speech -> choice to heal -> Binghamton ->
 * NY Chiropractic College honors 1986 -> founded PPH 2006 -> Quest/United/GE
 * -> Senator Johnson 2022 + Korean Olympics 2018. B&W treatment with one
 * teal accent.
 */

interface Beat {
  year: string;
  title: string;
  body: string;
}

const beats: Beat[] = [
  {
    year: "Early 1980s",
    title: "The ring.",
    body:
      "Long before the clinic, the gym. Fast hands, real discipline, and enough talent that Arthur Mercante Jr. took notice from the corner.",
  },
  {
    year: "The pivot",
    title: "Mom's three sentences.",
    body:
      "\"You have a gift in those hands. You can use them to break people or to fix them. Pick.\" He picked.",
  },
  {
    year: "Undergrad",
    title: "Binghamton, BA.",
    body:
      "Four years that taught him how to read a body the way he had learned to read an opponent. Anatomy as adversary.",
  },
  {
    year: "1986",
    title: "NY Chiropractic College, honors.",
    body:
      "Graduated with honors. Started practicing chiropractic the same way he had trained in the ring: methodical, repetitive, exact.",
  },
  {
    year: "2006",
    title: "Picture Perfect Health, LLC.",
    body:
      "Founded the practice that would become a corporate wellness firm trusted by Fortune 500 workforces and one Olympic delegation.",
  },
  {
    year: "2010s",
    title: "Quest, United, GE.",
    body:
      "Single-day events at Quest Diagnostics with 1,600+ employees screened. Multi-year virtual programs for United Airlines crews. GE Healthcare population studies.",
  },
  {
    year: "2018",
    title: "The Korean delegation.",
    body:
      "Korea's Olympic team came through. He treated them the way he treats every patient. The way a corner treats a fighter.",
  },
  {
    year: "2022",
    title: "Senator Ron Johnson visit.",
    body:
      "A sitting U.S. senator visited the office to learn the model. Forty years in, the practice was still drawing rooms full of people who wanted to see how it was done.",
  },
];

export function BoxingTimeline() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ink-foreground sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path fill='none' stroke='%23ffffff' stroke-width='0.3' d='M0 20h40M20 0v40'/></svg>\")",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary">
            The origin
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            From the ring to the corner of forty thousand teams.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-foreground/70">
            The discipline that built Dr. Feintuch's hands never left him. It is
            still in every appointment, every screening, every workshop, every event.
          </p>
        </div>

        <div ref={ref} className="relative mx-auto mt-20 max-w-3xl">
          {/* center rail */}
          <div className="absolute left-4 top-0 h-full w-px bg-white/15 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            aria-hidden="true"
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-secondary to-gold md:left-1/2 md:-translate-x-1/2"
            style={{ height: reduce ? "100%" : railHeight }}
          />

          <ul className="relative space-y-14">
            {beats.map((b, i) => (
              <TimelineBeat key={b.title} beat={b} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TimelineBeat({ beat, index }: { beat: Beat; index: number }) {
  const reduce = useReducedMotion();
  const onRight = index % 2 === 1;

  return (
    <motion.li
      className={`relative md:grid md:grid-cols-2 md:gap-12 ${
        onRight ? "md:[&>div:first-child]:invisible" : "md:[&>div:last-child]:invisible"
      }`}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* node */}
      <span className="absolute left-4 top-2 -ml-[7px] flex h-3.5 w-3.5 items-center justify-center md:left-1/2 md:-translate-x-1/2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-50" />
        <span className="relative inline-flex h-3.5 w-3.5 rounded-full border border-secondary bg-ink" />
      </span>

      <div className="pl-12 md:pr-10 md:text-right">
        <Beat content={beat} />
      </div>
      <div className="pl-12 md:pl-10">
        <Beat content={beat} />
      </div>
    </motion.li>
  );
}

function Beat({ content }: { content: Beat }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
        {content.year}
      </p>
      <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
        {content.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-ink-foreground/75">{content.body}</p>
    </div>
  );
}
