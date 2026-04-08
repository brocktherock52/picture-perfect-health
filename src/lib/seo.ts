import { siteConfig } from "./site-config";

export interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
}

/**
 * Build a complete set of SEO props for the <Seo> component to consume.
 * Ensures every page has a consistent title pattern, canonical URL, and OG/Twitter meta.
 */
export function buildSeo({ title, description, path, image, type = "website" }: SeoProps) {
  const fullTitle =
    path === "/" ? `${siteConfig.name} — Corporate Wellness That Works` : `${title} — ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || `${siteConfig.url}${siteConfig.ogImage}`;
  return {
    title: fullTitle,
    description,
    url,
    image: ogImage,
    type,
  };
}
