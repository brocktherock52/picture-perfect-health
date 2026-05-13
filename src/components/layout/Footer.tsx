import { Link } from "react-router-dom";
import { Heart, Linkedin, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Separator } from "@/components/ui/separator";

/**
 * Stripe-vibe footer. Multi-column sitemap, compliance badge strip,
 * "Benefits Leaders Brief" newsletter signup (per design brief, not a generic
 * mailing list), and an account-exec contact card with a real phone line.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-foreground/10 bg-background"
      aria-labelledby="site-footer"
    >
      <h2 id="site-footer" className="sr-only">
        Site footer
      </h2>

      <div className="container py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand + benefits-leaders-brief newsletter signup */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2" aria-label="Picture Perfect Health">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy text-navy-foreground">
                <Heart className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                Picture Perfect Health
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/65">
              Corporate employee wellness programs that reduce claims, raise
              engagement, and survive a benefits-committee audit. Trusted by
              Fortune 500 companies in all 50 states since 2006.
            </p>

            <div className="mt-7 rounded-xl border border-foreground/10 bg-card/60 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-coral">
                Benefits Leaders Brief
              </p>
              <p className="mt-1 font-display text-base font-semibold text-foreground">
                Quarterly outcomes report for HR and benefits decision-makers.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex flex-col gap-2 sm:flex-row"
              >
                <label htmlFor="newsletter" className="sr-only">
                  Work email
                </label>
                <input
                  id="newsletter"
                  type="email"
                  placeholder="Work email"
                  className="h-10 flex-1 rounded-md border border-foreground/15 bg-background px-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/30"
                />
                <button
                  type="submit"
                  className="h-10 rounded-md bg-navy px-5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy/90"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-2 text-[11px] text-foreground/55">
                Quarterly only. We do not sell or rent the list. Unsubscribe in
                one click.
              </p>
            </div>

            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-md border border-foreground/15 text-foreground/65 transition-colors hover:border-coral hover:text-coral"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Sitemap columns */}
          <div className="md:col-span-2">
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground/55">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-foreground/70 hover:text-foreground">About Dr. Feintuch</Link></li>
              <li><Link to="/portfolio" className="text-foreground/70 hover:text-foreground">Customer stories</Link></li>
              <li><Link to="/blog" className="text-foreground/70 hover:text-foreground">Resources</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground/55">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/virtual-health-fairs" className="text-foreground/70 hover:text-foreground">Virtual Health Fairs</Link></li>
              <li><Link to="/services/contactless-screenings" className="text-foreground/70 hover:text-foreground">Contactless Screenings</Link></li>
              <li><Link to="/services/12-steps-to-wellness" className="text-foreground/70 hover:text-foreground">12 Steps to Wellness</Link></li>
              <li><Link to="/services/custom-corporate-programs" className="text-foreground/70 hover:text-foreground">Custom Programs</Link></li>
              <li><Link to="/membership" className="text-foreground/70 hover:text-foreground">Membership</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground/55">
              Account executive
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-foreground/70">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                <a href={siteConfig.phoneHref} className="hover:text-foreground">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 text-foreground/70">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                <span>
                  636 Nutley Place
                  <br />
                  Valley Stream, NY 11581
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Compliance badge strip clustered in footer per design brief. */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-foreground/55" />
            SOC 2 Type II
          </span>
          <span className="h-px w-3 bg-foreground/15" />
          <span>HIPAA</span>
          <span className="h-px w-3 bg-foreground/15" />
          <span>HITRUST</span>
          <span className="h-px w-3 bg-foreground/15" />
          <span>NCQA</span>
          <span className="h-px w-3 bg-foreground/15" />
          <span>Independent actuarial review</span>
          <span className="h-px w-3 bg-foreground/15" />
          <span>50 states</span>
        </div>

        <div className="mt-10 mb-2 rounded-lg border border-foreground/10 bg-card/40 p-5 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-foreground/65">
            <span className="font-semibold text-foreground">Are you a chiropractor?</span> Dr.
            Feintuch also built ChiroVision, diagnostic imaging software for clinics.
          </p>
          <a
            href={siteConfig.chirovisionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-coral hover:underline sm:mt-0"
          >
            Try it free for 10 days
          </a>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-foreground/55 sm:flex-row sm:items-center">
          <p>© {year} {siteConfig.legalName}. All rights reserved.</p>
          <p>
            Founded 2006 by Dr. Eric Hal Feintuch, D.C., CCSD . Valley Stream, NY
          </p>
        </div>
      </div>
    </footer>
  );
}
