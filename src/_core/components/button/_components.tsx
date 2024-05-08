import { BUTTON_SIZE, BUTTON_VARIANT } from "./_constants";
import React, { useMemo } from "react";

import { LoadingRipple } from "@phantomthief/react.components.loading-ripple";
import useWhyDidYouUpdate from "@phantomthief/react.hooks.why-did-you-update";
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
  ...props
}: IButtonProps) => {
  const buttonContent = useMemo(() => {
    if (!loading) {
      return children;
    }
    return loadingComponent ?? <LoadingRipple size={16} fullScreen={false} />;
  }, [children, loading, loadingComponent]);

  useWhyDidYouUpdate("Button", {
    variant,
    size,
    loading,
    loadingComponent,
    className,
    children,
    onClick,
    ...props,
  });

  return (
    <Styled.Container
      {...props}
      variant={variant}
      size={size}
      onClick={onClick}
      className={clsx(
        "button",
        `button__size--${size}`,
        `button__variant--${variant}`,
        `button__loading--${loading}`,
        className,
      )}
      data-testid="button"
    >
      {buttonContent}
    </Styled.Container>
  );
};
