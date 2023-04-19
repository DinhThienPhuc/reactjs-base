import { ITextProps } from "./types";
import React from "react";
import { Styled } from "./style";
import { capitalized } from "@phantomthief/react-mui.utils";

export const Text = ({
  variant = "span",
  size = 14,
  bold = 400,
  color = "inherit",
  className,
  children,
}: ITextProps) => {
  const styledTagProperty = capitalized(variant) as keyof typeof Styled;
  const StyledTag = Styled[styledTagProperty];

  return (
    <StyledTag size={size} bold={bold} color={color} className={className}>
      {children}
    </StyledTag>
  );
};
