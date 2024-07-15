import clsx from "clsx";
import React, { FC, useMemo } from "react";

import { capitalize } from "@phantomthief-react/utils";

import { Styled } from "./_style";
import { IStyledTypographyProps, ITypographyProps } from "./_types";

export const Typography = ({
  variant = "span",
  size = "inherit",
  bold = 400,
  color = "inherit",
  font = "inherit",
  align = "inherit",
  className,
  children,
  ...restProps
}: ITypographyProps) => {
  const StyledTag = useMemo<FC<IStyledTypographyProps>>(() => {
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
      $align={align}
      className={clsx(
        "typography",
        `typography__variant--${variant}`,
        `typography__size--${size}`,
        `typography__bold--${bold}`,
        `typography__color--${color}`,
        `typography__font--${font}`,
        `typography__align--${align}`,
        className,
      )}
      data-testid="typography"
    >
      {children}
    </StyledTag>
  );
};
