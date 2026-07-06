import { createClasses } from "@hitachivantara/uikit-react-utils";
import { theme } from "@hitachivantara/uikit-styles";

export const { useClasses, staticClasses } = createClasses("HvTypography", {
  root: {
    fontFamily: theme.fontFamily.body,
    color: "inherit",
  },
  disabled: {
    color: theme.colors.textDisabled,
  },
  isLink: {
    cursor: "pointer",
    color: theme.colors.textLink,
    textDecoration: "underline",
    "&:hover": {
      color: theme.colors.textLinkHover,
    },
  },
  noWrap: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});
