import { HELPER_TEXT_VARIANT } from "./_constants";
import { IHelperTextProps } from "./_types";
import React from "react";
import { Styled } from "./_style";
import { Typography } from "@phantomthief/react.components.typography";
import { VERNADA_FONT } from "@phantomthief/react.utils.constants";
import clsx from "clsx";
import useBlock from "@phantomthief/react.hooks.block";

export const HelperText = ({
  className,
  text = "",
  variant = HELPER_TEXT_VARIANT.STANDARD,
  isError = false,
  ...restProps
}: IHelperTextProps) => {
  const textColor = useBlock(() => {
    if (isError) {
      return "#f44336";
    }
    return "#ffffffb3";
  });

  if (!text) {
    return null;
  }

  return (
    <Styled.Container
      {...restProps}
      $variant={variant}
      className={clsx(
        "helper-text",
        `helper-text--variant-${variant}`,
        className,
      )}
      data-testid="helper-text"
    >
      <Typography color={textColor} size={12} font={VERNADA_FONT}>
        {text}
      </Typography>
    </Styled.Container>
  );
};
