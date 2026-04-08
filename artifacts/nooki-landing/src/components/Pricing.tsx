import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SiTelegram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export function Pricing() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Simple, fair pricing.
          </h2>
          <p className="text-xl text-muted-foreground">
            Start free. Upgrade when you're ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border/60 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-8 pb-4">
                <h3 className="text-2xl font-semibold mb-2">Basic</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground font-medium">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Free forever</p>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <ul className="space-y-4">
                  {["15 AI events/month", "Up to 3 Spaces", "1 External Calendar"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-full p-1 text-primary">
                        <Check size={16} />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button variant="outline" className="w-full rounded-full py-6 text-base" data-testid="pricing-basic-btn">
                  Start Free in Telegram
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-primary shadow-xl shadow-primary/10 relative overflow-hidden transform md:scale-105 hover:scale-105 md:hover:scale-110 transition-all duration-300 z-10 bg-card">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Most Popular
              </div>
              <CardHeader className="p-8 pb-4">
                <h3 className="text-2xl font-semibold mb-2 text-primary">Premium</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$4.99</span>
                  <span className="text-muted-foreground font-medium">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">For busy households</p>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <ul className="space-y-4">
                  {["150 AI events/month", "Up to 10 Spaces", "Unlimited External Calendars", "Photo & Video Chat"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-full p-1 text-primary">
                        <Check size={16} />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button className="w-full rounded-full py-6 text-base shadow-lg shadow-primary/25" data-testid="pricing-premium-btn">
                  Upgrade to Premium
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
