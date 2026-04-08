import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between p-8 shadow-soft">
      <div>
        <Quote className="mb-4 h-8 w-8 text-secondary" aria-hidden="true" />
        <blockquote className="text-lg leading-relaxed text-foreground">
          {/* TODO: replace with real testimonial */}
          {testimonial.quote}
        </blockquote>
      </div>
      <footer className="mt-6 border-t border-border pt-4">
        <p className="font-semibold text-foreground">{testimonial.author}</p>
        <p className="text-sm text-muted-foreground">
          {testimonial.role} · {testimonial.company}
        </p>
      </footer>
    </Card>
  );
}
