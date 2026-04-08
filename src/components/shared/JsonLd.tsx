import { Helmet } from "react-helmet-async";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Inject Schema.org JSON-LD via react-helmet-async.
 * Use schema generators from @/lib/schema to construct the data.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
