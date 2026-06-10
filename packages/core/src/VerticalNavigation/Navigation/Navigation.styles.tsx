import { createClasses } from "@hitachivantara/uikit-react-utils";
import { theme } from "@hitachivantara/uikit-styles";

export const { staticClasses, useClasses } = createClasses(
  "HvVerticalNavigationTree",
  {
    root: {
      display: "block",
      overflowY: "auto",
    },
    list: {},
    listItem: {},
    collapsed: {
      display: "none",
    },
    popup: {
      boxShadow: `inset 5px 0 5px -3px ${theme.colors.shad1}`,
    },
    navigationPopup: {
      boxShadow: `inset 5px 0 5px -3px ${theme.colors.shad1}`,
    },
  },
);
