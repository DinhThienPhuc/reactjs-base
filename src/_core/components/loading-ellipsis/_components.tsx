import { ILoadingEllipsisProps } from "./_types";
import React from "react";
import { Styled } from "./_style";
import clsx from "clsx";

export const LoadingEllipsis = ({
  size = 64,
  color = "#00bfff",
  sizeUnit = "px",
  fullScreen = false,
  className,
}: ILoadingEllipsisProps) => (
  <Styled.Container fullScreen={fullScreen} className={className}>
    <Styled.Spinner
      size={size}
      color={color}
      sizeUnit={sizeUnit}
      className={clsx(
        "loading-ellipsis",
        `loading-ellipsis-size__${size}`,
        `loading-ellipsis-color__${color}`,
        `loading-ellipsis-size-unit__${sizeUnit}`,
        `loading-ellipsis-fullScreen__${fullScreen}`,
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
