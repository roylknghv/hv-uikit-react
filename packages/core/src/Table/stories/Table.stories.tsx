import { useArgs } from "storybook/preview-api";
import { setupChromatic } from "@hitachivantara/internal";
import {
  HvTable,
  HvTableBody,
  HvTableCell,
  HvTableContainer,
  HvTableHead,
  HvTableHeader,
  HvTableRow,
} from "@hitachivantara/uikit-react-core";

import preview from "../../../../../.storybook/preview";
import { AllColumnRenderers } from "./AllColumnRenderers";
import { ColumnResize } from "./TableHooks/ColumnResize";
import { TestStickyHeaders as TestHeadersStory } from "./TableHooks/TableHooks.stories";
import { UseHvGroupBy } from "./TableHooks/UseHvGroupBy";
import { CompleteTableSection } from "./TableSamples/CompleteTableSection";
import { GroupedRows as GroupedRowsStory } from "./TableSamples/GroupedRows";
import { ListRow as ListRowStory } from "./TableSamples/ListRow";
import { Main as MainStory } from "./TableSamples/Main";
import { NoData as NoDataStory } from "./TableSamples/NoData";
import { SimpleTable as SimpleTableStory } from "./TableSamples/SimpleTable";
import { TableEditable } from "./TableSamples/TableEditable";

const meta = preview.meta({
  title: "Visualizations/Table",
  tags: ["skipTestRunner"],
  component: HvTable,

  // @ts-ignore https://github.com/storybookjs/storybook/issues/23170
  subcomponents: {
    HvTableContainer,
    HvTableRow,
    HvTableHead,
    HvTableHeader,
    HvTableBody,
    HvTableCell,
  },
});

export const Main = meta.story({
  args: {
    stickyColumns: false,
    stickyHeader: false,
    variant: "default",
  },
  argTypes: {
    classes: { control: { disable: true } },
    component: { control: { disable: true } },
  },
  render: () => {
    const [args] = useArgs();
    return <MainStory {...args} />;
  },
});

export const NoData = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Table with no data available.",
      },
    },
  },
  render: () => <NoDataStory />,
});

export const SimpleTable = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Simple table that uses `HvTable` features in order to style checkbox and secondary actions columns.",
      },
    },
  },
  render: () => <SimpleTableStory />,
});

export const GroupedRows = meta.story({
  parameters: {
    docs: {
      description: {
        story: "A table example with grouped rows.",
      },
    },
  },
  render: () => <GroupedRowsStory />,
});

export const ListRow = meta.story({
  parameters: {
    docs: {
      description: {
        story: "List row variant of the table.",
      },
    },
  },
  render: () => <ListRowStory />,
});

export const Renderers = meta.story({
  render: () => <AllColumnRenderers />,
});

export const CompleteTable = meta.story({
  render: () => <CompleteTableSection />,
});

export const Editable = meta.story({
  render: () => <TableEditable />,
});

export const Test = meta.story({
  parameters: {
    ...setupChromatic("all"),
  },
  play: async ({ canvas, userEvent }) => {
    // Group by
    await userEvent.click(
      canvas.getAllByRole("button", { name: /collapse/i })[0],
    );

    await userEvent.click(canvas.getByRole("checkbox", { name: "0 / 64" }));
  },
  render: () => (
    <>
      <div className="grid grid-cols-2 gap-sm">
        <div className="flex flex-col gap-sm">
          <SimpleTableStory />
          <UseHvGroupBy />
          <GroupedRowsStory />
          <ListRowStory />
        </div>
        <div className="flex flex-col gap-sm">
          <NoDataStory />
          <ColumnResize />
          {TestHeadersStory.input.render?.()}
          <CompleteTableSection />
        </div>
      </div>
      <br />
      <AllColumnRenderers />
    </>
  ),
});
