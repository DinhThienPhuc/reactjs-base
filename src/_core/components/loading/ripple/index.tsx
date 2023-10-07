import { ILoadingRippleProps } from "./types";
import React from "react";
import { Styled } from "./style";
import cx from "classnames";

export const LoadingRipple = ({
  size = 80,
  color = "#00bfff",
  sizeUnit = "px",
  fullScreen = false,
  className,
}: ILoadingRippleProps) => {
  return (
    <Styled.Container fullScreen={fullScreen} className={className}>
      <Styled.Ripple
        size={size}
        color={color}
        sizeUnit={sizeUnit}
        className={cx(
          "loading-ripple",
          `loading-ripple-size__${size}`,
          `loading-ripple-color__${color}`,
          `loading-ripple-size-unit__${sizeUnit}`,
          className,
        )}
        data-testid="loading-ripple"
      >
        <div />
        <div />
      </Styled.Ripple>
    </Styled.Container>
  );
};
