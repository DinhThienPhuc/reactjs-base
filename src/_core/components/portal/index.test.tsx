import { render, screen } from "@testing-library/react";

import { Portal } from ".";

describe("Component Portal", () => {
  it("should display success with default props", () => {
    render(
      <Portal>
        <div>Portal content</div>
      </Portal>,
    );
    expect(screen.queryByTestId("portal")).toHaveClass("portal");
  });

  it("should display success with custom props", () => {
    const className = "test-portal";
    render(
      <Portal className={className}>
        <div>Portal content</div>
      </Portal>,
    );
    expect(screen.queryByTestId("portal")).toHaveClass(`portal ${className}`);
  });
});
