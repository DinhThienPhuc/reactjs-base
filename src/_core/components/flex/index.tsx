import { IFlexProps } from "./types";
import React from "react";
import cx from "classnames";
import { useLogic } from "./useLogic";

export const Flex = ({
  children,
  className,
  flexDirection = "row",
  alignItems = "center",
  justifyContent = "center",
  variant = "div",
  ...props
}: IFlexProps) => {
  const StyledTag = useLogic({ variant });

  return (
    <StyledTag
      {...props}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      className={cx(
        "flex",
        `flex-direction__${flexDirection}`,
        `flex-align-items__${alignItems}`,
        `flex-justify-content__${justifyContent}`,
        className,
      )}
      data-testid="flex"
    >
      {children}
    </StyledTag>
  );
};
