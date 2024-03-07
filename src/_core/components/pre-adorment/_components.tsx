import { IPreAdormentProps } from "./_types";
import { PRE_ADORMENT_VARIANT } from "./_constants";
import React from "react";
import { Styled } from "./_style";
import { VERNADA_FONT } from "@phantomthief/react.utils.constants";
import clsx from "clsx";
import useWhyDidYouUpdate from "@phantomthief/react.hooks.why-did-you-update";

export const PreAdorment = ({
  className,
  content = null,
  variant = PRE_ADORMENT_VARIANT.STANDARD,
  ...restProps
}: IPreAdormentProps) => {
  useWhyDidYouUpdate("PreAdorment", {
    content,
    variant,
    className,
    ...restProps,
  });

  if (!content) {
    return null;
  }

  return (
    <Styled.Container
      {...restProps}
      $adormentVariant={variant}
      size={16}
      font={VERNADA_FONT}
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
