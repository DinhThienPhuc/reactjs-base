import { IPostAdormentProps } from "./types";
import { XCircle as IconXCircle } from "react-feather";
import { POST_ADORMENT_VARIANT } from "./constants";
import React from "react";
import { Styled } from "./style";
import cx from "classnames";

export const PostAdorment = ({
  className,
  content = null,
  variant = POST_ADORMENT_VARIANT.STANDARD,
  clear,
}: IPostAdormentProps) => {
  if (clear) {
    return (
      <Styled.Container
        variant={variant}
        className={cx("post-adorment", `post-adorment__${variant}`, className)}
        onClick={clear}
        data-testid="post-adorment"
      >
        <IconXCircle
          width={20}
          height={20}
          data-testid="post-adorment-icon__close"
        />
      </Styled.Container>
    );
  }

  if (!content) {
    return null;
  }

  return (
    <Styled.Container
      variant={variant}
      className={cx("post-adorment", `post-adorment__${variant}`, className)}
      data-testid="post-adorment"
    >
      {content}
    </Styled.Container>
  );
};
