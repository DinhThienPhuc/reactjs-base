import { ILoadingRippleProps } from "./_types";
import { Styled } from "./_style";
import React from "react";
import clsx from "clsx";

export const LoadingRipple = ({
  size = 80,
  color = "#00bfff",
  fullScreen = false,
  className,
  ...restProps
}: ILoadingRippleProps) => (
  <Styled.Container
    {...restProps}
    $fullScreen={fullScreen}
    className={clsx(
      "loading-ripple",
      `loading-ripple--size-${size}`,
      `loading-ripple--color-${color}`,
      fullScreen && "loading-ripple--fullScreen",
      className,
    )}
    data-testid="loading-ripple"
  >
    <Styled.Ripple $size={size} $color={color} className="loading-ripple-inner">
      <span />
      <span />
    </Styled.Ripple>
  </Styled.Container>
);
