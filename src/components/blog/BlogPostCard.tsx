import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UnsplashImage } from "@/components/shared/UnsplashImage";
import type { BlogPostMeta } from "@/types/content";

interface BlogPostCardProps {
  post: BlogPostMeta;
  featured?: boolean;
}

export function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <Link to={`/blog/${post.slug}`} className="group block">
        <Card className="overflow-hidden shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lg">
          <div className="grid lg:grid-cols-2">
            <div className="aspect-[16/10] overflow-hidden lg:aspect-auto">
              <UnsplashImage
                src={post.image}
                alt={post.imageAlt}
                className="h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <Badge variant="secondary" className="w-fit">
                Featured
              </Badge>
              <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground group-hover:text-secondary sm:text-3xl">
                {post.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {post.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {dateFormatted}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readingTime}
                </span>
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lg">
        <div className="aspect-[16/10] overflow-hidden">
          <UnsplashImage
            src={post.image}
            alt={post.imageAlt}
            className="h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <Badge variant="outline" className="w-fit">
            {post.category}
          </Badge>
          <h3 className="mt-3 font-serif text-xl font-semibold text-foreground group-hover:text-secondary">
            {post.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {post.description}
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
            <span>{dateFormatted}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
