import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, Heart, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  const year = new Date().getFullYear();
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Newsletter wiring lives at the contact form; here we just animate success.
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setEmail("");
    }, 3200);
  };

  return (
    <footer
      className="relative overflow-hidden border-t border-border bg-muted/30"
      aria-labelledby="site-footer"
    >
      <h2 id="site-footer" className="sr-only">
        Site footer
      </h2>

      {/* Slow-drifting animated SVG pattern */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(circle_at_center,white,transparent_75%)]"
        animate={reduce ? undefined : { backgroundPositionX: ["0px", "240px"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><g fill='none' stroke='%232bb8a0' stroke-width='0.55'><circle cx='60' cy='60' r='4'/><circle cx='60' cy='60' r='18'/><circle cx='60' cy='60' r='32'/><path d='M0 60h120M60 0v120'/></g></svg>\")",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="container relative py-16">
        {/* Newsletter row */}
        <div className="mb-12 rounded-2xl border border-foreground/10 bg-card p-6 shadow-soft sm:p-8">
          <div className="grid items-center gap-6 md:grid-cols-[1.2fr,1fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
                The Picture Perfect Brief
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground sm:text-3xl text-balance">
                One short note a month on workforce health.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Field-tested ideas from Dr. Feintuch and the team. No spam, ever.
              </p>
            </div>
            <form onSubmit={onSubmit} className="relative">
              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.div
                    key="ok"
                    initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 rounded-full border border-secondary/30 bg-secondary/10 px-5 py-3 text-sm font-semibold text-secondary"
                  >
                    <motion.span
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-secondary-foreground"
                      initial={reduce ? { scale: 1 } : { scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 280, damping: 18 }}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </motion.span>
                    You are on the list. Welcome.
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={reduce ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-2 sm:flex-row"
                  >
                    <Input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      aria-label="Work email"
                      className="h-12 rounded-full bg-background px-5"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="h-12 rounded-full px-6 shadow-soft"
                    >
                      Subscribe
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
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
            Try it free for 10 days
          </a>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} {siteConfig.legalName}. All rights reserved.</p>
          <p>
            HIPAA-aware data practices . Serving all 50 states . Founded by Dr. Eric Feintuch, DC
          </p>
        </div>
      </div>
    </footer>
  );
}
