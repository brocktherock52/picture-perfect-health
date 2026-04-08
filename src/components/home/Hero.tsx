import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneCTAButton } from "@/components/shared/PhoneCTAButton";
import { UnsplashImage } from "@/components/shared/UnsplashImage";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/40 via-background to-background pt-12 md:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60%_50%_at_50%_0%,hsl(var(--accent)/0.6),transparent)]"
      />

      <div className="container">
        <div className="grid items-center gap-12 pb-16 md:grid-cols-2 md:pb-24">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary">
              <Star className="h-3 w-3" />
              30+ years · Fortune 500 trusted
            </span>
            <h1 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
              Corporate wellness that{" "}
              <span className="text-secondary">moves the needle.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Picture Perfect Health, LLC delivers virtual contactless health fairs, on-site
              biometric screenings, and Dr. Eric Feintuch's signature 12 Steps to Wellness program
              to Fortune 500 workforces in all 50 states.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a Free Virtual Health Fair
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <PhoneCTAButton size="lg" />
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-secondary" />
              <span>HIPAA-aware · Free for qualifying corporate clients</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-secondary/20 via-accent to-primary/10 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <UnsplashImage
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80"
                alt="Healthcare professional smiling while consulting with a patient"
                priority
                className="aspect-[4/5] object-cover md:aspect-[5/6]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
