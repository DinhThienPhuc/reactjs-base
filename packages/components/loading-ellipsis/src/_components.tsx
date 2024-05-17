import { ILoadingEllipsisProps } from "./_types";
import { Styled } from "./_style";
import React from "react";
import clsx from "clsx";

export const LoadingEllipsis = ({
  size = 12,
  color = "#00bfff",
  fullScreen = false,
  className,
  ...restProps
}: ILoadingEllipsisProps) => (
  <Styled.Container
    {...restProps}
    $fullScreen={fullScreen}
    className={className}
  >
    <Styled.Spinner
      $size={size}
      $color={color}
      className={clsx(
        "loading-ellipsis",
        `loading-ellipsis--size-${size}`,
        `loading-ellipsis--color-${color}`,
        `loading-ellipsis--fullScreen-${fullScreen}`,
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
