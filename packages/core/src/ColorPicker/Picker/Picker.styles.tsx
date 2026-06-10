import { createClasses } from "@hitachivantara/uikit-react-utils";
import { theme } from "@hitachivantara/uikit-styles";

export const { useClasses } = createClasses("HvColorPickerPicker", {
  root: {},
  pickers: {
    display: "flex",
    flexDirection: "column",
    gap: theme.space.sm,
  },
  saturation: {
    width: "232px !important",
    height: "140px !important",
    position: "relative",
    overflow: "visible",

    "& .w-color-saturation-fill": {
      width: "8px !important",
      height: "8px !important",
      boxShadow: `0 0 0 2px ${theme.colors.bgPage}, inset 0 0 1px 1px ${theme.colors.focus}, 0 0 1px 2px ${theme.colors.bgOverlay} !important`,
    },
  },
  hue: {
    height: "8px !important",
    width: "232px !important",
    position: "relative",
    overflow: "visible",

    "& .w-color-alpha-fill": {
      width: "12px !important",
      height: "12px !important",
      backgroundColor: "transparent !important",
      boxShadow: `0 0 2px ${theme.colors.bgOverlay}`,
      marginLeft: "0px",
      border: `2px solid ${theme.colors.bgPage}`,
      borderRadius: theme.radii.full,
      transform: "translate(-6px, -2px) !important",
    },
  },
  title: {
    fontWeight: theme.fontWeights.semibold,
    marginBottom: 8,
  },
});
