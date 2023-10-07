import React, { forwardRef } from "react";

import { HelperText } from "../helper-text";
import { IInputProps } from "./types";
import { INPUT_VARIANT } from "./constants";
import { Label } from "../label";
import { PostAdorment } from "../post-adorment";
import { PreAdorment } from "../pre-adorment";
import { Styled } from "./style";
import cx from "classnames";
import { useLogic } from "./useLogic";

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      className,
      label = "",
      preAdorment = null,
      postAdorment = null,
      helperText = "",
      value = "",
      required = false,
      disabled = false,
      hiddenLabel = false,
      fullWidth = false,
      variant = INPUT_VARIANT.STANDARD,
      onFocus,
      onBlur,
      clear,
      ...props
    },
    ref,
  ) => {
    const { captureOnFocus, captureOnBlur, isLabelCollapsed } = useLogic({
      preAdorment,
      value,
      onFocus,
      onBlur,
    });

    return (
      <Styled.Container
        fullWidth={fullWidth}
        variant={variant}
        disabled={disabled}
        className={cx(
          "input",
          `input-fullwidth__${fullWidth}`,
          `input__${variant}`,
          className,
        )}
        data-testid="input"
      >
        <Label
          variant={variant}
          disabled={disabled}
          isLabelCollapsed={isLabelCollapsed}
          content={label}
          required={required}
          hiddenLabel={hiddenLabel}
        />
        <PreAdorment variant={variant} content={preAdorment} />
        <Styled.Input
          {...props}
          variant={variant}
          value={value}
          ref={ref}
          disabled={disabled}
          required={required}
          onFocus={captureOnFocus}
          onBlur={captureOnBlur}
          hasPreAdorment={!!preAdorment}
          hasPostAdorment={!!clear || !!postAdorment}
          className={cx("input-box", `input-box__${variant}`)}
          data-testid="input-box"
        />
        <PostAdorment variant={variant} content={postAdorment} clear={clear} />
        <HelperText text={helperText} variant={variant} />
      </Styled.Container>
    );
  },
);

Input.displayName = "Input";
