import { IFlexProps } from "./types";
import React from "react";
import { useLogic } from "./useLogic";

export const Flex = ({
  children,
  className,
  flexDirection = "row",
  alignItems = "center",
  justifyContent = "center",
  variant = "div",
}: IFlexProps) => {
  const StyledTag = useLogic({ variant });

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
