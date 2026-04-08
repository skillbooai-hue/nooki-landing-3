import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { WaitlistProvider } from "@/context/WaitlistContext";
import { AIParentingLanding } from "@/pages/AIParentingLanding";
import { CalendarEnLanding } from "@/pages/CalendarEnLanding";
import { CalendarRuLanding } from "@/pages/CalendarRuLanding";

const queryClient = new QueryClient();

function LandingRouter() {
  const hostname = typeof window !== "undefined" ? window.location.hostname : "";

  if (hostname === "ru.yesnooki.com") {
    return <CalendarRuLanding />;
  }

  if (hostname === "a.yesnooki.com") {
    return <AIParentingLanding />;
  }

  return <CalendarEnLanding />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WaitlistProvider>
          <LandingRouter />
          <Toaster />
        </WaitlistProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
