import clsx from "clsx";
import React from "react";

import { Styled } from "./_style";
import { ILoadingEllipsisProps } from "./_types";

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
