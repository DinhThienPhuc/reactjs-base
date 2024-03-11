import { HELPER_TEXT_VARIANT } from "./_constants";
import { IHelperTextProps } from "./_types";
import React from "react";
import { Styled } from "./_style";
import clsx from "clsx";
import useWhyDidYouUpdate from "@phantomthief/react.hooks.why-did-you-update";

export const HelperText = ({
  className,
  text = "",
  variant = HELPER_TEXT_VARIANT.STANDARD,
  ...restProps
}: IHelperTextProps) => {
  useWhyDidYouUpdate("HelperText", {
    className,
    text,
    variant,
    ...restProps,
  });

  return (
    <Styled.Container
      {...restProps}
      $variant={variant}
      color="#ffffffb3"
      size={12}
      className={clsx(
        "helper-text",
        `helper-text__variant--${variant}`,
        className,
      )}
      data-testid="helper-text"
    >
      {text}
    </Styled.Container>
  );
};
