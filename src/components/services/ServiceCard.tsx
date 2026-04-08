import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <Link to={`/services/${service.slug}`} className="group">
      <Card className="h-full p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-soft">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-secondary">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {service.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Card>
    </Link>
  );
}
