import { useArgs } from "storybook/preview-api";
import {
  HvContainer,
  HvPanel,
  HvScrollToHorizontal,
  HvTypography,
} from "@hitachivantara/uikit-react-core";

import preview from "../../../../.storybook/preview";

const meta = preview.meta({
  title: "Components/ScrollToHorizontal",
  component: HvScrollToHorizontal,
});

export const Main = meta.story({
  args: {
    navigationMode: "push",
    position: "sticky",
    tooltipPosition: "top",
    offset: 20,
  },
  argTypes: {
    classes: { control: { disable: true } },
    options: { control: { disable: true } },
  },
  render: () => {
    const [args] = useArgs();
    const options = [
      { label: "Server status summary", value: "mainId1" },
      { label: "Optimization", value: "mainId2" },
      { label: "Performance analysis review", value: "mainId3" },
      { label: "Insights", value: "mainId4" },
    ];

    return (
      <div>
        <HvScrollToHorizontal
          {...args}
          scrollElementId="pageContentId"
          options={options}
        />
        <HvContainer
          id="pageContentId"
          tabIndex={0}
          className="grid gap-md max-h-400px overflow-auto py-md"
        >
          {options.map((option) => (
            <HvPanel
              key={option.value}
              id={option.value}
              className="min-h-400px"
            >
              <HvTypography variant="title1">{option.label}</HvTypography>
              <HvTypography>Content</HvTypography>
            </HvPanel>
          ))}
        </HvContainer>
      </div>
    );
  },
});
