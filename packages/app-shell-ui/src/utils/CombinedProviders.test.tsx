import { ComponentType, PropsWithChildren } from "react";
import { render, waitFor } from "@testing-library/react";
import * as appShellShared from "@hitachivantara/app-shell-shared";

import CombinedProviders from "./CombinedProviders";

const DummyActionComponent1: ComponentType<PropsWithChildren> = ({
  children,
}) => <div aria-label="dummyProviderComponent1">{children}</div>;
const DummyActionComponent2: ComponentType<PropsWithChildren> = ({
  children,
}) => <div aria-label="dummyProviderComponent2">{children}</div>;
const DummyActionComponent3: ComponentType<PropsWithChildren> = ({
  children,
}) => <div aria-label="dummyProviderComponent3">{children}</div>;

interface DummyProviderWithConfigProps extends PropsWithChildren {
  testProp?: string;
}

const DummyProviderWithConfig: ComponentType<DummyProviderWithConfigProps> = ({
  children,
  testProp,
}) => (
  <div aria-label="dummyProviderWithConfig" data-test-prop={testProp}>
    {children}
  </div>
);

const useHvAppShellCombinedProvidersSpy = vi.spyOn(
  appShellShared,
  "useHvAppShellCombinedProviders",
);

describe("CombinedProviders", () => {
  beforeEach(() =>
    useHvAppShellCombinedProvidersSpy.mockReturnValue({
      providers: [
        { key: "1", component: DummyActionComponent1 },
        {
          key: "2",
          component: DummyProviderWithConfig,
          config: { testProp: "test-value" },
        },
        { key: "3", component: DummyActionComponent2 },
        { key: "4", component: DummyActionComponent3 },
      ],
    }),
  );

  it("combines all passed providers, from first to last, wrapping the passed children and config if any", async () => {
    const { getByLabelText } = render(
      <CombinedProviders>
        <div aria-label="dummy" />
      </CombinedProviders>,
    );

    await waitFor(() => {
      const dummyProvider1Element = getByLabelText("dummyProviderComponent1");
      const dummyProvider2Element = getByLabelText("dummyProviderComponent2");
      const dummyProvider3Element = getByLabelText("dummyProviderComponent3");
      const dummyProviderWithConfigElement = getByLabelText(
        "dummyProviderWithConfig",
      );

      expect(dummyProvider1Element).toBeInTheDocument();
      expect(dummyProvider2Element).toBeInTheDocument();
      expect(dummyProvider3Element).toBeInTheDocument();
      expect(dummyProviderWithConfigElement).toBeInTheDocument();
      expect(getByLabelText("dummy")).toBeInTheDocument();
      expect(dummyProvider1Element!.contains(dummyProvider2Element!)).toBe(
        true,
      );
      expect(dummyProvider2Element!.contains(dummyProvider3Element!)).toBe(
        true,
      );
      expect(dummyProvider1Element!.contains(dummyProvider3Element!)).toBe(
        true,
      );
      expect(
        dummyProviderWithConfigElement.getAttribute("data-test-prop"),
      ).toBe("test-value");
    });
  });
});
