import { Reveal } from "@/components/shared/Reveal";
import { StatCounter } from "@/components/shared/StatCounter";

export function StatsStrip() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container">
        <Reveal>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <StatCounter value={40} label="Years in practice" />
            <StatCounter value={50} label="States served" />
            <StatCounter value={250000} suffix="+" label="Employees supported" />
            <StatCounter value={1600} suffix="+" label="At our largest event" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
