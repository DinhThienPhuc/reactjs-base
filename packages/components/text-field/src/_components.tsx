import clsx from "clsx";
import React, { ChangeEvent, forwardRef } from "react";

import { HelperText } from "@phantomthief-react/components.helper-text";
import { Label } from "@phantomthief-react/components.label";
import { PostAdorment } from "@phantomthief-react/components.post-adorment";
import { PreAdorment } from "@phantomthief-react/components.pre-adorment";
import {
  useFocusWithCallback,
  useSyncStateWithProps,
} from "@phantomthief-react/hooks";

import { TEXT_FIELD_VARIANT } from "./_constants";
import { Styled } from "./_style";
import { ITextFieldProps } from "./_types";

export const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
  (
    {
      className,
      value = "",
      required = false,
      disabled = false,
      fullWidth = false,
      isStandalone = false,
      error = null,
      variant = TEXT_FIELD_VARIANT.STANDARD,
      onChange,
      onFocus,
      onBlur,
      clear,
      inputProps,
      labelProps,
      preAdormentProps,
      postAdormentProps,
      helperTextProps,
      ...restProps
    },
    ref,
  ) => {
    const { currentValue, setCurrentValue } = useSyncStateWithProps<
      string | undefined
    >(value, isStandalone);

    const { captureOnFocus, captureOnBlur, isFocused } = useFocusWithCallback({
      onFocus,
      onBlur,
    });

    const isLabelCollapsed =
      isFocused || !!preAdormentProps?.children || !!currentValue
        ? true
        : false;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      setCurrentValue(e.target.value);
    };

    return (
      <Styled.Container
        {...restProps}
        $fullWidth={fullWidth}
        $variant={variant}
        $disabled={disabled}
        className={clsx(
          "text-field",
          fullWidth && "text-field--fullwidth",
          required && "text-field--required",
          disabled && "text-field--disabled",
          error && "text-field--error",
          `text-field--variant-${variant}`,
          className,
        )}
        data-testid="text-field"
      >
        <Label
          {...labelProps}
          variant={variant}
          disabled={disabled}
          required={required}
          isLabelCollapsed={isLabelCollapsed}
          isFocused={isFocused}
          isError={!!error}
        />
        <PreAdorment
          {...preAdormentProps}
          hasLabel={!!labelProps?.children}
          variant={variant}
        />
        <Styled.Input
          {...inputProps}
          $variant={variant}
          $hasPreAdorment={!!preAdormentProps?.children}
          $hasPostAdorment={!!clear || !!postAdormentProps?.children}
          $hasLabel={!!labelProps?.children}
          ref={ref}
          value={currentValue}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          onFocus={captureOnFocus}
          onBlur={captureOnBlur}
          className={clsx(
            "text-field-input",
            `text-field-input--variant-${variant}`,
            disabled && "text-field-input--disabled",
            required && "text-field-input--required",
          )}
        />
        <PostAdorment {...postAdormentProps} clear={clear} variant={variant} />
        <HelperText {...helperTextProps} isError={!!error} variant={variant}>
          {error?.message ?? helperTextProps?.children ?? ""}
        </HelperText>
      </Styled.Container>
    );
  },
);

TextField.displayName = "TextField";
