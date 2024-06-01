import React, { ChangeEvent, forwardRef, useMemo } from "react";

import {
  useFocusWithCallback,
  useFormElement,
} from "@phantomthief-react/hooks";
import { PostAdorment } from "@phantomthief-react/components.post-adorment";
import { PreAdorment } from "@phantomthief-react/components.pre-adorment";
import { HelperText } from "@phantomthief-react/components.helper-text";
import { Label } from "@phantomthief-react/components.label";
import { TEXT_FIELD_VARIANT } from "./_constants";
import { ITextFieldProps } from "./_types";
import { Styled } from "./_style";
import clsx from "clsx";

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
    const { currentValue, setCurrentValue } = useFormElement<
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

    const customPreAdorment = useMemo(
      () => (
        <PreAdorment
          {...preAdormentProps}
          hasLabel={!!labelProps?.children}
          variant={variant}
        />
      ),
      [labelProps?.children, preAdormentProps, variant],
    );

    const customPostAdorment = useMemo(
      () => (
        <PostAdorment {...postAdormentProps} clear={clear} variant={variant} />
      ),
      [clear, postAdormentProps, variant],
    );

    const customHelperText = useMemo(
      () => (
        <HelperText {...helperTextProps} isError={!!error} variant={variant}>
          {error?.message ?? helperTextProps?.children ?? ""}
        </HelperText>
      ),
      [error, helperTextProps, variant],
    );

    const customLabel = useMemo(
      () => (
        <Label
          {...labelProps}
          variant={variant}
          disabled={disabled}
          required={required}
          isLabelCollapsed={isLabelCollapsed}
          isFocused={isFocused}
          isError={!!error}
        />
      ),
      [
        disabled,
        error,
        isFocused,
        isLabelCollapsed,
        labelProps,
        required,
        variant,
      ],
    );

    return (
      <Styled.Container
        {...restProps}
        $fullWidth={fullWidth}
        $variant={variant}
        $disabled={disabled}
        className={clsx(
          "text-field",
          fullWidth && "text-field--fullwidth",
          disabled && "text-field--disabled",
          `text-field--${variant}`,
          className,
        )}
        data-testid="text-field"
      >
        {customLabel}
        {customPreAdorment}
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
            `text-field-input--${variant}`,
            disabled && "text-field-input--disabled",
            required && "text-field-input--required",
          )}
          data-testid="text-field-input"
        />
        {customPostAdorment}
        {customHelperText}
      </Styled.Container>
    );
  },
);

TextField.displayName = "TextField";
