import type { ReactNode } from "react";

interface BlogProseProps {
  children: ReactNode;
}

/**
 * Tailwind Typography wrapper for blog post body content.
 * Tunes prose colors to match the brand and adjusts spacing.
 */
export function BlogProse({ children }: BlogProseProps) {
  return (
    <div className="container max-w-3xl py-12 sm:py-16">
      <article className="prose prose-lg prose-slate max-w-none dark:prose-invert prose-headings:font-serif prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-3xl prose-h3:text-xl prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-blockquote:border-secondary prose-blockquote:text-muted-foreground prose-li:my-1">
        {children}
      </article>
    </div>
  );
}
