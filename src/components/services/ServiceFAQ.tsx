import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { FaqItem } from "@/types";

interface ServiceFAQProps {
  faqs: FaqItem[];
  eyebrow?: string;
  title?: string;
}

export function ServiceFAQ({
  faqs,
  eyebrow = "Frequently asked",
  title = "Questions our buyers ask first.",
}: ServiceFAQProps) {
  return (
    <section className="bg-muted/30 py-20 sm:py-24">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left text-base font-semibold sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
