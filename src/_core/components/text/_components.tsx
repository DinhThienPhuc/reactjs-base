import React, { useMemo } from "react";

import { ITextProps } from "./_types";
import { Styled } from "./_style";
import { capitalize } from "@phantomthief/react.utils.helpers";
import clsx from "clsx";

export const Text = ({
  variant = "span",
  size = 14,
  bold = 400,
  color = "inherit",
  className,
  children,
}: ITextProps) => {
  const StyledTag = useMemo(() => {
    const styledTagProperty = capitalize(variant) as keyof typeof Styled;
    return Styled[styledTagProperty];
  }, [variant]);

  return (
    <StyledTag
      size={size}
      bold={bold}
      color={color}
      className={clsx(
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
