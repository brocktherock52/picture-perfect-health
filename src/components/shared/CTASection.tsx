import { Button } from "@/components/ui/button";
import { PhoneCTAButton } from "./PhoneCTAButton";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
}

/**
 * Full-width gradient CTA band. Reused on every page.
 */
export function CTASection({
  eyebrow = "Ready to begin?",
  title = "Let's transform the health of your workforce.",
  description = "Talk to Dr. Feintuch's team about a custom corporate wellness program. Most virtual contactless health fairs are FREE for qualifying employers.",
  primaryCtaLabel = "Request a Free Quote",
  primaryCtaHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-95"
      />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-balance">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-primary-foreground/85">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              <Link to={primaryCtaHref}>
                {primaryCtaLabel}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <PhoneCTAButton size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
