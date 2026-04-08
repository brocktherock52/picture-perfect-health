import { Button } from "@/components/ui/button";

interface WhopCheckoutButtonProps {
  /** The plan label, e.g. "Individual", "Corporate", "Enterprise" */
  plan: string;
  /** Optional className override */
  className?: string;
  /** Set to true for the "primary/recommended" tier styling */
  primary?: boolean;
}

/**
 * Whop checkout button, currently a placeholder.
 *
 * TODO: Whop, replace the empty href with the real Whop checkout URL for this plan.
 * Get the URL from your Whop dashboard → Products → [Plan] → Checkout link.
 *
 * Example after wiring:
 *   <a href="https://whop.com/checkout/your-product-id">
 *
 * Optionally, swap the <a> for a Whop embed if you want in-page checkout.
 */
export function WhopCheckoutButton({ plan, className, primary = false }: WhopCheckoutButtonProps) {
  // TODO: Whop, replace this href with the real Whop checkout URL
  const whopCheckoutUrl = "#";

  return (
    <Button
      asChild
      size="lg"
      variant={primary ? "default" : "outline"}
      className={className}
      onClick={(e) => {
        if (whopCheckoutUrl === "#") {
          e.preventDefault();
          // eslint-disable-next-line no-console
          console.warn(
            `[WhopCheckoutButton] No checkout URL configured for plan "${plan}". See WhopCheckoutButton.tsx, search for "TODO: Whop".`
          );
        }
      }}
    >
      <a href={whopCheckoutUrl}>Subscribe to {plan}</a>
    </Button>
  );
}
