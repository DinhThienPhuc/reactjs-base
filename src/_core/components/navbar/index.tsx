import { INavbarProps } from "./types";
import React from "react";
import { Styled } from "./style";
import cx from "classnames";

export const Navbar = ({
  title,
  leftButton,
  rightButton,
  className,
}: INavbarProps) => {
  return (
    <Styled.Container className={cx("navbar", className)} data-testid="navbar">
      <Styled.LeftButton
        className="navbar-button navbar-button__left"
        data-testid="navbar-button-left"
      >
        {leftButton}
      </Styled.LeftButton>
      <Styled.Title className="navbar-title" data-testid="navbar-title">
        {title}
      </Styled.Title>
      <Styled.RightButton
        className="navbar-button navbar-button__right"
        data-testid="navbar-button-right"
      >
        {rightButton}
      </Styled.RightButton>
    </Styled.Container>
  );
};
