import { IHumburgerMenuProps } from "./_types";
import { DEFAULT_VALUE } from "./_constants";
import React, { useState } from "react";
import { Styled } from "./_style";
import clsx from "clsx";

export const HumburgerMenu = ({
  gap = DEFAULT_VALUE.GAP,
  width = DEFAULT_VALUE.WIDTH,
  height = DEFAULT_VALUE.HEIGHT,
  borderRadius = DEFAULT_VALUE.BORDER_RADIUS,
  className,
  ...restProps
}: IHumburgerMenuProps) => {
  const [isOpened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened((prev) => !prev);
  };

  return (
    <Styled.Container
      {...restProps}
      className={clsx("hamburger-menu", className)}
      data-testid="hamburger-menu"
      onClick={handleToggle}
    >
      <Styled.Bar
        $isOpened={isOpened}
        $gap={gap}
        $width={width}
        $height={height}
        $borderRadius={borderRadius}
        className={clsx(
          "hamburger-menu__bar",
          "hamburger-menu__bar--first",
          isOpened && "hamburger-mene__bar--opened",
          `hambuger-menu__bar--gap-${gap}`,
          `hambuger-menu__bar--width-${width}`,
          `hambuger-menu__bar--height-${height}`,
          `hambuger-menu__bar--border-radius-${borderRadius}`,
          className,
        )}
      />
      <Styled.Bar
        $isOpened={isOpened}
        $gap={gap}
        $width={width}
        $height={height}
        $borderRadius={borderRadius}
        className={clsx(
          "hamburger-menu__bar",
          "hamburger-menu__bar--second",
          isOpened && "hamburger-mene__bar--opened",
          `hambuger-menu__bar--gap-${gap}`,
          `hambuger-menu__bar--width-${width}`,
          `hambuger-menu__bar--height-${height}`,
          `hambuger-menu__bar--border-radius-${borderRadius}`,
          className,
        )}
      />
      <Styled.Bar
        $isOpened={isOpened}
        $gap={gap}
        $width={width}
        $height={height}
        $borderRadius={borderRadius}
        className={clsx(
          "hamburger-menu__bar",
          "hamburger-menu__bar--third",
          isOpened && "hamburger-mene__bar--opened",
          `hambuger-menu__bar--gap-${gap}`,
          `hambuger-menu__bar--width-${width}`,
          `hambuger-menu__bar--height-${height}`,
          `hambuger-menu__bar--border-radius-${borderRadius}`,
          className,
        )}
      />
    </Styled.Container>
  );
};
