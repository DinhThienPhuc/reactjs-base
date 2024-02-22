import React from "react";
import { Styled } from "./_style";
import { TLoadingRippleProps } from "./_types";
import clsx from "clsx";
import useWhyDidYouUpdate from "@phantomthief/react.hooks.why-did-you-update";

export const LoadingRipple = ({
  size = 80,
  color = "#00bfff",
  fullScreen = false,
  className,
}: TLoadingRippleProps) => {
  useWhyDidYouUpdate("LoadingRipple", {
    size,
    color,
    fullScreen,
    className,
  });

  return (
    <Styled.Container fullScreen={fullScreen} className={className}>
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
