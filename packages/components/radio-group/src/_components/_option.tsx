import clsx from "clsx";
import React, { ChangeEvent, memo, useCallback, useMemo } from "react";

import { arePropsShallowEqual } from "@phantompurr-react/utils";

import { Styled } from "../_style";
import { IRadioGroupOptionProps } from "../_types";

export const RadioGroupOption = memo(
  ({
    label,
    value,
    name,
    htmlAttributes,
    isStandalone,
    currentValue,
    setCurrentValue,
    onChange,
  }: IRadioGroupOptionProps) => {
    const val = isStandalone ? undefined : currentValue === value;

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(value, e);
        setCurrentValue?.(value);
      },
      [onChange, setCurrentValue, value],
    );

    const customLabelOption = useMemo(
      () => (
        <Styled.OptionLabelText className="radio-group-option-label">
          {label}
        </Styled.OptionLabelText>
      ),
      [label],
    );

    return (
      <Styled.OptionLabel {...htmlAttributes} className="radio-group-option">
        <Styled.OptionInput
          className={clsx(
            "radio-group-option-input",
            val ? "radio-group-option-input--checked" : "",
          )}
          name={name}
          type="radio"
          value={value}
          checked={val}
          onChange={handleChange}
        />
        {customLabelOption}
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
