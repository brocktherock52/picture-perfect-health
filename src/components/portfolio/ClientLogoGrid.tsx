import { clientLogos } from "@/data/clientLogos";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ClientLogoGrid() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Past clients"
          title="Workforces we've served"
          description="A sample of the organizations Picture Perfect Health has supported. Logos are displayed as text placeholders until licensed marks are provided."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {clientLogos.map((logo) => (
            // TODO: replace with real client logo SVG
            <Card
              key={logo.name}
              className="flex h-24 flex-col items-center justify-center p-4 text-center"
            >
              <p className="font-serif text-base font-semibold text-foreground">{logo.name}</p>
              {logo.industry && (
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {logo.industry}
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
