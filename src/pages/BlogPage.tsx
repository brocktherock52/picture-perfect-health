import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { posts, getFeaturedPost } from "@/data/blog/posts";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { CTASection } from "@/components/shared/CTASection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Seo } from "@/components/shared/Seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildSeo } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});
type NewsletterData = z.infer<typeof newsletterSchema>;

export default function BlogPage() {
  const featured = getFeaturedPost();
  const otherPosts = posts.filter((p) => p.slug !== featured.slug);

  const seo = buildSeo({
    title: "Corporate Wellness Blog",
    description:
      "Insights on virtual health fairs, biometric screenings, and corporate wellness program ROI from Dr. Eric Feintuch and the Picture Perfect Health team.",
    path: "/blog",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterData) => {
    // TODO: connect form backend
    console.log("[Newsletter signup]", data);
    await new Promise((r) => setTimeout(r, 400));
    toast.success("You're on the list. Watch your inbox.");
    reset();
  };

  return (
    <>
      <Seo {...seo} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ])}
      />

      <section className="bg-gradient-to-b from-accent/40 via-background to-background py-20 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Resources"
            title="Corporate wellness, written by a working doctor."
            description="Three decades of running wellness programs, distilled into the essays Dr. Feintuch wishes more benefits leaders would read."
          />
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="container">
          <BlogPostCard post={featured} featured />
        </div>
      </section>

      <section className="bg-muted/30 py-20 sm:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container max-w-3xl">
          <Card className="p-8 shadow-soft sm:p-12">
            <div className="text-center">
              <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                Get one essay a month, no spam.
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Wellness insights from Dr. Feintuch, written for benefits leaders. Unsubscribe
                anytime.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-6 max-w-md">
              <Label htmlFor="newsletter-email" className="sr-only">
                Email address
              </Label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@company.com"
                  {...register("email")}
                />
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>
              )}
            </form>
          </Card>
        </div>
      </section>

      <CTASection />
    </>
  );
}
