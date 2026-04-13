import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/context/WaitlistContext";

function AppStoreBadge({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Download on the App Store"
      data-testid="badge-app-store"
      className="inline-block transition-opacity hover:opacity-80 active:opacity-60 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-lg"
    >
      <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="App Store">
        <rect width="135" height="40" rx="8" fill="#000"/>
        <text x="38" y="14" fill="white" fontSize="8" fontFamily="Inter, -apple-system, sans-serif" fontWeight="400">Download on the</text>
        <text x="38" y="28" fill="white" fontSize="14" fontFamily="Inter, -apple-system, sans-serif" fontWeight="600">App Store</text>
        <g transform="translate(10, 8)">
          <path d="M14.4 0C13.2 0 11.6 0.8 10.8 1.8C10.1 2.7 9.5 4 9.7 5.3C11 5.4 12.4 4.5 13.2 3.5C14 2.5 14.5 1.3 14.4 0Z" fill="white"/>
          <path d="M18.7 13.4C18.7 10.1 21.3 8.6 21.4 8.5C19.8 6.2 17.3 5.9 16.4 5.9C14.3 5.7 12.3 7.1 11.2 7.1C10.1 7.1 8.4 5.9 6.7 5.9C4.4 5.9 2.2 7.2 1 9.3C-1.4 13.5 0.4 19.7 2.7 23.1C3.9 24.8 5.3 26.7 7.1 26.6C8.9 26.5 9.5 25.5 11.6 25.5C13.7 25.5 14.2 26.6 16.2 26.6C18.1 26.6 19.3 24.9 20.5 23.2C21.8 21.2 22.4 19.3 22.4 19.2C22.4 19.2 18.7 17.8 18.7 13.4Z" fill="white"/>
        </g>
      </svg>
    </button>
  );
}

function GooglePlayBadge({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Get it on Google Play"
      data-testid="badge-google-play"
      className="inline-block transition-opacity hover:opacity-80 active:opacity-60 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-lg"
    >
      <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google Play">
        <rect width="135" height="40" rx="8" fill="#000"/>
        <text x="38" y="14" fill="white" fontSize="8" fontFamily="Inter, -apple-system, sans-serif" fontWeight="400">GET IT ON</text>
        <text x="38" y="28" fill="white" fontSize="14" fontFamily="Inter, -apple-system, sans-serif" fontWeight="600">Google Play</text>
        <g transform="translate(10, 10)">
          <path d="M1.2 0.5C0.8 0.9 0.5 1.5 0.5 2.3V17.7C0.5 18.5 0.8 19.1 1.2 19.5L1.3 19.6L10.3 10.6V10.4L1.3 0.4L1.2 0.5Z" fill="url(#playGrad1)"/>
          <path d="M13.3 13.7L10.3 10.7V10.4L13.3 7.4L13.4 7.5L17 9.6C18 10.2 18 11.1 17 11.6L13.4 13.7H13.3Z" fill="url(#playGrad2)"/>
          <path d="M13.4 13.6L10.3 10.5L1.2 19.5C1.6 19.9 2.1 19.9 2.8 19.6L13.4 13.6Z" fill="url(#playGrad3)"/>
          <path d="M13.4 7.5L2.8 1.4C2.1 1.1 1.6 1.2 1.2 1.5L10.3 10.5L13.4 7.5Z" fill="url(#playGrad4)"/>
          <defs>
            <linearGradient id="playGrad1" x1="9.5" y1="1.3" x2="-3.1" y2="10" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00A0FF"/>
              <stop offset="1" stopColor="#00C8FF"/>
            </linearGradient>
            <linearGradient id="playGrad2" x1="18.5" y1="10.5" x2="0.1" y2="10.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFD900"/>
              <stop offset="1" stopColor="#FFA700"/>
            </linearGradient>
            <linearGradient id="playGrad3" x1="11.5" y1="12" x2="-1.5" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF3A44"/>
              <stop offset="1" stopColor="#C31162"/>
            </linearGradient>
            <linearGradient id="playGrad4" x1="-1.5" y1="-1" x2="9" y2="7" gradientUnits="userSpaceOnUse">
              <stop stopColor="#32A071"/>
              <stop offset="1" stopColor="#2DA771"/>
            </linearGradient>
          </defs>
        </g>
      </svg>
    </button>
  );
}

export function Hero() {
  const { openModal } = useWaitlist();

  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-36 md:pb-40">
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
            The AI parenting app that manages your child's chores. No more shouting, no more screen-time battles. Nooki demands photo-proofs and rewards results.
          </p>

          <div className="flex flex-col items-center gap-5">
            <Button
              size="lg"
              onClick={() => openModal()}
              className="rounded-full px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-primary/25 transition-all"
              data-testid="hero-waitlist-btn"
            >
              Join the Waitlist
            </Button>

            <div className="flex items-center gap-3 flex-wrap justify-center">
              <AppStoreBadge onClick={() => openModal()} />
              <GooglePlayBadge onClick={() => openModal()} />
            </div>

            <p className="text-sm text-muted-foreground/80 font-medium">
              Coming soon to iOS and Android &bull; Join the exclusive beta
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
