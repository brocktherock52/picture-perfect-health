import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PhoneCTAButton } from "@/components/shared/PhoneCTAButton";
import { Seo } from "@/components/shared/Seo";
import { buildSeo } from "@/lib/seo";

export default function NotFoundPage() {
  const seo = buildSeo({
    title: "Page Not Found",
    description: "The page you're looking for could not be found.",
    path: "/404",
  });

  return (
    <>
      <Seo {...seo} />
      <section className="bg-gradient-to-b from-accent/40 via-background to-background py-32">
        <div className="container max-w-2xl text-center">
          <p className="font-serif text-7xl font-semibold text-secondary">404</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            We can't find that page.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            It might have moved, or the link might be wrong. Let's get you back on track.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/">Back to home</Link>
            </Button>
            <PhoneCTAButton size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
