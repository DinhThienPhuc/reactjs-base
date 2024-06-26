import { INavbarProps } from "./_types";
import { Styled } from "./_style";
import React from "react";
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
      <Styled.LeftButton className="navbar__button navbar__button--left">
        {leftButton}
      </Styled.LeftButton>
      <Styled.Title className="navbar__title">{title}</Styled.Title>
      <Styled.RightButton className="navbar__button navbar__button--right">
        {rightButton}
      </Styled.RightButton>
    </Styled.Container>
  );
};
