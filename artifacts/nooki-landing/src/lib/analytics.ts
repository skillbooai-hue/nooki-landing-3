declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function getLandingVersion(): string {
  const hostname = typeof window !== "undefined" ? window.location.hostname : "";
  if (hostname === "ru.yesnooki.com") return "ru_calendar";
  if (hostname === "a.yesnooki.com") return "us_parenting";
  return "en_calendar";
}

export function trackWaitlistClick(): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "join_waitlist_click", {
      landing_version: getLandingVersion(),
    });
  }
}
