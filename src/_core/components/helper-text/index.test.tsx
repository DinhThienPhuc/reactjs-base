import { render, screen } from "@testing-library/react";

import { HelperText } from ".";
import { TEST_TEXT } from "./constants";

describe("Component HelperText", () => {
  it("should display success with empty text", () => {
    render(<HelperText />);
    expect(screen.queryByTestId("helper-text")).toHaveClass("helper-text ");
  });

  it("should display success with default props and a helper text", () => {
    render(<HelperText text={TEST_TEXT} />);
    expect(screen.queryByTestId("helper-text")).toHaveClass(
      "helper-text__standard",
    );
    expect(screen.queryByTestId("helper-text")).toHaveTextContent(TEST_TEXT);
  });

  it("should display success with custom variant", () => {
    const filled = "filled";
    render(<HelperText text={TEST_TEXT} variant={filled} />);
    expect(screen.queryByTestId("helper-text")).toHaveClass(
      `helper-text__${filled}`,
    );
  });
});
