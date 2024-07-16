import clsx from "clsx";
import React, { useMemo } from "react";

import { capitalize } from "@phantomthief-react/utils";

import { Styled } from "./_style";
import { IFlexBoxProps } from "./_types";

export const FlexBox = ({
  children,
  className,
  flexDirection = "row",
  alignItems = "center",
  justifyContent = "center",
  variant = "div",
  gap = "0px",
  wrap = "nowrap",
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
      $gap={gap}
      $wrap={wrap}
      className={clsx(
        "flex-box",
        `flex-box--direction-${flexDirection}`,
        `flex-box--alignItems-${alignItems}`,
        `flex-box--justifyContent-${justifyContent}`,
        `flex-box--gap-${gap}`,
        `flex-box--wrap-${wrap}`,
        `flex-box--variant-${variant}`,
        className,
      )}
      data-testid="flex-box"
    >
      {children}
    </StyledTag>
  );
};
