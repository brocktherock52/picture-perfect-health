import type { ClientLogo } from "@/types";

/**
 * Client logos shown in TrustBar and ClientLogoGrid.
 *
 * Currently rendered as text-only logo placeholders. Before launch, replace with
 * licensed SVG marks from the actual companies (Eric will provide).
 *
 * TODO: replace with real client logo
 */
export const clientLogos: ClientLogo[] = [
  { name: "United Airlines", industry: "Aviation" },
  { name: "GE Healthcare", industry: "Medical Devices" },
  { name: "Quest Diagnostics", industry: "Diagnostics" },
  { name: "Continental Airlines", industry: "Aviation" },
  { name: "Fortune 500 Health System", industry: "Healthcare" },
  { name: "Federal Agency", industry: "Government" },
  { name: "Global Manufacturer", industry: "Industrial" },
  { name: "Top 10 University", industry: "Education" },
];
