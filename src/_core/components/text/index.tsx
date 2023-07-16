import { ITextProps } from "./types";
import React from "react";
import cx from "classnames";
import { useLogic } from "./useLogic";

export const Text = ({
  variant = "span",
  size = 14,
  bold = 400,
  color = "inherit",
  className,
  children,
}: ITextProps) => {
  const StyledTag = useLogic({ variant });

  return (
    <StyledTag
      size={size}
      bold={bold}
      color={color}
      className={cx(
        "text",
        `text-size__${size}`,
        `text-bold__${bold}`,
        `text-color__${color}`,
        className,
      )}
    >
      {children}
    </StyledTag>
  );
};
