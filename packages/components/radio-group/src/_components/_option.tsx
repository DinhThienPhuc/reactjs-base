import { arePropsShallowEqual } from "@phantomthief-react/utils";
import React, { ChangeEvent, memo, useCallback } from "react";
import { IRadioGroupOptionProps } from "../_types";
import { Styled } from "../_style";
import clsx from "clsx";

export const RadioGroupOption = memo(
  ({
    className,
    label,
    value,
    labelProps,
    isStandalone,
    currentValue,
    setCurrentValue,
    onChange,
    ...restProps
  }: IRadioGroupOptionProps) => {
    const val = isStandalone ? undefined : currentValue === value;

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
        setCurrentValue(value);
      },
      [onChange, setCurrentValue, value],
    );

    return (
      <Styled.OptionLabel
        {...labelProps}
        className={clsx("radio-group-option", className)}
        data-testid="radio-group-option"
      >
        <Styled.OptionInput
          {...restProps}
          className={clsx(
            "radio-group-option-input",
            val ? "radio-group-option-input--checked" : "",
          )}
          type="radio"
          value={value}
          checked={val}
          onChange={handleChange}
        />
        <Styled.OptionLabelText className="radio-group-option-label">
          {label}
        </Styled.OptionLabelText>
      </Styled.OptionLabel>
    );
  },
  arePropsShallowEqual(["currentValue"], (key, prevProps, nextProps) => {
    switch (key) {
      case "currentValue":
        const willNotRender =
          (nextProps["currentValue"] === nextProps["value"]) ===
          (prevProps["currentValue"] === prevProps["value"]);

        return willNotRender;
      default:
        return;
    }
  }),
);

RadioGroupOption.displayName = "RadioGroupOption";
