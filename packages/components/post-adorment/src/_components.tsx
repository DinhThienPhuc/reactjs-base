import clsx from "clsx";
import React, { memo } from "react";

import { Icon } from "@phantomthief-react/components.icon";

import { POST_ADORMENT_VARIANT } from "./_constants";
import { Styled } from "./_style";
import { IPostAdormentProps } from "./_types";

export const PostAdorment = memo(
  ({
    className,
    children = null,
    variant = POST_ADORMENT_VARIANT.STANDARD,
    clearIcon = null,
    hasLabel = false,
    htmlAttributes,
    clear,
  }: IPostAdormentProps) => {
    const containerProps = {
      ...htmlAttributes,
      $adormentVariant: variant,
      $hasLabel: hasLabel,
      className: clsx(
        "post-adorment",
        `post-adorment--variant-${variant}`,
        hasLabel && "post-adorment--hasLabel",
        className,
      ),
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
  },
);

PostAdorment.displayName = "PostAdorment";
