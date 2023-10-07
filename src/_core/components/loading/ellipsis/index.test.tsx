import { render, screen } from "@testing-library/react";

import { LoadingEllipsis } from ".";

describe("Component Loading Ellipsis", () => {
  it("should display success with default props", () => {
    render(<LoadingEllipsis />);
    expect(screen.queryByTestId("loading-ellipsis")).toHaveClass(
      "loading-ellipsis-size__64 loading-ellipsis-color__#00bfff loading-ellipsis-size-unit__px",
    );
  });
});
