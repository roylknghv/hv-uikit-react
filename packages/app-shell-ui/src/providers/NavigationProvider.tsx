import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useHvAppShellModel } from "@hitachivantara/app-shell-shared";

import useLocalStorage from "../hooks/useLocalStorage";
import useNavigationMenuItems from "../hooks/useNavigationMenuItems";
import {
  findItemById,
  removeHrefFromMenuItemsWithChildren,
} from "../utils/navigationUtil";
import {
  NavigationContext,
  type VerticalNavigationMode,
} from "./hooks/useNavigationContext";

interface NavigationProviderProps extends PropsWithChildren {}

const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const { navigationMode } = useHvAppShellModel();
  const { items, selectedMenuItemId, rootMenuItemId } =
    useNavigationMenuItems();
  const muiTheme = useTheme();

  const isCompactMode = useMediaQuery(muiTheme.breakpoints.down("md"));
  const { value: storedExpanded, setStoredValue: setStoreExpanded } =
    useLocalStorage("NAV_EXPANDED");
  const [isExpanded, setIsExpanded] = useState(
    storedExpanded == null ? true : storedExpanded === "true",
  );
  const [isClosed, setIsClosed] = useState(isCompactMode);
  const [showHeaderSubMenu, setShowHeaderSubMenu] = useState(false);

  const verticalNavigationMode = useMemo<VerticalNavigationMode>(() => {
    if (isCompactMode) {
      return isClosed ? "CLOSED" : "EXPANDED";
    }
    return isExpanded ? "EXPANDED" : "COLLAPSED";
  }, [isClosed, isCompactMode, isExpanded]);

  const verticalNavigationItems = useMemo(() => {
    if (isCompactMode) {
      return items;
    }

    if (navigationMode === "ONLY_LEFT") {
      return removeHrefFromMenuItemsWithChildren(items);
    }

    const itemsToReturn =
      (rootMenuItemId && findItemById(items, rootMenuItemId)?.data) || [];

    return removeHrefFromMenuItemsWithChildren(itemsToReturn);
  }, [items, navigationMode, rootMenuItemId, isCompactMode]);

  const hasVerticalNavigation = useMemo(() => {
    if (isCompactMode) {
      return true;
    }

    if (navigationMode === "ONLY_TOP") {
      return false;
    }

    return verticalNavigationItems && verticalNavigationItems.length > 0;
  }, [navigationMode, verticalNavigationItems, isCompactMode]);

  // sync isMinimized with the stored value
  useEffect(() => {
    setStoreExpanded(String(isExpanded));
  }, [isExpanded, setStoreExpanded]);

  // sync isCompactMode media query
  useEffect(() => {
    setIsClosed(isCompactMode);
  }, [isCompactMode]);

  useEffect(() => {
    setShowHeaderSubMenu(
      navigationMode === "ONLY_TOP" &&
        items.some((item) => item.data && item.data.length > 0),
    );
  }, [navigationMode, items]);

  const switchVerticalNavigationMode = useCallback(() => {
    if (isCompactMode) {
      setIsClosed((prevState) => !prevState);
    } else {
      setIsExpanded((prevState) => !prevState);
    }
  }, [isCompactMode]);

  const value = useMemo(
    () => ({
      selectedMenuItemId,
      rootMenuItemId,
      items,
      verticalNavigationItems,
      hasVerticalNavigation,
      showHeaderSubMenu,
      isCompactMode,
      verticalNavigationMode,
      switchVerticalNavigationMode,
    }),
    [
      selectedMenuItemId,
      rootMenuItemId,
      items,
      verticalNavigationItems,
      hasVerticalNavigation,
      showHeaderSubMenu,
      isCompactMode,
      verticalNavigationMode,
      switchVerticalNavigationMode,
    ],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
