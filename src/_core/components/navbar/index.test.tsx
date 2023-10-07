import { render, screen } from "@testing-library/react";

import { Navbar } from ".";

describe("Component Navbar", () => {
  it("should display success with default props", () => {
    render(<Navbar />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("should display success with no left button", () => {
    render(<Navbar leftButton={null} />);
    expect(screen.queryByTestId("navbar-button-left")).toBeEmptyDOMElement();
  });

  it("should display success with no right button", () => {
    render(<Navbar rightButton={null} />);
    expect(screen.queryByTestId("navbar-button-right")).toBeEmptyDOMElement();
  });

  it("should display success with corresponding title", () => {
    const title = "Game";
    render(<Navbar title={title} />);
    expect(screen.queryByTestId("navbar-title")).toHaveTextContent(title);
  });
});
