import { Button } from "@/components/ui/button";

export function FooterCTA() {
  return (
    <>
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-500 to-indigo-500" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Ready to bring peace to your home?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Join thousands of parents who've put Nooki in charge.
            </p>
            
            <Button 
              size="lg" 
              className="rounded-full px-8 py-7 text-lg bg-white text-primary hover:bg-gray-50 shadow-xl w-full sm:w-auto transition-transform hover:scale-105"
              data-testid="footer-cta"
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-medium">
          <div>&copy; 2024 Nooki. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
