import { IPreAdormentProps } from "./_types";
import { PRE_ADORMENT_VARIANT } from "./_constants";
import React from "react";
import { Styled } from "./_style";
import { VERNADA_FONT } from "@phantomthief/react.utils.constants";
import clsx from "clsx";

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
      size={16}
      font={VERNADA_FONT}
      className={clsx(
        "pre-adorment",
        `pre-adorment--variant-${variant}`,
        `pre-adorment--hasLabel-${hasLabel}`,
        className,
      )}
      data-testid="pre-adorment"
    >
      {children}
    </Styled.Container>
  );
};
