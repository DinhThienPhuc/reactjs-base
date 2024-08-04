import clsx from "clsx";
import React, { ChangeEvent, Suspense, forwardRef, lazy } from "react";

import useSyncStateWithProps from "@phantomthief-react/hooks.sync-state-with-props";

import { Styled } from "../_style";
import { ISwitchProps } from "../_types";

const SwitchLabelLeft = lazy(() =>
  import("./_left-label").then((module) => ({
    default: module.SwitchLabelLeft,
  })),
);

const SwitchLabelRight = lazy(() =>
  import("./_right-label").then((module) => ({
    default: module.SwitchLabelRight,
  })),
);

export const Switch = forwardRef<HTMLInputElement, ISwitchProps>(
  (
    {
      value = false,
      leftLabel = "",
      rightLabel = "",
      htmlAttributes,
      inputHtmlAttributes,
      leftHtmlAttributes,
      rightHtmlAttributes,
      onChange,
      className = "",
      disabled = false,
      required = false,
      isStandalone = false,
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

    return (
      <Styled.Container
        {...htmlAttributes}
        className={clsx("switch", className)}
      >
        <Suspense>
          {!!leftLabel && (
            <SwitchLabelLeft
              htmlAttributes={leftHtmlAttributes}
              leftLabel={leftLabel}
              disabled={disabled}
            />
          )}
        </Suspense>
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
            {...inputHtmlAttributes}
            ref={ref}
            checked={currentValue}
            onChange={handleChange}
            disabled={disabled}
            type="checkbox"
            required={required}
          />
        </Styled.Pad>
        <Suspense>
          {!!rightLabel && (
            <SwitchLabelRight
              htmlAttributes={rightHtmlAttributes}
              rightLabel={rightLabel}
              disabled={disabled}
            />
          )}
        </Suspense>
      </Styled.Container>
    );
  },
);

Switch.displayName = "Switch";
