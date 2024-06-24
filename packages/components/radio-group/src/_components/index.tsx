import React, { ChangeEvent, forwardRef, useCallback } from "react";
import { useSyncStateWithProps } from "@phantomthief-react/hooks";
import { IRadioGroupProps } from "../_types";
import { RadioGroupOption } from "./_option";
import clsx from "clsx";

export const RadioGroup = forwardRef<HTMLElement, IRadioGroupProps>(
  (
    {
      options,
      className,
      name,
      value = "",
      onChange,
      isStandalone = false,
      ...restProps
    },
    _ref,
  ) => {
    const { currentValue, setCurrentValue } = useSyncStateWithProps<
      string | undefined
    >(value, isStandalone);

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
        setCurrentValue(value);
      },
      [onChange, setCurrentValue, value],
    );

    return (
      <div
        {...restProps}
        className={clsx("radio-group", className)}
        data-testid="radio-group"
      >
        {options?.map((option) => (
          <RadioGroupOption
            {...option}
            name={name}
            key={option.key}
            isStandalone={isStandalone}
            currentValue={currentValue}
            onChange={handleChange}
          />
        ))}
      </div>
    );
  },
);

RadioGroup.displayName = "RadioGroup";
