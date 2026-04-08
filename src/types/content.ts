import type { ReactNode } from "react";

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readingTime: string;
  category: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface BlogPost extends BlogPostMeta {
  content: () => ReactNode;
}
