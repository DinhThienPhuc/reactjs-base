import { useSyncStateWithProps } from "@phantomthief-react/hooks";
import React, { ChangeEvent, forwardRef, useMemo } from "react";
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
      isStandalone = false,
      inputProps,
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const { currentValue, setCurrentValue } = useSyncStateWithProps<boolean>(
      value,
      isStandalone,
    );

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
            disabled && "switch-label__right--disabled",
          )}
        >
          {rightLabel}
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
            disabled && "switch-label__left--disabled",
          )}
        >
          {leftLabel}
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
            currentValue && "switch-pad--on",
            disabled && "switch-pad--disabled",
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
