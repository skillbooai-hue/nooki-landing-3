import { useState } from "react";
import { Menu, X, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/context/WaitlistContext";
import { trackWaitlistClick } from "@/lib/analytics";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useWaitlist();

  function handleCTA() {
    trackWaitlistClick();
    setIsOpen(false);
    openModal();
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border/40">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2" data-testid="nav-logo">
          <div className="bg-primary/10 p-1.5 rounded-lg text-primary">
            <Smartphone size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight">Nooki</span>
        </div>

        <div className="hidden md:flex items-center">
          <Button
            onClick={handleCTA}
            className="rounded-full px-6 font-medium shadow-sm hover:shadow-md transition-all"
            data-testid="nav-cta-desktop"
          >
            Join the Waitlist
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="nav-mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden p-4 bg-background border-b border-border shadow-lg absolute w-full left-0 top-16">
          <Button className="w-full rounded-full" onClick={handleCTA} data-testid="nav-cta-mobile">
            Join the Waitlist
          </Button>
        </div>
      )}
    </nav>
  );
}
