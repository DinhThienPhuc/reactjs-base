import { ITextProps, TStyledTag } from "./_types";
import React, { useMemo } from "react";

import useWhyDidYouUpdate from "@phantomthief/react.hooks.why-did-you-update";
import { capitalize } from "@phantomthief/react.utils.helpers";
import { Styled } from "./_style";
import clsx from "clsx";

export const Text = ({
  variant = "span",
  size = 14,
  bold = 400,
  color = "inherit",
  font = "inherit",
  className,
  children,
}: ITextProps) => {
  const StyledTag = useMemo<TStyledTag>(() => {
    const styledTagProperty = capitalize(variant) as keyof typeof Styled;
    return Styled[styledTagProperty];
  }, [variant]);

  useWhyDidYouUpdate("Text", {
    variant,
    size,
    bold,
    color,
    font,
    className,
  });

  return (
    <StyledTag
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
