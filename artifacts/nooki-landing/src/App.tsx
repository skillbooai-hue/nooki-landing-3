import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { WaitlistProvider } from "@/context/WaitlistContext";
import { AIParentingLanding } from "@/components/AIParentingLanding";
import { EnglishCalendar } from "@/components/EnglishCalendar";
import { RussianCalendar } from "@/components/RussianCalendar";

const queryClient = new QueryClient();

function getRoot() {
  const hostname = window.location.hostname;
  if (hostname.includes("ru.")) return "ru";
  if (hostname.includes("a.")) return "a";
  if (hostname === "localhost" || hostname.includes("replit.dev") || hostname.includes("repl.co")) return "a";
  return "en";
}

function RootComponent() {
  const root = getRoot();
  if (root === "ru") return <RussianCalendar />;
  if (root === "a") return <AIParentingLanding />;
  return <EnglishCalendar />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WaitlistProvider>
          <RootComponent />
          <Toaster />
        </WaitlistProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
