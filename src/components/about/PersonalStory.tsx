import { Quote } from "lucide-react";
import { UnsplashImage } from "@/components/shared/UnsplashImage";

/**
 * Personal story callout — boxing background and Arthur Mercante Jr. connection.
 * Adds the warmth and nostalgia that turn an "About" page into a relationship.
 */
export function PersonalStory() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-[5fr,7fr]">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-secondary/20 via-accent to-transparent blur-2xl" />
              <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
                {/* TODO: replace with real photo of Dr. Feintuch (boxing days or sport medicine context) */}
                <UnsplashImage
                  src="https://images.unsplash.com/photo-1615117972428-28de67cda4c6?auto=format&fit=crop&w=1200&q=80"
                  alt="Boxing gloves resting on a rope — a nod to Dr. Feintuch's boxing background"
                  className="aspect-[5/4] object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                A personal note
              </p>
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
                Long before he was a doctor, he was a boxer.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Dr. Feintuch's first education in the human body did not happen in a classroom.
                It happened in a boxing gym. The years he spent in the ring — and in the company
                of New York fight figures like the legendary referee{" "}
                <strong className="text-foreground">Arthur Mercante Jr.</strong> — taught him
                things about pain, recovery, discipline, and the way bodies actually break and
                rebuild that no textbook could.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                It is the reason he went on to become a Certified Chiropractic Sports Diplomate.
                It is the reason he treats his corporate wellness clients the way a corner
                treats a fighter — with honest assessments, real protocols, and a refusal to
                let anyone go back into the ring before they are ready.
              </p>

              <figure className="mt-8 rounded-xl border-l-4 border-secondary bg-accent/40 p-6">
                <Quote className="h-6 w-6 text-secondary" aria-hidden="true" />
                <blockquote className="mt-2 font-serif text-xl leading-snug text-foreground">
                  Forty years later, the lessons from the ring still show up in every patient
                  Dr. Feintuch sees and every workforce his team supports.
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
