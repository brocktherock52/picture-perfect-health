import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UnsplashImage } from "@/components/shared/UnsplashImage";

const highlights = [
  "Twelve concrete, science-backed habits",
  "Live virtual or on-site delivery",
  "Includes workbook and 30-day follow-up plan",
  "Tracks behavior change at 30, 60, 90 days",
  "Created and personally led by Dr. Feintuch",
  "Most-requested program in our portfolio",
];

export function TwelveStepsSpotlight() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-accent via-secondary/20 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <UnsplashImage
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
                alt="Group of professionals attending a wellness workshop led by Dr. Feintuch"
                className="aspect-[5/4] object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Badge variant="secondary" className="mb-4">
              Signature Program
            </Badge>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              The 12 Steps to Wellness Workshop
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Dr. Feintuch's proprietary methodology, refined over three decades and delivered to
              thousands of employees. Twelve concrete habits that compound into lasting health
              change — and the most-requested program in our portfolio.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="mt-8">
              <Link to="/services/12-steps-to-wellness">
                Explore the workshop
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
