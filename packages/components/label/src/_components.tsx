import React, { memo } from "react";

import { Typography } from "@phantomthief-react/components.typography";
import { useBlock } from "@phantomthief-react/hooks";
import { FONT } from "@phantomthief-react/utils";
import { LABEL_VARIANT } from "./_constants";
import { ILabelProps } from "./_types";
import { Styled } from "./_style";
import clsx from "clsx";

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
    const textColor = useBlock(() => {
      if (disabled) {
        return "#ffffff80";
      }
      if (isError) {
        return "#f44336";
      }
      if (isFocused) {
        return "#90caf9";
      }
      return "#ffffff";
    });

    if (hiddenLabel || !children) {
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
          isLabelCollapsed && "label--collapsed",
          disabled && "label--disabled",
          required && "label--required",
          isFocused && "label--focused",
          isError && "label--error",
          className,
        )}
        data-testid="label"
      >
        <Typography
          color={textColor}
          size={isLabelCollapsed ? 12 : 16}
          font={FONT.VERNADA}
        >
          {children} {required ? "*" : ""}
        </Typography>
      </Styled.Container>
    );
  },
);

Label.displayName = "Label";
