import { useParams, Navigate } from "react-router-dom";
import { getPostBySlug, getRelatedPosts } from "@/data/blog/posts";
import { BlogPostHeader } from "@/components/blog/BlogPostHeader";
import { BlogProse } from "@/components/blog/BlogProse";
import { BlogShareBar } from "@/components/blog/BlogShareBar";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { CTASection } from "@/components/shared/CTASection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Seo } from "@/components/shared/Seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildSeo } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const seo = buildSeo({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
  });

  const related = getRelatedPosts(post.slug);
  const fullUrl = `${siteConfig.url}/blog/${post.slug}`;

  return (
    <>
      <Seo {...seo} />
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          slug: post.slug,
          date: post.date,
          author: post.author,
          image: post.image,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ])}
      />

      <BlogPostHeader post={post} />
      <BlogProse>{post.content()}</BlogProse>
      <BlogShareBar title={post.title} url={fullUrl} />

      <section className="bg-muted/30 py-20 sm:py-24">
        <div className="container">
          <SectionHeading eyebrow="Keep reading" title="Related articles" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {related.map((p) => (
              <BlogPostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
