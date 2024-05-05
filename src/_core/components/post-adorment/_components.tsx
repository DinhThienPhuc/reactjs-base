import { IPostAdormentProps } from "./_types";
import { XCircle as IconXCircle } from "react-feather";
import { POST_ADORMENT_VARIANT } from "./_constants";
import React from "react";
import { Styled } from "./_style";
import { VERNADA_FONT } from "@phantomthief/react.utils.constants";
import clsx from "clsx";

export const PostAdorment = ({
  className,
  children = null,
  variant = POST_ADORMENT_VARIANT.STANDARD,
  clearIcon = null,
  hasLabel = false,
  clear,
  ...restProps
}: IPostAdormentProps) => {
  const componentProps = {
    ...restProps,
    $adormentVariant: variant,
    $hasLabel: hasLabel,
    size: 16,
    font: VERNADA_FONT,
    className: clsx(
      "post-adorment",
      `post-adorment--variant-${variant}`,
      `post-adorment--hasLabel-${hasLabel}`,
      className,
    ),
    "data-testid": "post-adorment",
  };

  if (clear) {
    return (
      <Styled.Container {...componentProps} variant="button" onClick={clear}>
        {clearIcon ?? (
          <IconXCircle
            width={20}
            height={20}
            data-testid="post-adorment-icon-close"
          />
        )}
      </Styled.Container>
    );
  }

  if (!children) {
    return null;
  }

  return <Styled.Container {...componentProps}>{children}</Styled.Container>;
};
