import { Link } from "react-router-dom";
import { ChevronLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { UnsplashImage } from "@/components/shared/UnsplashImage";
import type { BlogPostMeta } from "@/types/content";

interface BlogPostHeaderProps {
  post: BlogPostMeta;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="bg-gradient-to-b from-accent/30 via-background to-background py-12 sm:py-16">
      <div className="container max-w-4xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          All articles
        </Link>

        <div className="mt-6">
          <Badge variant="secondary">{post.category}</Badge>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{post.author}</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {dateFormatted}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-soft">
          <UnsplashImage
            src={post.image}
            alt={post.imageAlt}
            priority
            className="aspect-[16/9] object-cover"
          />
        </div>
      </div>
    </header>
  );
}
