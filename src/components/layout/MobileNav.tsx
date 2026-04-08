import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { PhoneCTAButton } from "@/components/shared/PhoneCTAButton";
import { siteConfig } from "@/lib/site-config";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] max-w-sm">
        <SheetHeader>
          <SheetTitle>Picture Perfect Health</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile navigation">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-3 text-lg font-medium hover:bg-accent"
          >
            Home
          </Link>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-lg font-medium hover:bg-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 border-t border-border pt-6">
          <PhoneCTAButton size="lg" className="w-full" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
