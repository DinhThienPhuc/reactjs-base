import { Typography } from "@phantomthief-react/components.typography";
import { IRadioGroupOptionProps } from "../_types";
import { FONT } from "@phantomthief-react/utils";
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
  onChange,
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
        checked={isStandalone ? undefined : currentValue === value}
        onChange={onChange}
      />
      <Typography className="radio-group-option-label" font={FONT.VERNADA}>
        {label}
      </Typography>
    </Styled.OptionLabel>
  );
};
