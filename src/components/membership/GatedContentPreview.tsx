import { Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const previewItems = [
  {
    title: "The 12 Steps Workbook (PDF)",
    description: "Dr. Feintuch's signature workbook, downloadable for members.",
  },
  {
    title: "Live Monthly Q&A with Dr. Feintuch",
    description: "60 minutes of direct access on the first Wednesday of each month.",
  },
  {
    title: "Workplace Wellness Course Library",
    description: "Self-paced video courses on stress, sleep, nutrition, and movement.",
  },
  {
    title: "Member-only Community",
    description: "Connect with HR leaders and benefits managers across the country.",
  },
];

export function GatedContentPreview() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What you get inside
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Premium content built around the same methodology Dr. Feintuch delivers to Fortune 500
            workforces.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {previewItems.map((item) => (
            <Card key={item.title} className="relative overflow-hidden p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/80" />
              <Lock
                className="absolute right-4 top-4 h-4 w-4 text-muted-foreground"
                aria-hidden="true"
              />
              <h3 className="relative font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="relative mt-1 text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <a href="#tiers">See membership tiers</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
