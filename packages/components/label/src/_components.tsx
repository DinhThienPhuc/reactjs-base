import clsx from "clsx";
import React, { memo } from "react";

import { LABEL_VARIANT } from "./_constants";
import { Styled } from "./_style";
import { ILabelProps } from "./_types";

export const Label = memo(
  ({
    className,
    children = "",
    required = false,
    disabled = false,
    hiddenLabel = false,
    isFocused = false,
    isError = false,
    variant = LABEL_VARIANT.STANDARD,
    isLabelCollapsed,
    ...restProps
  }: ILabelProps) => {
    if (hiddenLabel || !children) {
      return null;
    }

    return (
      <Styled.Container
        {...restProps}
        $variant={variant}
        $isLabelCollapsed={isLabelCollapsed}
        $disabled={disabled}
        $isError={isError}
        $isFocused={isFocused}
        className={clsx(
          "label",
          `label--variant-${variant}`,
          isLabelCollapsed && "label--collapsed",
          disabled && "label--disabled",
          required && "label--required",
          isFocused && "label--focused",
          isError && "label--error",
          hiddenLabel && "label--hidden",
          className,
        )}
        data-testid="label"
      >
        {children} {required ? "*" : ""}
      </Styled.Container>
    );
  },
);

Label.displayName = "Label";
