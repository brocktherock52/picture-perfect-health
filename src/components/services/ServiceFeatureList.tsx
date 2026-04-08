import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface ServiceFeatureListProps {
  features: string[];
  howItWorks: { step: string; description: string }[];
}

export function ServiceFeatureList({ features, howItWorks }: ServiceFeatureListProps) {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Features */}
          <div>
            <SectionHeading
              eyebrow="What's included"
              title="Built for outcomes, not optics."
              align="left"
            />
            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-foreground">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How it works */}
          <div>
            <SectionHeading eyebrow="How it works" title="Three steps. One outcome." align="left" />
            <ol className="mt-8 space-y-6">
              {howItWorks.map((item, idx) => (
                <li key={item.step} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-lg font-semibold text-primary-foreground">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {item.step}
                    </h3>
                    <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
