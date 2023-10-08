import React, { useMemo } from "react";

import { IFlexProps } from "./_types";
import { Styled } from "./_style";
import { capitalized } from "@phantomthief/react.utils.helpers";
import cx from "classnames";

export const Flex = ({
  children,
  className,
  flexDirection = "row",
  alignItems = "center",
  justifyContent = "center",
  variant = "div",
  ...props
}: IFlexProps) => {
  const StyledTag = useMemo(() => {
    const styledTagProperty = capitalized(variant) as keyof typeof Styled;
    return Styled[styledTagProperty];
  }, [variant]);

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
        `flex-variant__${variant}`,
        className,
      )}
      data-testid="flex"
    >
      {children}
    </StyledTag>
  );
};
