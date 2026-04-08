import { Calendar } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "1981",
    title: "Bachelor of Arts, Binghamton University",
    description:
      "Political Science, Literature, and English Language. The humanities foundation that shaped his lifelong gift for translating complex science into language people actually use.",
  },
  {
    year: "1986",
    title: "Doctor of Chiropractic, graduated with honors",
    description:
      "New York Chiropractic College (now Northeast College of Health Sciences). Begins clinical practice the same year.",
  },
  {
    year: "2006",
    title: "Founds Picture Perfect Health, LLC",
    description:
      "Brings clinical experience to corporate workforces. The company has since served United Airlines, GE Healthcare, Quest Diagnostics, federal agencies, and Fortune 500s in all 50 states.",
  },
  {
    year: "2010s",
    title: "Creates The 12 Steps to Wellness Workshop",
    description:
      "Refines a proprietary twelve-habit framework that becomes the most-requested program in the Picture Perfect Health portfolio.",
  },
  {
    year: "Multi-year",
    title: "Quest Diagnostics single-day event for 1,600+ employees",
    description:
      "Coordinates and delivers a same-day biometric screening campaign for over 1,600 Quest Diagnostics employees in New Jersey, without disrupting operations.",
  },
  {
    year: "Ongoing",
    title: "Korean Olympics organizing committee delegate",
    description:
      "Serves as a delegate to the organizing committee for the Korean Olympics, contributing to global wellness and sports medicine initiatives.",
  },
  {
    year: "2022",
    title: "Guest of U.S. Senator Ron Johnson in Washington, D.C.",
    description:
      "Recognized at the federal level for contributions to public health discourse and wellness program leadership.",
  },
  {
    year: "Now",
    title: "Builds ChiroVision diagnostic imaging software",
    description:
      "Marries his clinical and engineering backgrounds to ship a complete imaging, billing, and patient management platform for chiropractic clinics nationwide.",
  },
];

export function NotableEngagements() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Career milestones"
          title="Forty years of work, one continuous through-line."
          description="From a Binghamton humanities degree to building diagnostic software in 2026, Dr. Feintuch has spent his career at the intersection of medicine, education, and technology."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <ol className="relative border-l-2 border-secondary/30 pl-8">
            {milestones.map((m, i) => (
              <li key={i} className="mb-10 last:mb-0">
                <span
                  className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-secondary bg-background"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary">
                    <Calendar className="h-3 w-3" />
                    {m.year}
                  </span>
                </div>
                <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
                  {m.title}
                </h3>
                <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                  {m.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
