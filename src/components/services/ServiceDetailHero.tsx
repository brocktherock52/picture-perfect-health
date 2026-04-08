import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PhoneCTAButton } from "@/components/shared/PhoneCTAButton";
import { Button } from "@/components/ui/button";
import { UnsplashImage } from "@/components/shared/UnsplashImage";
import type { Service } from "@/types";

interface ServiceDetailHeroProps {
  service: Service;
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const Icon = service.icon;
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/40 via-background to-background pt-12 pb-16 sm:pt-16 md:pb-24">
      <div className="container">
        <Link
          to="/services"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          All services
        </Link>

        <div className="mt-6 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge variant="secondary" className="mb-4">
              <Icon className="mr-1 h-3 w-3" />
              {service.name}
            </Badge>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
              {service.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {service.longDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <PhoneCTAButton size="lg" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-secondary/15 via-accent to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <UnsplashImage
                src={service.heroImage}
                alt={service.heroAlt}
                priority
                className="aspect-[5/4] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
