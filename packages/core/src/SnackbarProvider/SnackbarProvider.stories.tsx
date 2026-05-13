
import preview from "../../../../.storybook/preview";
import { SnackbarProviderButtons } from "./stories/SnackbarProviderButtons";

const meta = preview.meta({
  title: "Components/Snackbar Provider",
});

export const Provider = meta.story({
  render: () => <SnackbarProviderButtons />,
});
