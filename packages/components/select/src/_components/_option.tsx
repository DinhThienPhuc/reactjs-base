import clsx from "clsx";
import React, { memo } from "react";

import { Styled } from "../_style";
import { ISelectOptionProps } from "../_types";

export const SelectOption = memo(
  ({
    value,
    displayedValue,
    label,
    disabled,
    htmlAttributes,
    handleSelectOption,
  }: ISelectOptionProps) => (
    <Styled.Option
      {...htmlAttributes}
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
  ),
);

SelectOption.displayName = "SelectOption";
