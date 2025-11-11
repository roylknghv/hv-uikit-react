import { createContext, useContext } from "react";

import { NavigationMenuItem } from "../../types";

export interface NavigationContextValue {
  selectedMenuItemId: string | undefined;
  rootMenuItemId: string | undefined;
  /** Items visible in the header */
  items: NavigationMenuItem[];
  /** Items visible in the vertical navigation */
  verticalNavigationItems: NavigationMenuItem[];
  hasVerticalNavigation: boolean;
  showHeaderSubMenu: boolean;
  isCompactMode: boolean;
  verticalNavigationMode: VerticalNavigationMode;
  switchVerticalNavigationMode: () => void;
}

export type VerticalNavigationMode = "EXPANDED" | "COLLAPSED" | "CLOSED";

export const NavigationContext = createContext<NavigationContextValue>({
  selectedMenuItemId: undefined,
  rootMenuItemId: undefined,
  items: [],
  verticalNavigationItems: [],
  hasVerticalNavigation: false,
  showHeaderSubMenu: false,
  isCompactMode: false,
  verticalNavigationMode: "EXPANDED",
  switchVerticalNavigationMode: () => {
    // Empty function
  },
});

const useNavigationContext = () => {
  const context = useContext(NavigationContext);

  if (!context) {
    console.error("NavigationContext was used outside of its Provider");
  }

  return context;
};

export default useNavigationContext;
