import { HELPER_TEXT_VARIANT } from "./_constants";
import { IHelperTextProps } from "./_types";
import React from "react";
import { Styled } from "./_style";
import { Typography } from "@phantomthief/react.components.typography";
import clsx from "clsx";

export const HelperText = ({
  className,
  text = "",
  variant = HELPER_TEXT_VARIANT.STANDARD,
  ...restProps
}: IHelperTextProps) => {
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
      <Typography color="#ffffffb3" size={12}>
        {text}
      </Typography>
    </Styled.Container>
  );
};
