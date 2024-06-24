import { IRadioGroupOptionProps } from "../_types";
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
  return (
    <label
      {...labelProps}
      className={clsx("radio-group-option", className)}
      data-testid="radio-group-option"
    >
      <input
        {...restProps}
        type="radio"
        value={value}
        checked={isStandalone ? undefined : currentValue === value}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};
