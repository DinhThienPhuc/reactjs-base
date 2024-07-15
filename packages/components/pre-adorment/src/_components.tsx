import clsx from "clsx";
import React from "react";

import { PRE_ADORMENT_VARIANT } from "./_constants";
import { Styled } from "./_style";
import { IPreAdormentProps } from "./_types";

export const PreAdorment = ({
  className,
  children = null,
  variant = PRE_ADORMENT_VARIANT.STANDARD,
  hasLabel = false,
  ...restProps
}: IPreAdormentProps) => {
  if (!children) {
    return null;
  }

  return (
    <Styled.Container
      {...restProps}
      $adormentVariant={variant}
      $hasLabel={hasLabel}
      className={clsx(
        "pre-adorment",
        `pre-adorment--variant-${variant}`,
        hasLabel && "pre-adorment--hasLabel",
        className,
      )}
      data-testid="pre-adorment"
    >
      {children}
    </Styled.Container>
  );
};
