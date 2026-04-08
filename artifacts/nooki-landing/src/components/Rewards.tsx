import { motion } from "framer-motion";
import { CreditCard, Monitor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Rewards() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Real work earns real rewards.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden border-border/60 shadow-lg h-full group">
              <div className="h-2 bg-emerald-500 w-full" />
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CreditCard size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Kaspi Kids Integration</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Earned coins transfer directly to your child's Kaspi Kids card. Real money, real motivation.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="overflow-hidden border-border/60 shadow-lg h-full group">
              <div className="h-2 bg-indigo-500 w-full" />
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-indigo-500/10 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Monitor size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Earned Screen Time</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Kids unlock screen time by completing tasks. Nooki manages the balance automatically.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
