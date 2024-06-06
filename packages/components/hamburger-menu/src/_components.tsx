import { IHamburgerMenuProps } from "./_types";
import { DEFAULT_VALUE } from "./_constants";
import React, { useState } from "react";
import { Styled } from "./_style";
import clsx from "clsx";

export const HamburgerMenu = ({
  gap = DEFAULT_VALUE.GAP,
  width = DEFAULT_VALUE.WIDTH,
  height = DEFAULT_VALUE.HEIGHT,
  borderRadius = DEFAULT_VALUE.BORDER_RADIUS,
  className,
  onClick,
  ...restProps
}: IHamburgerMenuProps) => {
  const [isOpened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened(!isOpened);
    onClick?.(!isOpened);
  };

  const barProps = {
    $isOpened: isOpened,
    $gap: gap,
    $width: width,
    $height: height,
    $borderRadius: borderRadius,
    className: clsx(
      "hamburger-menu__bar",
      isOpened && "hamburger-mene__bar--opened",
      `hambuger-menu__bar--gap-${gap}`,
      `hambuger-menu__bar--width-${width}`,
      `hambuger-menu__bar--height-${height}`,
      `hambuger-menu__bar--border-radius-${borderRadius}`,
      className,
    ),
  };

  return (
    <Styled.Container
      {...restProps}
      className={clsx("hamburger-menu", className)}
      data-testid="hamburger-menu"
      onClick={handleToggle}
    >
      <Styled.Bar {...barProps} />
      <Styled.Bar {...barProps} />
      <Styled.Bar {...barProps} />
    </Styled.Container>
  );
};
