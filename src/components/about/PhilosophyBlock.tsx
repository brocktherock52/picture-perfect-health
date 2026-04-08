import { HeartPulse, ShieldCheck, Users } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    icon: HeartPulse,
    title: "Prevention first",
    description:
      "Most healthcare spending happens after something has gone wrong. We invest upstream, in screenings, education, and habits, so the expensive interventions become rare.",
  },
  {
    icon: Users,
    title: "Education for everyone",
    description:
      "Wellness should not be a perk for the C-suite. Our programs reach the call-center agent, the warehouse worker, and the executive with the same depth and care.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy by default",
    description:
      "Individual results stay with the individual. HR sees aggregated, de-identified trends, nothing more. Trust is the foundation of every program we build.",
  },
];

export function PhilosophyBlock() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="What we believe"
          title="Three principles that guide every program"
          description="Thirty years of clinical practice have taught Dr. Feintuch a few things. These are the ones that shape every engagement we accept."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <Card key={p.title} className="p-7 shadow-soft">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-secondary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
