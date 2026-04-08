import { ArrowUpRight, Stethoscope } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Subtle cross-promotion to ChiroVision (Dr. Feintuch's separate SaaS for chiropractors).
 * Intentionally low-key — corporate buyers don't care, but chiropractor visitors get a path.
 */
export function ChirovisionCrossPromo() {
  return (
    <section className="bg-background py-16">
      <div className="container">
        <a
          href={siteConfig.chirovisionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-border bg-gradient-to-br from-accent/40 via-background to-background p-8 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lg sm:p-10"
        >
          <div className="grid items-center gap-6 md:grid-cols-[auto,1fr,auto]">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
              <Stethoscope className="h-7 w-7" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Also from Dr. Feintuch
              </p>
              <h3 className="mt-1 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                ChiroVision — diagnostic imaging software for chiropractors
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Image comparison, DICOM support, interactive X-rays, posture analysis, and HCFA
                1500 billing. Built by a doctor who codes. Try it free for 10 days.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 self-start text-sm font-semibold text-secondary md:self-center">
              Visit chirovision.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
