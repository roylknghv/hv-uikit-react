import {
  HvOverflowTooltip,
} from "@hitachivantara/uikit-react-core";

import preview from "../../../../.storybook/preview";

const meta = preview.meta({
  title: "Components/Overflow Tooltip",
  component: HvOverflowTooltip,
});

export const Main = meta.story({
  args: {
    open: true,
    placement: "top",
    data: "This is a very long text that should be cut because it so long that it doesn't fit",
    paragraphOverflow: false,
  },
  argTypes: {
    classes: { control: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center mx-auto h-200px max-w-200px">
        {Story()}
      </div>
    ),
  ],
  render: (args) => {
    return <HvOverflowTooltip {...args} />;
  },
});

const makeText = (str: string) =>
  `This is a ${str} long text that should be cut because it doesn't fit`;

export const Test = meta.story({
  args: {
    data: makeText("extremely ".repeat(12)),
  },
  decorators: [
    (Story) => (
      <div className="grid gap-xs p-xs w-400px bg-infoDimmed overflow-auto resize">
        {Story()}
      </div>
    ),
  ],
  play: async ({ canvas, userEvent }) => {
    await userEvent.hover(canvas.getByTestId("test"));
  },
  render: (args) => {
    return (
      <>
        <HvOverflowTooltip {...args} data={makeText("")} />
        <HvOverflowTooltip paragraphOverflow {...args} />
        <HvOverflowTooltip data-testid="test" {...args} placement="bottom" />
      </>
    );
  },
});
