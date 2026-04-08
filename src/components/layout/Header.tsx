import { Link, NavLink } from "react-router-dom";
import { Heart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTAButton } from "@/components/shared/PhoneCTAButton";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="Picture Perfect Health home">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Heart className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="hidden font-serif text-lg font-semibold tracking-tight text-foreground sm:inline">
            Picture Perfect Health
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  isActive && "text-primary"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <PhoneCTAButton size="default" />
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
