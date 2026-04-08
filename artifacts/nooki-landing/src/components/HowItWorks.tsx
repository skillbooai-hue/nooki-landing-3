import { motion } from "framer-motion";
import { ClipboardList, Bell, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    num: 1,
    title: "Assign a Chore",
    description: "Simply speak or type what needs to be done. Our AI handles the scheduling, reminders, and follow-through automatically.",
    icon: ClipboardList,
  },
  {
    num: 2,
    title: "Automated Follow-ups",
    description: "Nooki sends smart, persistent notifications to your child's device until the task is started. Patient, relentless, and drama-free.",
    icon: Bell,
  },
  {
    num: 3,
    title: "Photo Verification",
    description: "Your child submits a photo of the completed work. You approve, they get rewarded. No proof — no allowance.",
    icon: Camera,
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            How Nooki works.
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Three simple steps. Zero shouting.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-[2px] bg-border z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20 mb-6 border-4 border-background">
                  {step.num}
                </div>
                
                <Card className="w-full bg-card shadow-lg border-border/50 hover:-translate-y-1 transition-transform duration-300">
                  <CardContent className="p-8 flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                      <step.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
