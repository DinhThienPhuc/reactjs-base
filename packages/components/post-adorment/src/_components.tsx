import { Typography } from "@phantomthief-react/components.typography";
import { XCircle as IconXCircle } from "react-feather";
import { POST_ADORMENT_VARIANT } from "./_constants";
import { FONT } from "@phantomthief-react/utils";
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
  typographyProps,
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

  const textProps = {
    ...typographyProps,
    size: 16,
    font: FONT.VERNADA,
    className: "post-adorment__text",
    "data-testid": "post-adorment-text",
  };

  if (clear) {
    return (
      <Styled.Container {...containerProps} onClick={clear}>
        <Typography {...textProps} variant="button">
          {clearIcon ?? (
            <IconXCircle
              width={20}
              height={20}
              data-testid="post-adorment-icon-close"
            />
          )}
        </Typography>
      </Styled.Container>
    );
  }

  if (!children) {
    return null;
  }

  return (
    <Styled.Container {...containerProps}>
      <Typography {...textProps}>{children}</Typography>
    </Styled.Container>
  );
};
