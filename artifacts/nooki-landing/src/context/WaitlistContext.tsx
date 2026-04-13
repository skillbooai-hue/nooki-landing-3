import { createContext, useContext, useState } from "react";

interface WaitlistContextValue {
  isOpen: boolean;
  modalMessage: string;
  openModal: (message?: string) => void;
  closeModal: () => void;
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  return (
    <WaitlistContext.Provider
      value={{
        isOpen,
        modalMessage,
        openModal: (message = "") => {
          setModalMessage(message);
          setIsOpen(true);
        },
        closeModal: () => {
          setIsOpen(false);
          setModalMessage("");
        },
      }}
    >
      {children}
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) throw new Error("useWaitlist must be used inside WaitlistProvider");
  return ctx;
}
