import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Loading } from "./Loading";

describe("<Loading />", () => {
  it("renders the label", () => {
    const MOCK_LABEL = "MOCK_LABEL";
    render(<Loading label={MOCK_LABEL} />);

    expect(screen.getByText(MOCK_LABEL)).toBeInTheDocument();
  });

  it("renders the aria loading", () => {
    render(<Loading />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
