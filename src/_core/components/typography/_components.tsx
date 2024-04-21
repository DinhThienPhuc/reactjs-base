import { ITextProps, TStyledTag } from "./_types";
import React, { useMemo } from "react";

import { Styled } from "./_style";
import { capitalize } from "@phantomthief/react.utils.helpers";
import clsx from "clsx";

export const Typography = ({
  variant = "span",
  size = 14,
  bold = 400,
  color = "inherit",
  font = "inherit",
  className,
  children,
  ...restProps
}: ITextProps) => {
  const StyledTag = useMemo<TStyledTag>(() => {
    const styledTagProperty = capitalize(variant) as keyof typeof Styled;
    return Styled[styledTagProperty];
  }, [variant]);

  return (
    <StyledTag
      {...restProps}
      $size={size}
      $color={color}
      $bold={bold}
      $font={font}
      className={clsx(
        "text",
        `text__variant--${variant}`,
        `text__size--${size}`,
        `text__bold--${bold}`,
        `text__color--${color}`,
        `text__font--${font}`,
        className,
      )}
      data-testid="text"
    >
      {children}
    </StyledTag>
  );
};
