import { Quote } from "lucide-react";
import { UnsplashImage } from "@/components/shared/UnsplashImage";

/**
 * Personal story callout. The boxing background, Arthur Mercante Jr. nod,
 * and the moment his mother told him to use his hands to heal instead of hurt.
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
                {/* Verified working Unsplash boxing training gloves photo */}
                <UnsplashImage
                  src="https://images.unsplash.com/photo-1509255929945-586a420363cf?auto=format&fit=crop&w=1200&q=80"
                  alt="Red and black boxing training gloves on a wooden plank, a nod to Dr. Feintuch's boxing background"
                  className="aspect-[5/4] object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                A personal note
              </p>
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
                Long before he was a doctor, he was a fighter.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Dr. Feintuch's first education in the human body did not happen in a
                classroom. It happened in a boxing gym. He was fast, disciplined, and
                good enough in the ring that even the legendary referee{" "}
                <strong className="text-foreground">Arthur Mercante Jr.</strong> took
                notice of him.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Then his mother sat him down.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                She told him he had a choice. He could use his hands to hurt people in
                a ring, or he could use those same hands to heal them. "You have a gift
                in those hands," she said. "You can use them to break people or to fix
                them."
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                He chose to fix. He hung up the gloves, enrolled at New York
                Chiropractic College, and spent the next four decades putting his
                hands on patients instead of opponents.
              </p>

              <figure className="mt-8 rounded-xl border-l-4 border-secondary bg-accent/40 p-6">
                <Quote className="h-6 w-6 text-secondary" aria-hidden="true" />
                <blockquote className="mt-2 font-serif text-xl leading-snug text-foreground">
                  The discipline from the ring never left him. It is why he treats his
                  patients the way a corner treats a fighter, and why forty years
                  later, his mother's words still show up in every appointment he
                  takes.
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
