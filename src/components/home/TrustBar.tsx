import { motion } from "framer-motion";
import { clientLogos } from "@/data/clientLogos";
import { Stagger, staggerItem } from "@/components/shared/Reveal";

export function TrustBar() {
  // TODO: replace with real client logo SVGs once licensed
  return (
    <section className="border-y border-border bg-muted/30 py-10">
      <div className="container">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by teams at
        </p>
        <Stagger
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5"
          stagger={0.06}
        >
          {clientLogos.slice(0, 6).map((logo) => (
            <motion.span
              key={logo.name}
              variants={staggerItem}
              className="font-serif text-base font-semibold uppercase tracking-wide text-muted-foreground/80 transition-colors hover:text-foreground sm:text-lg"
            >
              {logo.name}
            </motion.span>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
