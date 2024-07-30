import clsx from "clsx";
import React, { memo } from "react";

import { PRE_ADORMENT_VARIANT } from "./_constants";
import { Styled } from "./_style";
import { IPreAdormentProps } from "./_types";

export const PreAdorment = memo(
  ({
    className,
    children = null,
    variant = PRE_ADORMENT_VARIANT.STANDARD,
    hasLabel = false,
    htmlAttributes,
  }: IPreAdormentProps) => {
    if (!children) {
      return null;
    }

    return (
      <Styled.Container
        {...htmlAttributes}
        $adormentVariant={variant}
        $hasLabel={hasLabel}
        className={clsx(
          "pre-adorment",
          `pre-adorment--variant-${variant}`,
          hasLabel && "pre-adorment--hasLabel",
          className,
        )}
      >
        {children}
      </Styled.Container>
    );
  },
);

PreAdorment.displayName = "PreAdorment";
