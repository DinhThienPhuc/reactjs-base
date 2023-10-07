import { render, renderHook, screen, waitFor } from "@testing-library/react";

import { FocusEvent } from "react";
import { Input } from ".";
import { TEST_FN_RETURN_EMPTY_STRING } from "./constants";
import { useLogic } from "./useLogic";

describe("Hook useLogic", () => {
  it("should return the result corresponding to the params", async () => {
    const { result } = renderHook(useLogic, {
      initialProps: {
        preAdorment: "Left",
        value: "abc",
        onFocus: TEST_FN_RETURN_EMPTY_STRING,
        onBlur: TEST_FN_RETURN_EMPTY_STRING,
      },
    });
    expect(result.current.isLabelCollapsed).toBe(true);
    expect(typeof result.current.captureOnFocus).toBe("function");
    expect(typeof result.current.captureOnBlur).toBe("function");
    await waitFor(() => {
      result.current.captureOnFocus?.({} as FocusEvent<HTMLElement, Element>);
    });
    expect(result.current.isLabelCollapsed).toBe(true);
  });
});

describe("Component Input", () => {
  it("should display success with default props", () => {
    render(<Input value={undefined} onChange={TEST_FN_RETURN_EMPTY_STRING} />);
    expect(screen.queryByTestId("input")).toHaveClass(
      "input-fullwidth__false input__standard",
    );
    expect(screen.queryByTestId("input-box")).toHaveClass(
      "input-box__standard",
    );
  });

  it("should display success with full width", () => {
    const fullWidth = true;
    render(
      <Input
        value={""}
        onChange={TEST_FN_RETURN_EMPTY_STRING}
        fullWidth={fullWidth}
      />,
    );
    expect(screen.queryByTestId("input")).toHaveClass(
      `input-fullwidth__${fullWidth}`,
    );
  });

  it("should display success with custom variant prop", () => {
    const variant = "outlined";
    render(
      <Input
        value={""}
        onChange={TEST_FN_RETURN_EMPTY_STRING}
        variant={variant}
      />,
    );
    expect(screen.queryByTestId("input")).toHaveClass(`input__${variant}`);
    expect(screen.queryByTestId("input-box")).toHaveClass(
      `input-box__${variant}`,
    );
  });
});
