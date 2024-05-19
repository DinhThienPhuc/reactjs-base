import React, { ChangeEvent, forwardRef, useMemo, useState } from "react";

import { Typography } from "@phantomthief-react/components.typography";
import { FONT } from "@phantomthief-react/utils.constants";
import { ISwitchProps } from "./_types";
import { Styled } from "./_style";
import clsx from "clsx";

export const Switch = forwardRef<HTMLInputElement, ISwitchProps>(
  (
    {
      className,
      leftLabel = null,
      rightLabel = null,
      disabled = false,
      value = false,
      inputProps,
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const [currentValue, setCurrentValue] = useState(value);
    const [previousValue, setPreviousValue] = useState(value);

    /**
     * Update state when `value` changes
     */
    if (value !== previousValue) {
      setPreviousValue(value);
      setCurrentValue(value);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setCurrentValue(e.target.checked);
      onChange?.(e.target.checked, e);
    };

    const customRightLabel = useMemo(() => {
      if (!rightLabel) {
        return null;
      }

      return (
        <Styled.RightLabel
          $disabled={disabled}
          className={clsx(
            "switch-label",
            "switch-label__right",
            `switch-label__right__disabled--${disabled}`,
          )}
        >
          <Typography
            size={16}
            color={disabled ? "#ffffff80" : "#ffffff"}
            font={FONT.VERNADA}
            className="switch-label__text--right"
          >
            {rightLabel}
          </Typography>
        </Styled.RightLabel>
      );
    }, [disabled, rightLabel]);

    const customLeftLabel = useMemo(() => {
      if (!leftLabel) {
        return null;
      }

      return (
        <Styled.LeftLabel
          $disabled={disabled}
          className={clsx(
            "switch-label",
            "switch-label__left",
            `switch-label__left--disabled-${disabled}`,
          )}
        >
          <Typography
            size={16}
            color={disabled ? "#ffffff80" : "#ffffff"}
            font={FONT.VERNADA}
            className="switch-label-text-left"
          >
            {leftLabel}
          </Typography>
        </Styled.LeftLabel>
      );
    }, [disabled, leftLabel]);

    return (
      <Styled.Container {...restProps} className={clsx("switch", className)}>
        {customLeftLabel}
        <Styled.Pad
          $isOn={currentValue}
          $disabled={disabled}
          className={clsx(
            "switch-pad",
            `switch-pad__isOn--${currentValue}`,
            `switch-pad__disabled--${disabled}`,
          )}
        >
          <input
            {...inputProps}
            ref={ref}
            checked={currentValue}
            onChange={handleChange}
            disabled={disabled}
            type="checkbox"
          />
        </Styled.Pad>
        {customRightLabel}
      </Styled.Container>
    );
  },
);

Switch.displayName = "Switch";
