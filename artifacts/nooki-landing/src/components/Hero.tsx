import { motion } from "framer-motion";
import { SiTelegram } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-36 md:pb-40">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Your AI Parenting Assistant
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Stop being a "nagging parent". <br className="hidden md:block" />
            Let Nooki do the hard work.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            The AI-bot in Telegram that manages your child's chores. No more shouting, no more screen-time battles. Nooki demands photo-proofs and rewards results.
          </p>

          <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg w-full sm:w-auto shadow-xl hover:shadow-primary/25 transition-all gap-3"
              data-testid="hero-cta"
            >
              <SiTelegram className="text-xl" />
              Start in Telegram for Free
            </Button>
            <p className="text-sm text-muted-foreground/80 font-medium">
              Free forever &bull; No app needed &bull; Setup in 2 minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
