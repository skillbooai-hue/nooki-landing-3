import { motion } from "framer-motion";
import { Shield, Repeat, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
  {
    title: "The Screen Time War",
    description: "Family Link is bypassed, and hard locks cause resentment and sneaky workarounds. Nobody wins.",
    icon: Shield,
  },
  {
    title: "The Broken Record",
    description: "You're tired of repeating the same instructions 10 times a day. You're a parent, not a broken alarm clock.",
    icon: Repeat,
  },
  {
    title: "The Ghost Chores",
    description: "Kids say they cleaned up, but you find a mess under the bed. \"I did it!\" means nothing without proof.",
    icon: Search,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Problem() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Every parent knows this feeling.
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-4 text-muted-foreground">
                    <problem.icon size={24} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
