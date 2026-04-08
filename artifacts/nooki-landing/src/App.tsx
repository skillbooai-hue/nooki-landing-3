import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { WaitlistProvider } from "@/context/WaitlistContext";
import { WaitlistModal } from "@/components/WaitlistModal";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Rewards } from "@/components/Rewards";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FooterCTA } from "@/components/FooterCTA";

const queryClient = new QueryClient();

function LandingPage() {
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

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WaitlistProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </WaitlistProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
