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

export const TextField = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      className,
      value = "",
      required = false,
      disabled = false,
      fullWidth = false,
      variant = INPUT_VARIANT.STANDARD,
      onFocus,
      onBlur,
      clear,
      inputBoxProps,
      labelProps,
      preAdormentProps,
      postAdormentProps,
      helperTextProps,
      ...restProps
    },
    ref,
  ) => {
    const { captureOnFocus, captureOnBlur, isFocused } = useFocusWithCallback(
      onFocus,
      onBlur,
    );

    const isLabelCollapsed =
      isFocused || !!preAdormentProps?.content || !!value ? true : false;

    return (
      <Styled.Container
        {...restProps}
        $fullWidth={fullWidth}
        $variant={variant}
        $disabled={disabled}
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
          {...labelProps}
          variant={variant}
          disabled={disabled}
          required={required}
          isLabelCollapsed={isLabelCollapsed}
        />
        <PreAdorment {...preAdormentProps} />
        <Styled.Input
          {...inputBoxProps}
          variant={variant}
          value={value}
          ref={ref}
          disabled={disabled}
          required={required}
          onFocus={captureOnFocus}
          onBlur={captureOnBlur}
          hasPreAdorment={!!preAdormentProps?.content}
          hasPostAdorment={!!clear || !!postAdormentProps?.content}
          className={clsx(
            "input-box",
            `input-box__${variant}`,
            `input-box-disabled__${disabled}`,
            `input-box-required__${required}`,
          )}
          data-testid="input-box"
        />
        <PostAdorment {...postAdormentProps} clear={clear} />
        <HelperText {...helperTextProps} variant={variant} />
      </Styled.Container>
    );
  },
);

TextField.displayName = "TextField";
