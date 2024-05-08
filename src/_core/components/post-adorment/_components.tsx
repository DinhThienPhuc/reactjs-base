import { VERNADA_FONT } from "@phantomthief/react.utils.constants";
import { XCircle as IconXCircle } from "react-feather";
import { POST_ADORMENT_VARIANT } from "./_constants";
import { IPostAdormentProps } from "./_types";
import { Styled } from "./_style";
import React from "react";
import clsx from "clsx";

export const PostAdorment = ({
  className,
  content = null,
  variant = POST_ADORMENT_VARIANT.STANDARD,
  clearIcon = null,
  clear,
}: IPostAdormentProps) => {
  if (clear) {
    return (
      <Styled.Container
        variant="button"
        size={16}
        font={VERNADA_FONT}
        adormentVariant={variant}
        className={clsx(
          "post-adorment",
          `post-adorment__variant--${variant}`,
          className,
        )}
        onClick={clear}
        data-testid="post-adorment"
      >
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
        "post-adorment",
        `post-adorment__variant--${variant}`,
        className,
      )}
      data-testid="post-adorment"
    >
      {content}
    </Styled.Container>
  );
};
