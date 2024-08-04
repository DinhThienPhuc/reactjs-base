import clsx from "clsx";
import React, { useMemo } from "react";

import { LoadingRipple } from "@phantomthief-react/components.loading-ripple";

import { BUTTON_SIZE, BUTTON_VARIANT } from "./_constants";
import { Styled } from "./_style";
import { IButtonProps } from "./_types";

export const Button = ({
  variant = BUTTON_VARIANT.TEXT,
  size = BUTTON_SIZE.MEDIUM,
  loading = false,
  loadingComponent,
  className,
  htmlAttributes,
  children,
  onClick,
}: IButtonProps) => {
  const buttonContent = useMemo(() => {
    if (!loading) {
      return children;
    }
    return loadingComponent ?? <LoadingRipple size={16} fullScreen={false} />;
  }, [children, loading, loadingComponent]);

  return (
    <Styled.Container
      {...htmlAttributes}
      $variant={variant}
      $size={size}
      onClick={onClick}
      className={clsx(
        "button",
        `button--size-${size}`,
        `button--variant-${variant}`,
        loading && "button--loading",
        className,
      )}
    >
      {buttonContent}
    </Styled.Container>
  );
};
