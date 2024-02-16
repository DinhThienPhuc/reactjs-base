import React, { ChangeEventHandler, forwardRef, useState } from "react";

import { HelperText } from "@phantomthief/react.components.helper-text";
import { IInputProps } from "./_types";
import { INPUT_VARIANT } from "./_constants";
import { Label } from "@phantomthief/react.components.label";
import { PostAdorment } from "@phantomthief/react.components.post-adorment";
import { PreAdorment } from "@phantomthief/react.components.pre-adorment";
import { Styled } from "./_style";
import clsx from "clsx";
import useFocusWithCallback from "@phantomthief/react.hooks.focus-with-callback";

// TODO: Error state
// TODO: add render check hook

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
      onChange,
      ...props
    },
    ref,
  ) => {
    const [currentValue, setCurrentValue] = useState(value);

    const { captureOnFocus, captureOnBlur, isFocused } = useFocusWithCallback(
      onFocus,
      onBlur,
    );

    const isLabelCollapsed =
      isFocused || !!preAdorment || !!currentValue ? true : false;

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setCurrentValue(e.target.value);
      onChange?.(e);
    };

    return (
      <Styled.Container
        fullWidth={fullWidth}
        variant={variant}
        disabled={disabled}
        className={clsx(
          "input",
          `input__fullwidth--${fullWidth}`,
          `input__disabled--${disabled}`,
          `input--${variant}`,
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
          value={currentValue}
          ref={ref}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          onFocus={captureOnFocus}
          onBlur={captureOnBlur}
          hasPreAdorment={!!preAdorment}
          hasPostAdorment={!!postAdorment}
          className={clsx(
            "input-box",
            `input-box--${variant}`,
            `input-box__disabled--${disabled}`,
            `input-box__required--${required}`,
          )}
          data-testid="input-box"
        />
        <PostAdorment variant={variant} content={postAdorment} />
        <HelperText text={helperText} variant={variant} />
      </Styled.Container>
    );
  },
);

Input.displayName = "Input";
