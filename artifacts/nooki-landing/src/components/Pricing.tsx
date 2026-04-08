import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useWaitlist } from "@/context/WaitlistContext";
import { trackWaitlistClick } from "@/lib/analytics";

const basicFeatures = [
  "15 AI-managed chores/mo",
  "3 Family Spaces",
  "Photo Verification",
  "Earned Screen Time",
];

const premiumFeatures = [
  "150 AI-managed chores/mo",
  "Unlimited Family Spaces",
  "Bank Integration (Greenlight, Step & more)",
  "Priority Support",
  "Photo Verification",
  "Earned Screen Time",
];

export function Pricing() {
  const { openModal } = useWaitlist();

  function handleCTA() {
    trackWaitlistClick();
    openModal();
  }

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
                  {basicFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-full p-1 text-primary flex-shrink-0">
                        <Check size={16} />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button
                  variant="outline"
                  className="w-full rounded-full py-6 text-base"
                  onClick={handleCTA}
                  data-testid="pricing-basic-btn"
                >
                  Join the Waitlist
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
                  {premiumFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-full p-1 text-primary flex-shrink-0">
                        <Check size={16} />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button
                  className="w-full rounded-full py-6 text-base shadow-lg shadow-primary/25"
                  onClick={handleCTA}
                  data-testid="pricing-premium-btn"
                >
                  Join the Waitlist
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
