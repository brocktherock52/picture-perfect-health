import { Quote, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UnsplashImage } from "@/components/shared/UnsplashImage";
import type { CaseStudy } from "@/types";

interface CaseStudyCardProps {
  study: CaseStudy;
  featured?: boolean;
}

export function CaseStudyCard({ study, featured = false }: CaseStudyCardProps) {
  if (featured) {
    return (
      <Card className="overflow-hidden shadow-soft">
        <div className="grid lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden lg:aspect-auto">
            <UnsplashImage src={study.image} alt={study.imageAlt} className="h-full" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <Badge variant="secondary" className="mb-3 w-fit">
              Featured Case Study
            </Badge>
            <h3 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              {study.client}
            </h3>
            <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">
              {study.industry}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-secondary">
              <Users className="h-5 w-5" />
              <span className="font-semibold text-foreground">{study.employees} employees</span>
            </div>
            <p className="mt-4 text-base leading-relaxed text-foreground">{study.result}</p>
            <blockquote className="mt-6 border-l-4 border-secondary pl-4 text-base italic text-muted-foreground">
              <Quote className="mb-2 h-5 w-5 text-secondary" aria-hidden="true" />
              {study.quote}
            </blockquote>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="flex h-full flex-col overflow-hidden shadow-soft">
      <div className="aspect-[16/10] overflow-hidden">
        <UnsplashImage src={study.image} alt={study.imageAlt} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{study.industry}</p>
        <h3 className="mt-1 font-serif text-xl font-semibold text-foreground">{study.client}</h3>
        <div className="mt-3 inline-flex items-center gap-2 text-sm text-secondary">
          <Users className="h-4 w-4" />
          <span className="font-semibold">{study.employees} employees</span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {study.result}
        </p>
      </div>
    </Card>
  );
}
