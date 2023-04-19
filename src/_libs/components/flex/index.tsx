import { IFlexProps } from "./types";
import React from "react";
import { Styled } from "./style";
import { capitalized } from "@phantomthief/react-mui.utils";

export const Flex = ({
  children,
  className,
  flexDirection = "row",
  alignItems = "center",
  justifyContent = "center",
  variant = "div",
}: IFlexProps) => {
  const styledTagProperty = capitalized(variant) as keyof typeof Styled;
  const StyledTag = Styled[styledTagProperty];

  return (
    <StyledTag
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      className={className}
    >
      {children}
    </StyledTag>
  );
};
