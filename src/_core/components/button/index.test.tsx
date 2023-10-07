import { render, screen } from "@testing-library/react";

import { Button } from ".";
import { TEST_INNER_TEXT } from "./constants";

describe("Component Button", () => {
  it("should display success with default props", () => {
    render(<Button>{TEST_INNER_TEXT}</Button>);
    expect(screen.queryByTestId("button")).toHaveClass(
      "button-size__medium button-variant__text button-loading__false",
    );
  });

  it("should display success with custom size", () => {
    const size = "small";
    render(<Button size={size}>{TEST_INNER_TEXT}</Button>);
    expect(screen.queryByTestId("button")).toHaveClass(`button-size__${size}`);
  });

  it("should display success with custom variant", () => {
    const variant = "contained";
    render(<Button variant={variant}>{TEST_INNER_TEXT}</Button>);
    expect(screen.queryByTestId("button")).toHaveClass(
      `button-variant__${variant}`,
    );
  });

  it("should display success with custom loading", () => {
    const loading = true;
    render(<Button loading={loading}>{TEST_INNER_TEXT}</Button>);
    expect(screen.queryByTestId("button")).toHaveClass(
      `button-loading__${loading}`,
    );
    expect(screen.queryByTestId("button")).not.toHaveTextContent("Click");
  });
});
