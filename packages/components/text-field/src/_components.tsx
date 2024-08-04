import clsx from "clsx";
import React, { ChangeEvent, Suspense, forwardRef, lazy } from "react";

import useFocusWithCallback from "@phantomthief-react/hooks.focus-with-callback";
import useSyncStateWithProps from "@phantomthief-react/hooks.sync-state-with-props";

import { TEXT_FIELD_VARIANT } from "./_constants";
import { Styled } from "./_style";
import { ITextFieldProps } from "./_types";

const HelperText = lazy(() =>
  import("@phantomthief-react/components.helper-text").then((module) => ({
    default: module.HelperText,
  })),
);

const Label = lazy(() =>
  import("@phantomthief-react/components.label").then((module) => ({
    default: module.Label,
  })),
);

const PostAdorment = lazy(() =>
  import("@phantomthief-react/components.post-adorment").then((module) => ({
    default: module.PostAdorment,
  })),
);

const PreAdorment = lazy(() =>
  import("@phantomthief-react/components.pre-adorment").then((module) => ({
    default: module.PreAdorment,
  })),
);

export const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
  (
    {
      value = "",
      variant = TEXT_FIELD_VARIANT.STANDARD,
      onChange,
      onFocus,
      onBlur,
      clear,
      htmlAttributes,
      inputHtmlAttributes,
      labelProps,
      preAdormentProps,
      postAdormentProps,
      helperTextProps,
      className = "",
      fullWidth = false,
      disabled = false,
      required = false,
      error = null,
      isStandalone = false,
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
      onChange?.(e.target.value, e);
      setCurrentValue(e.target.value);
    };

    return (
      <Styled.Container
        {...htmlAttributes}
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
      >
        <Suspense>
          {!!labelProps?.children && (
            <Label
              {...labelProps}
              variant={variant}
              disabled={disabled}
              required={required}
              isLabelCollapsed={isLabelCollapsed}
              isFocused={isFocused}
              isError={!!error}
            />
          )}
        </Suspense>
        <Suspense>
          {!!preAdormentProps?.children && (
            <PreAdorment
              {...preAdormentProps}
              hasLabel={!!labelProps?.children}
              variant={variant}
            />
          )}
        </Suspense>
        <Styled.Input
          {...inputHtmlAttributes}
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
        <Suspense>
          {!!postAdormentProps?.children && (
            <PostAdorment
              {...postAdormentProps}
              clear={clear}
              variant={variant}
            />
          )}
        </Suspense>
        <Suspense>
          {helperTextProps?.children && (
            <HelperText
              {...helperTextProps}
              isError={!!error}
              variant={variant}
            >
              {error?.message ?? helperTextProps?.children ?? ""}
            </HelperText>
          )}
        </Suspense>
      </Styled.Container>
    );
  },
);

TextField.displayName = "TextField";
