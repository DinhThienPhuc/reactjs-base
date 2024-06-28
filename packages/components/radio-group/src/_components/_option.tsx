import { IRadioGroupOptionProps } from "../_types";
import { Styled } from "../_style";
import React from "react";
import clsx from "clsx";

export const RadioGroupOption = ({
  className,
  label,
  value,
  labelProps,
  isStandalone,
  currentValue,
  ...restProps
}: IRadioGroupOptionProps) => {
  const val = isStandalone ? undefined : currentValue === value;

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
      />
      <Styled.OptionLabelText className="radio-group-option-label">
        {label}
      </Styled.OptionLabelText>
    </Styled.OptionLabel>
  );
};
