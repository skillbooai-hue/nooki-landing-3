import { motion } from "framer-motion";
import { Calendar, Bell, Users, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useWaitlist } from "@/context/WaitlistContext";
import { WaitlistModal } from "@/components/WaitlistModal";

const features = [
  {
    icon: Calendar,
    title: "Smart Family Calendar",
    description: "One shared calendar for the whole family. Chores, school events, and activities — all in one place, always in sync.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Bell,
    title: "Automatic Reminders",
    description: "Nooki sends perfectly-timed reminders to each family member. No one forgets, no one has an excuse.",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: Users,
    title: "Family Spaces",
    description: "Create separate spaces for each child. Manage tasks, schedules, and rewards independently for every kid.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

const faqs = [
  {
    question: "How does Nooki Calendar differ from Google Calendar?",
    answer: "Google Calendar is for adults. Nooki Calendar is built for families — it understands chores, rewards, and child-friendly notifications. Your kids will actually use it.",
  },
  {
    question: "Can kids see their own schedule?",
    answer: "Yes. Each child gets their own view with age-appropriate tasks and upcoming events. They see only what's relevant to them.",
  },
  {
    question: "Is Nooki Calendar available on iOS and Android?",
    answer: "Yes, Nooki works on both platforms. Join the waitlist to get early access when we launch.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm"
      data-testid={`faq-item-${index}`}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left text-lg font-medium hover:bg-muted/40 transition-colors"
        onClick={() => setOpen(!open)}
      >
        {q}
        <ChevronDown
          size={20}
          className={`text-muted-foreground transition-transform duration-200 flex-shrink-0 ml-4 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-muted-foreground leading-relaxed text-base">
          {a}
        </div>
      )}
    </div>
  );
}

export function EnglishCalendar() {
  const { openModal } = useWaitlist();

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <nav className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2 font-semibold text-lg tracking-tight">
            <Calendar size={22} className="text-primary" />
            <span>Nooki</span>
          </div>
          <Button
            className="rounded-full px-5"
            onClick={openModal}
            data-testid="nav-waitlist-btn"
          >
            Join the Waitlist
          </Button>
        </div>
      </nav>

      <main>
        <section className="relative py-28 md:py-40 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Family Calendar by Nooki
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-none"
            >
              One calendar.
              <br />
              The whole family.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Nooki syncs chores, schedules, and reminders for every member of your family — automatically. Stop juggling five different apps.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="rounded-full px-10 py-7 text-lg font-semibold shadow-xl shadow-primary/25"
                onClick={openModal}
                data-testid="hero-waitlist-btn"
              >
                Join the Waitlist
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center gap-6 mt-8"
            >
              <button onClick={openModal} data-testid="hero-appstore-btn" aria-label="App Store">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
              </button>
              <button onClick={openModal} data-testid="hero-googleplay-btn" aria-label="Google Play">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10" />
              </button>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Everything your family needs.
              </h2>
              <p className="text-xl text-muted-foreground max-w-xl mx-auto">
                Built for parents who want less chaos and more coordination.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="border-border/50 shadow-md h-full hover:-translate-y-1 transition-transform duration-300">
                    <CardContent className="p-8">
                      <div className={`w-12 h-12 rounded-2xl ${f.color} flex items-center justify-center mb-5`}>
                        <f.icon size={24} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{f.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple pricing.</h2>
              <p className="text-xl text-muted-foreground">Start free. No credit card required.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-border/60 shadow-md">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-2">Basic</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-bold">$0</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {["15 scheduled events/mo", "3 Family Spaces", "Automatic Reminders"].map((feat, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="bg-primary/10 rounded-full p-1 text-primary"><Check size={14} /></div>
                          <span className="font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full rounded-full py-6" onClick={openModal} data-testid="pricing-basic-btn">
                      Join the Waitlist
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="border-primary shadow-xl shadow-primary/10 relative overflow-hidden md:scale-105 z-10">
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                    Most Popular
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-2 text-primary">Premium</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-bold">$4.99</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {["Unlimited scheduled events", "Unlimited Family Spaces", "Bank Integration", "Priority Support"].map((feat, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="bg-primary/10 rounded-full p-1 text-primary flex-shrink-0"><Check size={14} /></div>
                          <span className="font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full rounded-full py-6 shadow-lg shadow-primary/25" onClick={openModal} data-testid="pricing-premium-btn">
                      Join the Waitlist
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Common questions.</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.question} a={faq.answer} index={i} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to bring order to your family?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of families waiting for Nooki Calendar.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-10 py-7 text-base font-semibold"
              onClick={openModal}
              data-testid="footer-waitlist-btn"
            >
              Join the Waitlist
            </Button>
            <p className="text-primary-foreground/50 text-sm mt-10">
              © {new Date().getFullYear()} Nooki. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>

      <WaitlistModal />
    </div>
  );
}
