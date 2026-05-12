import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UnsplashImage } from "@/components/shared/UnsplashImage";
import type { BlogPostMeta } from "@/types/content";

interface BlogPostCardProps {
  post: BlogPostMeta;
  featured?: boolean;
}

export function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  const reduce = useReducedMotion();
  const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <motion.div
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link to={`/blog/${post.slug}`} className="group block">
          <Card className="overflow-hidden shadow-soft transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="grid lg:grid-cols-[1.05fr,1fr]">
              <div className="aspect-[16/10] overflow-hidden lg:aspect-auto">
                <UnsplashImage
                  src={post.image}
                  alt={post.imageAlt}
                  className="h-full transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="w-fit">
                    Featured
                  </Badge>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {post.category}
                  </span>
                </div>
                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground group-hover:text-secondary sm:text-4xl text-balance">
                  {post.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {post.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {dateFormatted}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readingTime}
                  </span>
                  <span>By {post.author}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                  Read the essay
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </Card>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="h-full"
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -4 }}
    >
      <Link to={`/blog/${post.slug}`} className="group block h-full">
        <Card className="flex h-full flex-col overflow-hidden shadow-soft transition-all hover:shadow-lg">
          <div className="aspect-[16/10] overflow-hidden">
            <UnsplashImage
              src={post.image}
              alt={post.imageAlt}
              className="h-full transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <Badge variant="outline" className="w-fit">
              {post.category}
            </Badge>
            <h3 className="mt-3 font-serif text-xl font-semibold text-foreground group-hover:text-secondary text-balance">
              {post.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {post.description}
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
              <span>{dateFormatted}</span>
              <span>.</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
