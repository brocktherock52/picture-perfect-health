import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface PhoneCTAButtonProps {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "default" | "lg" | "xl";
  className?: string;
  showIcon?: boolean;
  label?: string;
}

/**
 * The single canonical phone CTA. Reads from siteConfig, never hardcode the number.
 */
export function PhoneCTAButton({
  variant = "secondary",
  size = "default",
  className,
  showIcon = true,
  label,
}: PhoneCTAButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={cn("font-semibold", className)}>
      <a href={siteConfig.phoneHref} aria-label={`Call ${siteConfig.phoneDisplay}`}>
        {showIcon && <Phone className="h-4 w-4" aria-hidden="true" />}
        {label || siteConfig.phoneDisplay}
      </a>
    </Button>
  );
}
