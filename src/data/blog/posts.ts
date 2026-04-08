import { post as virtualHealthFairsPost } from "./corporate-virtual-health-fairs-2026";
import { post as costsPost } from "./employee-wellness-programs-healthcare-costs";
import { post as twelveStepsPost } from "./12-steps-to-wellness-dr-feintuch";
import { post as screeningsRoiPost } from "./on-site-biometric-screenings-roi";
import type { BlogPost } from "@/types/content";

/**
 * The blog post registry. Every post is a TSX module exporting `post: BlogPost`.
 *
 * To add a new post:
 *  1. Create a new .tsx file in this directory exporting `post: BlogPost`
 *  2. Import it here and add to the array
 *  3. The hub page, post page, sitemap, and related posts all read from this list.
 */
export const posts: BlogPost[] = [
  virtualHealthFairsPost,
  costsPost,
  twelveStepsPost,
  screeningsRoiPost,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  return posts.find((p) => p.featured) || posts[0];
}

export function getRelatedPosts(currentSlug: string, count = 2): BlogPost[] {
  return posts.filter((p) => p.slug !== currentSlug).slice(0, count);
}
