import { INavbarProps } from "./_types";
import React from "react";
import { Styled } from "./_style";
import clsx from "clsx";

export const Navbar = ({
  title,
  leftButton,
  rightButton,
  className,
}: INavbarProps) => {
  return (
    <Styled.Container
      className={clsx("navbar", className)}
      data-testid="navbar"
    >
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
