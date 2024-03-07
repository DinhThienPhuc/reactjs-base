import { ILoadingRippleProps } from "./_types";
import React from "react";
import { Styled } from "./_style";
import clsx from "clsx";
import useWhyDidYouUpdate from "@phantomthief/react.hooks.why-did-you-update";

export const LoadingRipple = ({
  size = 80,
  color = "#00bfff",
  fullScreen = false,
  className,
  ...restProps
}: ILoadingRippleProps) => {
  useWhyDidYouUpdate("LoadingRipple", {
    size,
    color,
    fullScreen,
    className,
    ...restProps,
  });

  return (
    <Styled.Container
      {...restProps}
      $fullScreen={fullScreen}
      className={className}
    >
      <Styled.Ripple
        $size={size}
        $color={color}
        className={clsx(
          "loading-ripple",
          `loading-ripple__size--${size}`,
          `loading-ripple__color--${color}`,
          `loading-ripple__fullScreen--${fullScreen}`,
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
