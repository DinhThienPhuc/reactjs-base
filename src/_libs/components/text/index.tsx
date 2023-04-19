import { ITextProps } from "./types";
import React from "react";
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
    <StyledTag size={size} bold={bold} color={color} className={className}>
      {children}
    </StyledTag>
  );
};
