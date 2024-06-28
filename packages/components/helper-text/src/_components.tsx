import { HELPER_TEXT_VARIANT } from "./_constants";
import { IHelperTextProps } from "./_types";
import React, { memo } from "react";
import { Styled } from "./_style";
import clsx from "clsx";

export const HelperText = memo(
  ({
    className,
    children = "",
    variant = HELPER_TEXT_VARIANT.STANDARD,
    isError = false,
    hasLabel = false,
    ...restProps
  }: IHelperTextProps) => {
    if (!children) {
      return null;
    }

    return (
      <Styled.Container
        {...restProps}
        $variant={variant}
        $hasLabel={hasLabel}
        $isError={isError}
        className={clsx(
          "helper-text",
          `helper-text--variant-${variant}`,
          hasLabel && "helper-text--hasLabel",
          isError && "helper-text--error",
          className,
        )}
        data-testid="helper-text"
      >
        {children}
      </Styled.Container>
    );
  },
);

HelperText.displayName = "HelperText";
