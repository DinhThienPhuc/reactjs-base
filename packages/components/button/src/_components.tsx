import clsx from "clsx";
import React, { Suspense, lazy, useMemo } from "react";

import { BUTTON_SIZE, BUTTON_VARIANT } from "./_constants";
import { Styled } from "./_style";
import { IButtonProps } from "./_types";

const LoadingRipple = lazy(() =>
  import("@phantomthief-react/components.loading-ripple").then((module) => ({
    default: module.LoadingRipple,
  })),
);

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
    return (
      <Suspense>
        {loadingComponent ?? <LoadingRipple size={16} fullScreen={false} />}
      </Suspense>
    );
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
