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
          "loading-riple",
          `loading-riple-size__${size}`,
          `loading-riple-color__${color}`,
          `loading-riple-sizeunit_${sizeUnit}`,
          className,
        )}
      >
        <div />
        <div />
      </Styled.Ripple>
    </Styled.Container>
  );
};
