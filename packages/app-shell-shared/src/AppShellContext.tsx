import { createContext, useContext } from "react";

import type { HvAppShellConfig } from "./types/Config";
import type { HvAppShellModel } from "./types/Model";

/**
 * The context value that holds both config and model
 * @property config - The original App Shell configuration
 * @property model - The internal App Shell model
 */
export interface HvAppShellContextValue {
  config: HvAppShellConfig;
  model: HvAppShellModel;
}

export const HvAppShellContext = createContext<
  HvAppShellContextValue | undefined
>(undefined);

export const useHvAppShellConfig = (): HvAppShellConfig => {
  const context = useContext(HvAppShellContext);

  if (!context) {
    throw new Error(
      "useHvAppShellConfig must be used within HvAppShellContext.Provider",
    );
  }

  return context.config;
};

export const useHvAppShellModel = (): HvAppShellModel => {
  const context = useContext(HvAppShellContext);

  if (!context) {
    throw new Error(
      "useHvAppShellModel must be used within HvAppShellContext.Provider",
    );
  }

  return context.model;
};
