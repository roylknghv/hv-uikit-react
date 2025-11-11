import { createContext, useContext } from "react";
import { HvAppShellEventNotification } from "@hitachivantara/app-shell-events";

interface BannerContextValue {
  show: (notification: HvAppShellEventNotification) => void;
  dismiss: (id: string) => void;
}

export const BannerContext = createContext<BannerContextValue>({
  show: () => {
    // Empty function
  },
  dismiss: () => {
    // Empty function
  },
});

const useBannerContext = () => {
  const context = useContext(BannerContext);

  if (!context) {
    console.error("BannerContext was used outside of its Provider");
  }

  return context;
};

export default useBannerContext;
