import { defineConfig } from "oxfmt";
// oxlint-disable-next-line no-restricted-imports
import uikitConfig from "@hitachivantara/uikit-config/oxfmt";

export default defineConfig({
  ...uikitConfig,
  ignorePatterns: ["**/*.hbs"],
});
