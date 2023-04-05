import { ILoadingEllipsisProps } from "./types";
import React from "react";
import { Styled } from "./style";
import cx from "classnames";

export const LoadingEllipsis = ({
  size = 64,
  color = "#00bfff",
  sizeUnit = "px",
  className,
}: ILoadingEllipsisProps) => (
  <Styled.Container className={className}>
    <Styled.Spinner
      size={size}
      color={color}
      sizeUnit={sizeUnit}
      className={cx(
        "loading-ellipsis",
        `loading-ellipsis-size__${size}`,
        `loading-ellipsis-color__${color}`,
        `loading-ellipsis-sizeunit_${sizeUnit}`,
        className,
      )}
    >
      <div />
      <div />
      <div />
      <div />
    </Styled.Spinner>
  </Styled.Container>
);
