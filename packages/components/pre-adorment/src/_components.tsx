import { Typography } from "@phantomthief-react/components.typography";
import { FONT } from "@phantomthief-react/utils.constants";
import { PRE_ADORMENT_VARIANT } from "./_constants";
import { IPreAdormentProps } from "./_types";
import { Styled } from "./_style";
import React from "react";
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
      className={clsx(
        "pre-adorment",
        `pre-adorment--variant-${variant}`,
        hasLabel && "pre-adorment--hasLabel",
        className,
      )}
      data-testid="pre-adorment"
    >
      <Typography size={16} font={FONT.VERNADA} className="pre-adorment__text">
        {children}
      </Typography>
    </Styled.Container>
  );
};
