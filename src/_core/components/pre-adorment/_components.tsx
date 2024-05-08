import { VERNADA_FONT } from "@phantomthief/react.utils.constants";
import { PRE_ADORMENT_VARIANT } from "./_constants";
import { IPreAdormentProps } from "./_types";
import { Styled } from "./_style";
import React from "react";
import clsx from "clsx";

export const PreAdorment = ({
  className,
  content = null,
  variant = PRE_ADORMENT_VARIANT.STANDARD,
}: IPreAdormentProps) => {
  if (!content) {
    return null;
  }

  return (
    <Styled.Container
      variant="span"
      size={16}
      font={VERNADA_FONT}
      adormentVariant={variant}
      className={clsx(
        "pre-adorment",
        `pre-adorment__variant--${variant}`,
        className,
      )}
      data-testid="pre-adorment"
    >
      {content}
    </Styled.Container>
  );
};
