import { FocusEvent, MouseEvent } from "react";
import { render, renderHook, screen, waitFor } from "@testing-library/react";

import { Select } from ".";
import { useLogic } from "./useLogic";

const defaultInitialProps = {
  options: [],
  onChange: jest.fn(),
  onFocus: jest.fn(),
  onBlur: jest.fn(),
};

describe("Hook useLogic", () => {
  it("should return the result corresponding to the default params", async () => {
    const { result } = renderHook(useLogic, {
      initialProps: defaultInitialProps,
    });
    expect(result.current.isShowed).toBe(false);
    expect(result.current.isLabelCollapsed).toBe(false);
    expect(result.current.position).toBe(null);
    expect(typeof result.current.displayedOption).toBe("undefined");
    expect(typeof result.current.boxRef).toBe("object");
    expect(typeof result.current.optionGroupRef).toBe("object");
    expect(typeof result.current.handleSelectOption).toBe("function");
    expect(typeof result.current.captureOnFocus).toBe("function");
    expect(typeof result.current.captureOnBlur).toBe("function");
    expect(typeof result.current.toggleListOptions).toBe("function");

    await waitFor(() => {
      result.current.toggleListOptions?.({
        preventDefault: jest.fn(),
      } as unknown as MouseEvent<HTMLDivElement, globalThis.MouseEvent>);
    });
    expect(result.current.isShowed).toBe(true);

    await waitFor(() => {
      result.current.captureOnFocus?.(
        {} as unknown as FocusEvent<HTMLElement, Element>,
      );
    });
  });

  it("should return the result corresponding to the custom params: disabled and have value", async () => {
    const { result } = renderHook(useLogic, {
      initialProps: {
        ...defaultInitialProps,
        disabled: true,
        value: "abc",
        options: [{ label: "Abc", value: "abc" }],
      },
    });
    expect(result.current.isShowed).toBe(false);
    expect(result.current.isLabelCollapsed).toBe(true);
    expect(result.current.displayedOption?.label).toBe("Abc");
    expect(result.current.displayedOption?.value).toBe("abc");

    await waitFor(() => {
      result.current.toggleListOptions?.({
        preventDefault: jest.fn(),
      } as unknown as MouseEvent<HTMLDivElement, globalThis.MouseEvent>);
    });
    expect(result.current.isShowed).toBe(false);

    await waitFor(() => {
      result.current.handleSelectOption?.("def")({
        target: {},
      } as unknown as MouseEvent<HTMLDivElement, globalThis.MouseEvent>);
    });
    expect(result.current.isShowed).toBe(false);
  });
});

describe("Component Select", () => {
  it("should display success with default props", async () => {
    render(
      <>
        <Select options={[]} />
        <div onClick={jest.fn()} data-testid="sibling"></div>
      </>,
    );
    expect(screen.queryByTestId("select")).toHaveClass(
      "select select-fullwidth__false",
    );
    expect(screen.queryByTestId("select-box")).toHaveClass(
      "select-box select-box-fullwidth__false select-box-disabled__false select-box__standard",
    );
  });
});
