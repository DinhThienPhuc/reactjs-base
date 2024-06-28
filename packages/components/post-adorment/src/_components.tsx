import { Icon } from "@phantomthief-react/components.icon";
import { POST_ADORMENT_VARIANT } from "./_constants";
import { IPostAdormentProps } from "./_types";
import { Styled } from "./_style";
import React from "react";
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
  const containerProps = {
    ...restProps,
    $adormentVariant: variant,
    $hasLabel: hasLabel,
    className: clsx(
      "post-adorment",
      `post-adorment--variant-${variant}`,
      hasLabel && "post-adorment--hasLabel",
      className,
    ),
    "data-testid": "post-adorment",
  };

  if (clear) {
    return (
      <Styled.ButtonContainer {...containerProps} onClick={clear}>
        {clearIcon ?? <Icon name="x" />}
      </Styled.ButtonContainer>
    );
  }

  if (!children) {
    return null;
  }

  return <Styled.Container {...containerProps}>{children}</Styled.Container>;
};
