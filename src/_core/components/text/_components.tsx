import React, { useMemo } from "react";

import { ITextProps } from "./_types";
import { Styled } from "./_style";
import { capitalized } from "@phantomthief/react.utils.helpers";
import cx from "classnames";

export const Text = ({
  variant = "span",
  size = 14,
  bold = 400,
  color = "inherit",
  className,
  children,
}: ITextProps) => {
  const StyledTag = useMemo(() => {
    const styledTagProperty = capitalized(variant) as keyof typeof Styled;
    return Styled[styledTagProperty];
  }, [variant]);

  return (
    <StyledTag
      size={size}
      bold={bold}
      color={color}
      className={cx(
        "text",
        `text-variant__${variant}`,
        `text-size__${size}`,
        `text-bold__${bold}`,
        `text-color__${color}`,
        className,
      )}
      data-testid="text"
    >
      {children}
    </StyledTag>
  );
};
