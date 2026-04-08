import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/context/WaitlistContext";

export function WaitlistModal() {
  const { isOpen, closeModal } = useWaitlist();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
            data-testid="modal-backdrop"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl pointer-events-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              data-testid="waitlist-modal"
            >
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors z-10"
                data-testid="modal-close"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="px-8 pt-10 pb-9">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-4"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You're in!</h3>
                    <p className="text-gray-500 text-base leading-relaxed">
                      Welcome to the Nooki private beta. We'll reach out with early access as soon as we launch in the US.
                    </p>
                    <Button
                      className="mt-7 w-full rounded-full py-6 text-base font-semibold"
                      onClick={closeModal}
                      data-testid="modal-done-btn"
                    >
                      Done
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-7">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight" data-testid="modal-title">
                        Experience the Future of Parenting
                      </h2>
                      <p className="text-gray-500 text-base leading-relaxed">
                        Nooki is launching soon in the US. Secure your spot in the private beta.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} data-testid="modal-form">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition mb-4"
                        data-testid="modal-email-input"
                        autoFocus
                      />
                      <Button
                        type="submit"
                        className="w-full rounded-full py-6 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
                        data-testid="modal-submit-btn"
                      >
                        Join Now
                      </Button>
                    </form>

                    <p className="text-center text-xs text-gray-400 mt-5 leading-relaxed">
                      No spam. Unsubscribe anytime. Beta spots are limited.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
