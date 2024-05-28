import { BUTTON_SIZE, BUTTON_VARIANT } from "./_constants";
import React, { useMemo } from "react";

import { LoadingRipple } from "@phantomthief-react/components.loading-ripple";
import { IButtonProps } from "./_types";
import { Styled } from "./_style";
import clsx from "clsx";

export const Button = ({
  variant = BUTTON_VARIANT.TEXT,
  size = BUTTON_SIZE.MEDIUM,
  loading = false,
  loadingComponent,
  className,
  children,
  onClick,
  ...restProps
}: IButtonProps) => {
  const buttonContent = useMemo(() => {
    if (!loading) {
      return children;
    }
    return loadingComponent ?? <LoadingRipple size={16} fullScreen={false} />;
  }, [children, loading, loadingComponent]);

  return (
    <Styled.Container
      {...restProps}
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
      data-testid="button"
    >
      {buttonContent}
    </Styled.Container>
  );
};
