import { cn } from "@/lib/utils";

interface BackgroundGradientProps {
  className?: string;
  variant?: "hero" | "soft" | "radial";
}

/**
 * Decorative gradient background for hero sections and CTA bands.
 * Pure CSS — no images, no layout shift.
 */
export function BackgroundGradient({ className, variant = "hero" }: BackgroundGradientProps) {
  if (variant === "hero") {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 bg-hero-gradient opacity-95",
          className
        )}
      />
    );
  }

  if (variant === "soft") {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/40 via-background to-background",
          className
        )}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(80%_60%_at_50%_0%,hsl(var(--accent)/0.6),transparent)]",
        className
      )}
    />
  );
}
