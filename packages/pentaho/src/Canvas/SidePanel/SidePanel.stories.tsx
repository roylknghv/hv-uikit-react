import {
  HvCanvasSidePanel,
} from "@hitachivantara/uikit-react-pentaho";

import preview from "../../../../../.storybook/preview";

const meta = preview.meta({
  title: "Pentaho/Canvas/Side Panel",
  component: HvCanvasSidePanel,
});

export const Main = meta.story({
  args: { defaultOpen: true },
  argTypes: {
    classes: { control: { disable: true } },
    tabs: { control: { disable: true } },
    tab: { control: { disable: true } },
    labels: { control: { disable: true } },
    children: { control: { disable: true } },
  },

  render: (args) => (
    <div className="w-full h-lg bg-bgPage relative">
      <HvCanvasSidePanel {...args}>
        {/* oxlint-disable jsx-a11y/no-noninteractive-tabindex */}
        <div tabIndex={0}>Some content</div>
      </HvCanvasSidePanel>
      <p>Main content</p>
    </div>
  ),
});
