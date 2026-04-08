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
    answer: "Nooki only reads messages sent directly to the bot. We never access your main Telegram chats, store personal conversations, or share data with third parties. All data is encrypted.",
  },
  {
    question: "Does this require a separate app?",
    answer: "No downloads, no new apps. Nooki lives entirely in Telegram, which your family already uses. Setup takes about 2 minutes.",
  },
  {
    question: "How is Nooki different from Family Link?",
    answer: "Family Link blocks apps and creates power struggles. Nooki uses incentives — tasks earn rewards, creating positive habits instead of resentment. No locks, no fights.",
  },
  {
    question: "What if my child doesn't have Telegram?",
    answer: "Setting up a Telegram account is free and takes 2 minutes. Nooki can manage tasks for multiple children under one parent account.",
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
