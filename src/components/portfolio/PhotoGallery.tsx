import { UnsplashImage } from "@/components/shared/UnsplashImage";
import { SectionHeading } from "@/components/shared/SectionHeading";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    alt: "On-site biometric screenings delivered by Picture Perfect Health for a Fortune 500 corporate employee wellness program",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    alt: "On-site chiropractic care and blood pressure screening at a corporate health fair run by Picture Perfect Health",
  },
  {
    src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
    alt: "Clinical staff preparing biometric screening equipment for an employee wellness event",
  },
  {
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=80",
    alt: "Healthcare professional joining a Picture Perfect Health virtual contactless health fair",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "Fortune 500 employees attending the 12 Steps to Wellness corporate workshop with Dr. Eric Feintuch",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    alt: "Picture Perfect Health clinician reviewing population health data for an enterprise wellness program",
  },
];

export function PhotoGallery() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="From the field"
          title="Real events. Real workforces."
          description="A look at the kinds of programs we run for clients across the country."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl border border-border shadow-soft"
            >
              <UnsplashImage
                src={photo.src}
                alt={photo.alt}
                className="aspect-[4/3] transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
