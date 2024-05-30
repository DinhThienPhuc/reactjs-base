import React, { memo } from "react";

import { Typography } from "@phantomthief-react/components.typography";
import { FONT } from "@phantomthief-react/utils.constants";
import useBlock from "@phantomthief-react/hooks.block";
import { HELPER_TEXT_VARIANT } from "./_constants";
import { IHelperTextProps } from "./_types";
import { Styled } from "./_style";
import clsx from "clsx";

export const HelperText = memo(
  ({
    className,
    children = "",
    variant = HELPER_TEXT_VARIANT.STANDARD,
    isError = false,
    order = 0,
    ...restProps
  }: IHelperTextProps) => {
    const textColor = useBlock(() => {
      if (isError) {
        return "#f44336";
      }
      return "#ffffffb3";
    });

    if (!children) {
      return null;
    }

    return (
      <Styled.Container
        {...restProps}
        $variant={variant}
        $order={order}
        className={clsx(
          "helper-text",
          `helper-text--variant-${variant}`,
          `helper-text--order-${order}`,
          isError && "helper-text--error",
          className,
        )}
        data-testid="helper-text"
      >
        <Typography color={textColor} size={12} font={FONT.VERNADA}>
          {children}
        </Typography>
      </Styled.Container>
    );
  },
);

HelperText.displayName = "HelperText";
