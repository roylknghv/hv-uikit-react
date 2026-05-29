import { createClasses } from "@hitachivantara/uikit-react-utils";
import { theme } from "@hitachivantara/uikit-styles";

export const { staticClasses, useClasses } = createClasses(
  "HvVerticalNavigationSection",
  {
    root: {
      display: "block",
      overflowY: "auto",
      flexShrink: 0,
    },
    list: {},
    listItem: {},
    seeAll: {
      width: "100%",
      borderColor: theme.colors.borderStrong,
      color: `unset`,
      backgroundColor: "transparent!important",
    },
    extraItemsWrapper: {
      display: "grid",
      gridTemplateRows: "0fr",
      overflow: "hidden",
      transition: "grid-template-rows 250ms ease",
    },
    extraItems: {
      minHeight: 0,
      overflow: "hidden",
    },
  },
);
