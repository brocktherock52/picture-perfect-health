import { cn } from "@/lib/utils";

interface UnsplashImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/**
 * Wrapper around <img> that enforces alt text and lazy loading by default.
 * For above-the-fold images, pass priority={true}.
 *
 * All images on this site hotlink Unsplash. To replace with owned imagery,
 * swap the src URL at the call site.
 */
export function UnsplashImage({
  src,
  alt,
  className,
  priority = false,
  ...props
}: UnsplashImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      className={cn("h-auto w-full object-cover", className)}
      {...props}
    />
  );
}
