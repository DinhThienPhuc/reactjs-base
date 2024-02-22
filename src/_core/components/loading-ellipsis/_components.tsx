import React from "react";
import { Styled } from "./_style";
import { TLoadingEllipsisProps } from "./_types";
import clsx from "clsx";
import useWhyDidYouUpdate from "@phantomthief/react.hooks.why-did-you-update";

export const LoadingEllipsis = ({
  size = 12,
  color = "#00bfff",
  fullScreen = false,
  className,
}: TLoadingEllipsisProps) => {
  useWhyDidYouUpdate("LoadingEllipsis", {
    size,
    color,
    fullScreen,
    className,
  });

  return (
    <Styled.Container fullScreen={fullScreen} className={className}>
      <Styled.Spinner
        $size={size}
        $color={color}
        className={clsx(
          "loading-ellipsis",
          `loading-ellipsis__size--${size}`,
          `loading-ellipsis__color--${color}`,
          `loading-ellipsis__fullScreen--${fullScreen}`,
          className,
        )}
        data-testid="loading-ellipsis"
      >
        <div />
        <div />
        <div />
        <div />
      </Styled.Spinner>
    </Styled.Container>
  );
};
