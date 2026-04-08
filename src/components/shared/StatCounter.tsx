import { useInViewCounter } from "@/hooks/useInViewCounter";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function StatCounter({ value, suffix = "", prefix = "", label }: StatCounterProps) {
  const { ref, count } = useInViewCounter(value);
  const formatted = count.toLocaleString("en-US");
  return (
    <div className="text-center">
      <span
        ref={ref}
        className="block font-serif text-4xl font-semibold text-primary tabular-nums sm:text-5xl md:text-6xl"
      >
        {prefix}
        {formatted}
        {suffix}
      </span>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground sm:text-base">
        {label}
      </p>
    </div>
  );
}
