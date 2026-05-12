import { useEffect, useRef, useState } from "react";

/**
 * Editorial custom cursor. Renders a small ring + dot that smoothly trails
 * the mouse. Expands on interactive elements, shows a "Read" or "View" pill
 * on case studies, inverts color over .dark-section blocks.
 *
 * Hidden on touch devices and when prefers-reduced-motion is set.
 */
export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const touch = window.matchMedia("(hover: none)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (touch || reduce) return;

    setEnabled(true);
    document.body.classList.add("cursor-none-host");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      const ring = ringRef.current;
      if (ring) {
        ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const setLabel = (txt: string | null) => {
      const lab = labelRef.current;
      const ring = ringRef.current;
      if (!lab || !ring) return;
      if (txt) {
        lab.textContent = txt;
        lab.style.opacity = "1";
        ring.classList.add("is-pill");
      } else {
        lab.textContent = "";
        lab.style.opacity = "0";
        ring.classList.remove("is-pill");
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const ring = ringRef.current;
      if (!ring) return;

      const onDark = !!target.closest("[data-cursor-invert]");
      ring.classList.toggle("is-invert", onDark);

      const linkLike =
        target.closest("a, button, [role=button], input, textarea, select, [data-cursor-hover]");

      if (target.closest("[data-cursor-read]")) {
        setLabel("Read");
        ring.classList.add("is-large");
        return;
      }
      if (target.closest("[data-cursor-view]")) {
        setLabel("View");
        ring.classList.add("is-large");
        return;
      }
      if (linkLike) {
        ring.classList.add("is-hover");
        ring.classList.remove("is-large");
        setLabel(null);
        return;
      }
      ring.classList.remove("is-hover", "is-large");
      setLabel(null);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.body.classList.remove("cursor-none-host");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="ppr-cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] flex h-9 w-9 items-center justify-center rounded-full border border-foreground/60 transition-[width,height,background,border-color,opacity] duration-200 ease-out"
        style={{ willChange: "transform" }}
      >
        <span
          ref={labelRef}
          className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-0"
        />
      </div>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="ppr-cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-foreground"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
