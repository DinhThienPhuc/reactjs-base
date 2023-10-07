import { BUTTON_SIZE, BUTTON_VARIANT } from "./constants";
import React, { useMemo } from "react";

import { IButtonProps } from "./types";
import { LoadingRipple } from "../loading";
import { Styled } from "./style";
import cx from "classnames";

export const Button = ({
  variant = BUTTON_VARIANT["TEXT"],
  size = BUTTON_SIZE["MEDIUM"],
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
    return (
      loadingComponent ?? (
        <LoadingRipple size={36} color="#ffffff4d" fullScreen={false} />
      )
    );
  }, [children, loading, loadingComponent]);

  return (
    <Styled.Container
      {...props}
      variant={variant}
      size={size}
      onClick={onClick}
      className={cx(
        "button",
        `button-size__${size}`,
        `button-variant__${variant}`,
        `button-loading__${loading}`,
        className,
      )}
      data-testid="button"
    >
      {buttonContent}
    </Styled.Container>
  );
};
