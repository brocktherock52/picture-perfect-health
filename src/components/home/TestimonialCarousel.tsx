import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function TestimonialCarousel() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="What clients say"
          title="Trusted by Fortune 500 benefits leaders"
          description="Placeholder testimonials shown for layout. Replace with sourced client quotes before launch."
        />

        <div className="mx-auto mt-14 max-w-5xl px-6 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2">
                  <div className="h-full p-1">
                    <TestimonialCard testimonial={t} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
