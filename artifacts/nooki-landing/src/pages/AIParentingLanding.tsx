import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Rewards } from "@/components/Rewards";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FooterCTA } from "@/components/FooterCTA";
import { WaitlistModal } from "@/components/WaitlistModal";

export function AIParentingLanding() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <NavBar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Rewards />
        <Pricing />
        <FAQ />
      </main>
      <FooterCTA />
      <WaitlistModal />
    </div>
  );
}
