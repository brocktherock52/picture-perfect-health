import { Link } from "react-router-dom";
import { Heart, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30" aria-labelledby="site-footer">
      <h2 id="site-footer" className="sr-only">
        Site footer
      </h2>
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2" aria-label="Picture Perfect Health">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Heart className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
                Picture Perfect Health
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Corporate employee wellness programs that reduce healthcare costs, boost
              productivity, and improve well-being. Trusted by Fortune 500 companies in all 50
              states.
            </p>
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-serif text-base font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About Dr. Feintuch
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-foreground">
                  Past Events
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-serif text-base font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services/virtual-health-fairs"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Virtual Health Fairs
                </Link>
              </li>
              <li>
                <Link
                  to="/services/contactless-screenings"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contactless Screenings
                </Link>
              </li>
              <li>
                <Link
                  to="/services/12-steps-to-wellness"
                  className="text-muted-foreground hover:text-foreground"
                >
                  12 Steps to Wellness
                </Link>
              </li>
              <li>
                <Link
                  to="/services/custom-corporate-programs"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Custom Programs
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-muted-foreground hover:text-foreground">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-base font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <a href={siteConfig.phoneHref} className="hover:text-foreground">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>
                  {siteConfig.address.locality}, {siteConfig.address.region}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        {/* ChiroVision cross-promo */}
        <div className="mb-8 rounded-lg border border-border bg-background p-5 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Are you a chiropractor?</span> Dr.
            Feintuch also built ChiroVision, diagnostic imaging software for clinics.
          </p>
          <a
            href={siteConfig.chirovisionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline sm:mt-0"
          >
            Try it free for 10 days →
          </a>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} {siteConfig.legalName}. All rights reserved.</p>
          <p>
            HIPAA-aware data practices · Serving all 50 states · Founded by Dr. Eric Feintuch, DC
          </p>
        </div>
      </div>
    </footer>
  );
}
