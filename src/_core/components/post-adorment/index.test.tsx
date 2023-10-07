import { render, screen } from "@testing-library/react";

import { PostAdorment } from ".";
import { TEST_FN_RETURN_EMPTY_STRING } from "../input/constants";

describe("Component PortAdorment", () => {
  it("should show nothing with default props", () => {
    render(<PostAdorment />);
    expect(screen.queryByTestId("post-adorment")).not.toBeInTheDocument();
  });

  it("should display success with custom props", () => {
    render(<PostAdorment content={<div></div>} />);
    expect(screen.queryByTestId("post-adorment")).toHaveClass(
      "post-adorment post-adorment__standard",
    );
  });

  it("should display success with close icon", () => {
    const variant = "filled";
    render(
      <PostAdorment
        variant={variant}
        content={<div></div>}
        clear={TEST_FN_RETURN_EMPTY_STRING}
      />,
    );
    expect(screen.queryByTestId("post-adorment")).toHaveClass(
      `post-adorment post-adorment__${variant}`,
    );
    expect(screen.getByTestId("post-adorment-icon__close")).toBeInTheDocument();
  });
});
