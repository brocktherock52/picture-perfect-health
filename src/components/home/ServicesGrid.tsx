import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal, Stagger, staggerItem } from "@/components/shared/Reveal";

export function ServicesGrid() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Wellness programs designed for the modern workforce"
            description="From single-day virtual health fairs to year-long custom wellness engagements, every program is built around your population, your culture, and your goals."
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.slug} variants={staggerItem}>
                <Link to={`/services/${service.slug}`} className="group block h-full">
                  <Card className="h-full p-7 transition-all duration-200 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-soft">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
