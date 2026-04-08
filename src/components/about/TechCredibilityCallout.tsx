import { ArrowUpRight, Code2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function TechCredibilityCallout() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-accent/30 to-background p-8 shadow-soft sm:p-12">
          <div className="flex items-start gap-5">
            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground sm:flex">
              <Code2 className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                A doctor who codes
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
                Clinical instincts, engineering rigor.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Dr. Feintuch has been a programmer since long before chiropractic school. That
                technical background is the reason Picture Perfect Health was running virtual
                workforce wellness years before the rest of the industry caught up, and why our
                screening data, reporting, and infrastructure work the way they do.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                The clearest proof is{" "}
                <a
                  href={siteConfig.chirovisionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-secondary hover:underline"
                >
                  ChiroVision
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                , a complete diagnostic imaging platform Dr. Feintuch built and ships to
                chiropractic practices nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
