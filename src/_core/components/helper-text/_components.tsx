import { HELPER_TEXT_VARIANT } from "./_constants";
import { IHelperTextProps } from "./_types";
import React from "react";
import { Styled } from "./_style";
import clsx from "clsx";

export const HelperText = ({
  className,
  text = "",
  variant = HELPER_TEXT_VARIANT.STANDARD,
}: IHelperTextProps) => {
  return (
    <Styled.Container
      variant={variant}
      className={clsx("helper-text", `helper-text__${variant}`, className)}
      data-testid="helper-text"
    >
      {text}
    </Styled.Container>
  );
};
