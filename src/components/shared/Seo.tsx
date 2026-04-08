import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  url: string;
  image: string;
  type?: string;
}

/**
 * Wraps react-helmet-async to inject per-page meta tags.
 * Use buildSeo() from @/lib/seo to construct the props.
 */
export function Seo({ title, description, url, image, type = "website" }: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
