import { render, renderHook, screen } from "@testing-library/react";

import { Flex } from ".";
import { TEST_INNER_CHILDREN } from "./constants";
import { useLogic } from "./useLogic";

describe("Hook useLogic", () => {
  it("should return the 'div' HTML tag corresponding to the default variant prop", () => {
    const { result } = renderHook(useLogic, {
      initialProps: {},
    });
    expect(result.current.target).toBe("div");
  });

  it("should return the HTML tag corresponding to the custom variant prop", () => {
    const variant = "span";
    const { result } = renderHook(useLogic, {
      initialProps: { variant: "span" },
    });
    expect(result.current.target).toBe(variant);
  });
});

describe("Component Flex", () => {
  it("should display success with default props", () => {
    render(<Flex>{TEST_INNER_CHILDREN}</Flex>);
    expect(screen.queryByTestId("flex")).toHaveClass(
      "flex-direction__row flex-align-items__center flex-justify-content__center",
    );
  });

  it("should display success with custom flex direction", () => {
    const flexDirection = "column";
    render(<Flex flexDirection={flexDirection}>{TEST_INNER_CHILDREN}</Flex>);
    expect(screen.queryByTestId("flex")).toHaveClass(
      `flex-direction__${flexDirection}`,
    );
  });

  it("should display success with custom justify content", () => {
    const justifyContent = "space-between";
    render(<Flex justifyContent={justifyContent}>{TEST_INNER_CHILDREN}</Flex>);
    expect(screen.queryByTestId("flex")).toHaveClass(
      `flex-justify-content__${justifyContent}`,
    );
  });

  it("should display success with custom align items", () => {
    const alignItems = "flex-start";
    render(<Flex alignItems={alignItems}>{TEST_INNER_CHILDREN}</Flex>);
    expect(screen.queryByTestId("flex")).toHaveClass(
      `flex-align-items__${alignItems}`,
    );
  });
});
