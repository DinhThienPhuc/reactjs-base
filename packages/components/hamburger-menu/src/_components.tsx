import { useSyncStateWithProps } from "@phantomthief-react/hooks";
import { COLOR } from "@phantomthief-react/utils";
import { IHamburgerMenuProps } from "./_types";
import { DEFAULT_VALUE } from "./_constants";
import { Styled } from "./_style";
import React from "react";
import clsx from "clsx";

export const HamburgerMenu = ({
  gap = DEFAULT_VALUE.GAP,
  width = DEFAULT_VALUE.WIDTH,
  height = DEFAULT_VALUE.HEIGHT,
  borderRadius = DEFAULT_VALUE.BORDER_RADIUS,
  color = COLOR.WHITE,
  isStandalone = true,
  active = false,
  className,
  onClick,
  ...restProps
}: IHamburgerMenuProps) => {
  const { currentValue: isActivated, setCurrentValue: setActive } =
    useSyncStateWithProps<boolean>(active, isStandalone);

  const handleToggle = () => {
    setActive(!isActivated);
    onClick?.(!isActivated);
  };

  const barProps = {
    $isActivated: isActivated,
    $gap: gap,
    $width: width,
    $height: height,
    $borderRadius: borderRadius,
    $color: color,
    className: clsx(
      "hamburger-menu__bar",
      isActivated && "hamburger-mene__bar--active",
      `hambuger-menu__bar--gap-${gap}`,
      `hambuger-menu__bar--width-${width}`,
      `hambuger-menu__bar--height-${height}`,
      `hambuger-menu__bar--border-radius-${borderRadius}`,
      `hambuger-menu__bar--color-${color}`,
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
