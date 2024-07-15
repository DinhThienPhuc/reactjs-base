import { ISelectOptionProps } from "../_types";
import { Styled } from "../_style";
import React from "react";
import clsx from "clsx";

export const SelectOption = ({
  value,
  displayedValue,
  label,
  disabled,
  handleSelectOption,
  ...restProps
}: ISelectOptionProps) => (
  <Styled.Option
    {...restProps}
    $selected={value === displayedValue}
    $disabled={disabled}
    key={value}
    className={clsx(
      "select-option",
      value === displayedValue && "select-option--selected",
      disabled && "select-option--disabled",
    )}
    onClick={handleSelectOption(value)}
  >
    {label}
  </Styled.Option>
);
