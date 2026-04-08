import { UnsplashImage } from "@/components/shared/UnsplashImage";
import { SectionHeading } from "@/components/shared/SectionHeading";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    alt: "Healthcare workers conducting on-site biometric screenings",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    alt: "Nurse taking a patient's blood pressure at a corporate health fair",
  },
  {
    src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
    alt: "Medical professional preparing equipment for a workplace screening event",
  },
  {
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=80",
    alt: "Healthcare professional joining a virtual wellness session",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "Group of professionals attending a workplace wellness workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    alt: "Clinician reviewing patient data on a tablet",
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
