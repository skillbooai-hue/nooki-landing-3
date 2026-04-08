import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { WaitlistProvider } from "@/context/WaitlistContext";
import { AIParentingLanding } from "@/pages/AIParentingLanding";
import { CalendarEnLanding } from "@/pages/CalendarEnLanding";
import { CalendarRuLanding } from "@/pages/CalendarRuLanding";

const queryClient = new QueryClient();

function getSubdomain(): string {
  if (typeof window === "undefined") return "";
  const hostname = window.location.hostname;
  const parts = hostname.split(".");
  if (parts.length >= 3) return parts[0].toLowerCase();
  return "";
}

function LandingRouter() {
  const subdomain = getSubdomain();

  if (subdomain === "ru") {
    return <CalendarRuLanding />;
  }

  if (subdomain === "a") {
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
