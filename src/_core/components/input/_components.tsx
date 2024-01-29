import React, { forwardRef } from "react";

import { HelperText } from "@phantomthief/react.components.helper-text";
import { IInputProps } from "./_types";
import { INPUT_VARIANT } from "./_constants";
import { Label } from "@phantomthief/react.components.label";
import { PostAdorment } from "@phantomthief/react.components.post-adorment";
import { PreAdorment } from "@phantomthief/react.components.pre-adorment";
import { Styled } from "./_style";
import clsx from "clsx";
import useFocusWithCallback from "@phantomthief/react.hooks.focus-with-callback";

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
    const { captureOnFocus, captureOnBlur, isFocused } = useFocusWithCallback(
      onFocus,
      onBlur,
    );

    const isLabelCollapsed =
      isFocused || !!preAdorment || !!value ? true : false;

    return (
      <Styled.Container
        fullWidth={fullWidth}
        variant={variant}
        disabled={disabled}
        className={clsx(
          "input",
          `input-fullwidth__${fullWidth}`,
          `input-disabled__${disabled}`,
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
          className={clsx(
            "input-box",
            `input-box__${variant}`,
            `input-box-disabled__${disabled}`,
            `input-box-required__${required}`,
          )}
          data-testid="input-box"
        />
        <PostAdorment variant={variant} content={postAdorment} clear={clear} />
        <HelperText text={helperText} variant={variant} />
      </Styled.Container>
    );
  },
);

Input.displayName = "Input";
