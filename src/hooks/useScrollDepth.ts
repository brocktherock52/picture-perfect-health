import { useEffect, useState } from "react";

/**
 * Returns true once the user has scrolled past the given percentage of the page.
 * Used to trigger the lead capture modal once per session.
 */
export function useScrollDepth(percentage = 50) {
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = total > 0 ? scrolled / total : 0;
      if (ratio * 100 >= percentage) {
        setReached(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [percentage]);

  return reached;
}
