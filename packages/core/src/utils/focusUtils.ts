import { theme } from "@hitachivantara/uikit-styles";

export const outlineStyles = {
  outline: "none", // remove the default outlines
  boxShadow: `0 0 0 1px ${theme.colors.borderFocus}, 0 0 0 4px ${theme.colors.focus}`,
};
