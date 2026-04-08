import {
  Award,
  GraduationCap,
  Stethoscope,
  Trophy,
  ScrollText,
  Code2,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const credentials = [
  {
    icon: GraduationCap,
    title: "New York Chiropractic College",
    description: "Doctor of Chiropractic, 1986 — graduated with honors",
  },
  {
    icon: ScrollText,
    title: "Binghamton University",
    description: "B.A., Political Science, Literature & English (1981)",
  },
  {
    icon: Trophy,
    title: "Certified Sports Diplomate",
    description: "CCSD — Certified Chiropractic Sports Diplomate",
  },
  {
    icon: Stethoscope,
    title: "40 Years in Practice",
    description: "Active clinical practice since 1986",
  },
  {
    icon: Award,
    title: "Senate Recognition",
    description: "Guest of U.S. Senator Ron Johnson, Washington D.C., 2022",
  },
  {
    icon: Code2,
    title: "Software Founder",
    description: "Built ChiroVision — diagnostic imaging platform for chiropractors",
  },
];

export function CredentialsList() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Credentials
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Four decades of credentials, one clear track record.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((c) => {
            const Icon = c.icon;
            return (
              <Card key={c.title} className="p-6 shadow-soft">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-secondary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
