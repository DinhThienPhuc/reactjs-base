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
    className={clsx(
      "loading-ellipsis",
      `loading-ellipsis--size-${size}`,
      `loading-ellipsis--color-${color}`,
      fullScreen && "loading-ellipsis--fullScreen",
      className,
    )}
    data-testid="loading-ellipsis"
  >
    <Styled.Spinner
      $size={size}
      $color={color}
      className="loading-ellipsis-inner"
    >
      <span />
      <span />
      <span />
      <span />
    </Styled.Spinner>
  </Styled.Container>
);
