import React, { useMemo } from "react";

import { IFlexProps } from "./_types";
import { Styled } from "./_style";
import { capitalize } from "@phantomthief/react.utils.helpers";
import clsx from "clsx";
import useWhyDidYouUpdate from "@phantomthief/react.hooks.why-did-you-update";

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
    const styledTagProperty = capitalize(variant) as keyof typeof Styled;
    return Styled[styledTagProperty];
  }, [variant]);

  useWhyDidYouUpdate("Flex", {
    children,
    className,
    flexDirection,
    alignItems,
    justifyContent,
    variant,
    ...props,
  });

  return (
    <StyledTag
      {...props}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      className={clsx(
        "flex",
        `flex__direction--${flexDirection}`,
        `flex__alignItems--${alignItems}`,
        `flex__justifyContent--${justifyContent}`,
        `flex__variant--${variant}`,
        className,
      )}
      data-testid="flex"
    >
      {children}
    </StyledTag>
  );
};
