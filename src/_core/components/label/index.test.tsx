import {
  TEST_CONTENT,
  TEST_DISABLED,
  TEST_IS_LABEL_COLLAPSED,
  TEST_VARIANT,
} from "./constants";
import { render, screen } from "@testing-library/react";

import { Label } from ".";

describe("Component Label", () => {
  it("should display success with default props", () => {
    render(<Label isLabelCollapsed={TEST_IS_LABEL_COLLAPSED} />);
    expect(screen.queryByTestId("label")).toHaveClass(
      `label__standard label-disabled__false label-collapsed__${TEST_IS_LABEL_COLLAPSED}`,
    );
  });

  it("should be hidden", () => {
    render(
      <Label
        hiddenLabel
        content={TEST_CONTENT}
        variant={TEST_VARIANT}
        isLabelCollapsed={TEST_IS_LABEL_COLLAPSED}
      />,
    );
    expect(screen.queryByTestId("label")).not.toBeInTheDocument();
  });

  it("should be requirable", () => {
    render(
      <Label
        content={TEST_CONTENT}
        variant={TEST_VARIANT}
        isLabelCollapsed={TEST_IS_LABEL_COLLAPSED}
        required
      />,
    );
    expect(screen.queryByTestId("label")).toHaveTextContent(/^.+\s*\*{1}$/);
  });

  it("should be disabled", () => {
    render(
      <Label
        content={TEST_CONTENT}
        variant={TEST_VARIANT}
        isLabelCollapsed={TEST_IS_LABEL_COLLAPSED}
        disabled={TEST_DISABLED}
      />,
    );
    expect(screen.queryByTestId("label")).toHaveClass(
      `label-disabled__${TEST_DISABLED}`,
    );
  });
});
