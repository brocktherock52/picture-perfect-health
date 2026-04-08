export function MapEmbed() {
  return (
    <section className="bg-background py-16">
      <div className="container">
        <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
          <iframe
            title="Picture Perfect Health headquarters in Valley Stream, NY"
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Valley+Stream,NY+11580"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            // Fallback to a Google Maps direct link iframe (no API key required)
            // Replace src above with a real key once available, or use this fallback:
            // src="https://maps.google.com/maps?q=Valley+Stream,NY&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
          {/* Fallback iframe, Google's basic embed which doesn't require an API key. */}
          <noscript>
            <p className="p-4 text-center text-sm text-muted-foreground">
              Headquarters: Valley Stream, New York
            </p>
          </noscript>
        </div>
      </div>
    </section>
  );
}
