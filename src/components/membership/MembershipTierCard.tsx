import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WhopCheckoutButton } from "./WhopCheckoutButton";
import { cn } from "@/lib/utils";

export interface MembershipTier {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  primary?: boolean;
}

interface MembershipTierCardProps {
  tier: MembershipTier;
}

export function MembershipTierCard({ tier }: MembershipTierCardProps) {
  return (
    <Card
      className={cn(
        "relative flex h-full flex-col p-8 shadow-soft",
        tier.primary && "border-2 border-secondary"
      )}
    >
      {tier.primary && (
        <Badge variant="secondary" className="absolute -top-3 left-1/2 -translate-x-1/2">
          Most popular
        </Badge>
      )}

      <h3 className="font-serif text-2xl font-semibold text-foreground">{tier.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-serif text-4xl font-semibold text-foreground">{tier.price}</span>
        <span className="text-sm text-muted-foreground">/{tier.cadence}</span>
      </div>

      <ul className="mt-6 flex-1 space-y-3 text-sm">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <WhopCheckoutButton
        plan={tier.name}
        primary={tier.primary}
        className="mt-8 w-full"
      />
    </Card>
  );
}
