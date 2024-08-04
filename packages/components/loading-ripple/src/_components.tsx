import clsx from "clsx";
import React from "react";

import { Styled } from "./_style";
import { ILoadingRippleProps } from "./_types";

export const LoadingRipple = ({
  size = 80,
  color = "#00bfff",
  fullScreen = false,
  className,
  htmlAttributes,
}: ILoadingRippleProps) => (
  <Styled.Container
    {...htmlAttributes}
    $fullScreen={fullScreen}
    className={clsx(
      "loading-ripple",
      `loading-ripple--size-${size}`,
      `loading-ripple--color-${color}`,
      fullScreen && "loading-ripple--fullScreen",
      className,
    )}
  >
    <Styled.Ripple $size={size} $color={color} className="loading-ripple-inner">
      <span />
      <span />
    </Styled.Ripple>
  </Styled.Container>
);
