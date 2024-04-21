import { ILabelProps } from "./_types";
import { LABEL_VARIANT } from "./_constants";
import React from "react";
import { Styled } from "./_style";
import { Typography } from "@phantomthief/react.components.typography";
import clsx from "clsx";

export const Label = ({
  className,
  content = "",
  required = false,
  disabled = false,
  hiddenLabel = false,
  variant = LABEL_VARIANT.STANDARD,
  isLabelCollapsed,
  ...restProps
}: ILabelProps) => {
  if (hiddenLabel || !content) {
    return null;
  }

  return (
    <Styled.Container
      {...restProps}
      $variant={variant}
      $isLabelCollapsed={isLabelCollapsed}
      className={clsx(
        "label",
        `label--${variant}`,
        `label--collapsed-${isLabelCollapsed}`,
        `label--disabled-${disabled}`,
        `label--required-${required}`,
        className,
      )}
      data-testid="label"
    >
      <Typography color={disabled ? "#ffffff80" : "#ffffff"} size={16}>
        {content} {required ? "*" : ""}
      </Typography>
    </Styled.Container>
  );
};
