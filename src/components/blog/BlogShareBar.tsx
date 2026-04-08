import { useState } from "react";
import { Link2, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface BlogShareBarProps {
  title: string;
  url: string;
}

export function BlogShareBar({ title, url }: BlogShareBarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy link");
    }
  };

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`;

  return (
    <div className="container max-w-3xl">
      <div className="flex items-center justify-between border-y border-border py-4">
        <p className="text-sm font-semibold text-foreground">Share this article</p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            aria-label="Copy article link"
          >
            <Link2 className="h-4 w-4" />
            {copied ? "Copied" : "Copy link"}
          </Button>
          <Button asChild variant="outline" size="sm">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share "${title}" on LinkedIn`}
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
