import { INavbarProps } from "./_types";
import React from "react";
import { Styled } from "./_style";
import { VERNADA_FONT } from "@phantomthief/react.utils.constants";
import clsx from "clsx";

export const Navbar = ({
  title,
  leftButton,
  rightButton,
  className,
  ...restProps
}: INavbarProps) => {
  return (
    <Styled.Container
      {...restProps}
      className={clsx("navbar", className)}
      data-testid="navbar"
    >
      <Styled.LeftButton
        className="navbar__button navbar__button--left"
        data-testid="navbar-button-left"
      >
        {leftButton}
      </Styled.LeftButton>
      <Styled.Title
        color="#ffffff"
        font={VERNADA_FONT}
        className="navbar__title"
        data-testid="navbar-title"
      >
        {title}
      </Styled.Title>
      <Styled.RightButton
        className="navbar__button navbar__button--right"
        data-testid="navbar-button-right"
      >
        {rightButton}
      </Styled.RightButton>
    </Styled.Container>
  );
};
