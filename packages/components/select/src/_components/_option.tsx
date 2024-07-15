import clsx from "clsx";
import React from "react";

import { Styled } from "../_style";
import { ISelectOptionProps } from "../_types";

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
