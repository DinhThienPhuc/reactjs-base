import { ILabelProps } from "./_types";
import { LABEL_VARIANT } from "./_constants";
import React from "react";
import { Styled } from "./_style";
import clsx from "clsx";
import useWhyDidYouUpdate from "@phantomthief/react.hooks.why-did-you-update";

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
  useWhyDidYouUpdate("Label", {
    className,
    content,
    required,
    disabled,
    hiddenLabel,
    variant,
    isLabelCollapsed,
    ...restProps,
  });

  if (hiddenLabel) {
    return null;
  }

  return (
    <Styled.Container
      {...restProps}
      $variant={variant}
      $isLabelCollapsed={isLabelCollapsed}
      color={disabled ? "#ffffff80" : "#ffffff"}
      size={16}
      className={clsx(
        "label",
        `label--${variant}`,
        `label__collapsed--${isLabelCollapsed}`,
        `label__disabled--${disabled}`,
        `label__required--${required}`,
        className,
      )}
      data-testid="label"
    >
      {content} {required ? "*" : ""}
    </Styled.Container>
  );
};
