import React, { ChangeEvent, forwardRef, useCallback } from "react";
import { useSyncStateWithProps } from "@phantomthief-react/hooks";
import { RADIO_GROUP_DIRECTION } from "../_constants";
import { IRadioGroupProps } from "../_types";
import { RadioGroupOption } from "./_option";
import { RadioGroupLabel } from "./_label";
import { Styled } from "../_style";
import clsx from "clsx";

export const RadioGroup = forwardRef<HTMLElement, IRadioGroupProps>(
  (
    {
      options,
      className,
      name,
      value = "",
      label = "",
      onChange,
      isStandalone = false,
      direction = RADIO_GROUP_DIRECTION.COLUMN,
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
      <Styled.Container
        {...restProps}
        $direction={direction}
        className={clsx("radio-group", `radio-group--${direction}`, className)}
        data-testid="radio-group"
      >
        <RadioGroupLabel hasValue={!!currentValue} label={label} />
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
      </Styled.Container>
    );
  },
);

RadioGroup.displayName = "RadioGroup";
