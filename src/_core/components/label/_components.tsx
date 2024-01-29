import { ILabelProps } from "./_types";
import { LABEL_VARIANT } from "./_constants";
import React from "react";
import { Styled } from "./_style";
import clsx from "clsx";

export const Label = ({
  className,
  content = "",
  required = false,
  disabled = false,
  hiddenLabel = false,
  variant = LABEL_VARIANT.STANDARD,
  isLabelCollapsed,
}: ILabelProps) => {
  if (hiddenLabel) {
    return null;
  }

  return (
    <Styled.Container
      variant={variant}
      disabled={disabled}
      isLabelCollapsed={isLabelCollapsed}
      className={clsx(
        "label",
        `label__${variant}`,
        `label-collapsed__${isLabelCollapsed}`,
        `label-disabled__${disabled}`,
        `label-required__${required}`,
        className,
      )}
      data-testid="label"
    >
      {content} {required ? "*" : ""}
    </Styled.Container>
  );
};
