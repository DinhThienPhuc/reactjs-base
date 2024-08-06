import clsx from "clsx";
import React, { memo } from "react";

import useSyncStateWithProps from "@phantompurr-react/hooks.sync-state-with-props";

import { DEFAULT_VALUE } from "./_constants";
import { Styled } from "./_style";
import { IHamburgerMenuProps } from "./_types";

export const HamburgerMenu = memo(
  ({
    gap = DEFAULT_VALUE.GAP,
    width = DEFAULT_VALUE.WIDTH,
    height = DEFAULT_VALUE.HEIGHT,
    borderRadius = DEFAULT_VALUE.BORDER_RADIUS,
    color = "#ffffff",
    isStandalone = true,
    active = false,
    className,
    onClick,
    htmlAttributes,
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
        isActivated && "hamburger-menu__bar--active",
      ),
    };

    return (
      <Styled.Container
        {...htmlAttributes}
        className={clsx(
          "hamburger-menu",
          `hamburger-menu--gap-${gap}`,
          `hamburger-menu--width-${width}`,
          `hamburger-menu--height-${height}`,
          `hamburger-menu--border-radius-${borderRadius}`,
          `hamburger-menu--color-${color}`,
          isActivated && "hamburger-menu--active",
          className,
        )}
        onClick={handleToggle}
      >
        <Styled.Bar {...barProps} />
        <Styled.Bar {...barProps} />
        <Styled.Bar {...barProps} />
      </Styled.Container>
    );
  },
);

HamburgerMenu.displayName = "HamburgerMenu";
