import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ContactInfoBlock() {
  return (
    <aside className="rounded-2xl border border-border bg-muted/30 p-8" aria-label="Contact information">
      <h3 className="font-serif text-2xl font-semibold text-foreground">Talk to a real person</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Our team responds within one business day. For urgent inquiries, call us directly.
      </p>

      <ul className="mt-6 space-y-5 text-sm">
        <li className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-secondary">
            <Phone className="h-4 w-4" />
          </span>
          <div>
            <p className="font-semibold text-foreground">Phone</p>
            <a
              href={siteConfig.phoneHref}
              className="text-base text-secondary hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>
            <p className="mt-1 text-xs text-muted-foreground">Call any time during business hours</p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-secondary">
            <Mail className="h-4 w-4" />
          </span>
          <div>
            <p className="font-semibold text-foreground">Email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-base text-secondary hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-secondary">
            <MapPin className="h-4 w-4" />
          </span>
          <div>
            <p className="font-semibold text-foreground">Headquarters</p>
            <p className="text-base text-foreground">
              {siteConfig.address.locality}, {siteConfig.address.region}{" "}
              {siteConfig.address.postalCode}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Serving all 50 states</p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-secondary">
            <Clock className="h-4 w-4" />
          </span>
          <div>
            <p className="font-semibold text-foreground">Business hours</p>
            <p className="text-base text-foreground">Mon–Fri · 9:00 AM – 6:00 PM ET</p>
          </div>
        </li>
      </ul>
    </aside>
  );
}
