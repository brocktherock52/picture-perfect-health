import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AssetImage } from "@/components/shared/AssetImage";
import { Reveal, Stagger, staggerItem } from "@/components/shared/Reveal";

const highlights = [
  "Twelve concrete, science-backed habits",
  "Live virtual or on-site delivery",
  "Includes workbook and 30-day follow-up plan",
  "Tracks behavior change at 30, 60, 90 days",
  "Created and personally led by Dr. Feintuch",
  "Most-requested program in our portfolio",
];

export function TwelveStepsSpotlight() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right" className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-accent via-secondary/20 to-transparent blur-2xl" />
            <motion.div
              className="overflow-hidden rounded-2xl border border-border shadow-soft"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <AssetImage
                src="/twelve-steps.jpg"
                alt="Group of professionals attending a wellness workshop led by Dr. Feintuch"
                className="aspect-[5/4] object-cover"
              />
            </motion.div>
          </Reveal>

          <Reveal direction="left" className="order-1 lg:order-2">
            <Badge variant="secondary" className="mb-4">
              Signature Program
            </Badge>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              The 12 Steps to Wellness Workshop
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Dr. Feintuch's proprietary methodology, refined over three decades and delivered to
              thousands of employees. Twelve concrete habits that compound into lasting health
              change, and the most-requested program in our portfolio.
            </p>

            <Stagger
              className="mt-6 grid gap-3 sm:grid-cols-2"
              stagger={0.06}
              initialDelay={0.1}
            >
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  variants={staggerItem}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </motion.div>
              ))}
            </Stagger>

            <Button asChild size="lg" className="mt-8 shadow-soft">
              <Link to="/services/12-steps-to-wellness">
                Explore the workshop
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
