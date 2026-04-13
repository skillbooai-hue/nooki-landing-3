import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is my child's data safe?",
    answer: "Nooki only processes messages and tasks sent directly through the app. We never store personal conversations or share data with third parties. All data is encrypted in transit and at rest.",
  },
  {
    question: "Is Nooki available on iOS and Android?",
    answer: "We are currently preparing for our beta launch. Join the waitlist to get early access for both Apple and Android devices.",
  },
  {
    question: "How is Nooki different from Family Link?",
    answer: "While Family Link focuses on device restrictions, Nooki acts as an intelligent assistant. We help children learn time management and responsibility through automated chores and rewards, rather than just locking screens.",
  },
  {
    question: "Does this require any special setup?",
    answer: "Setup takes about 2 minutes. Download the app, create a family space, and add your children. Nooki handles the rest — no complicated configuration needed.",
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center text-foreground">
            Common questions.
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="bg-card px-6 py-2 rounded-2xl border border-border/50 shadow-sm"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="text-lg font-medium hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
