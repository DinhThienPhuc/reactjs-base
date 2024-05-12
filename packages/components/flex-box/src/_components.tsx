import React, { useMemo } from "react";

import { capitalize } from "@phantomthief-react/utils.helpers";
import { IFlexBoxProps } from "./_types";
import { Styled } from "./_style";
import clsx from "clsx";

export const FlexBox = ({
  children,
  className,
  flexDirection = "row",
  alignItems = "center",
  justifyContent = "center",
  variant = "div",
  ...restProps
}: IFlexBoxProps) => {
  const StyledTag = useMemo(() => {
    const styledTagProperty = capitalize(variant) as keyof typeof Styled;
    return Styled[styledTagProperty];
  }, [variant]);

  return (
    <StyledTag
      {...restProps}
      $flexDirection={flexDirection}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      className={clsx(
        "flex-box",
        `flex-box--direction-${flexDirection}`,
        `flex-box--alignItems-${alignItems}`,
        `flex-box--justifyContent-${justifyContent}`,
        `flex-box--variant-${variant}`,
        className,
      )}
      data-testid="flex-box"
    >
      {children}
    </StyledTag>
  );
};
