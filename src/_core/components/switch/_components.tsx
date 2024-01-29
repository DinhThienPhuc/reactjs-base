import {
  ISwitchLeftLabelProps,
  ISwitchProps,
  ISwitchRightLabelProps,
} from "./_types";
import React, { forwardRef } from "react";

import { Styled } from "./_style";
import clsx from "clsx";

const LeftLabel = ({ leftLabel }: ISwitchLeftLabelProps) => {
  if (!leftLabel) {
    return null;
  }

  return (
    <Styled.LeftLabel className="switch-label__left">
      {leftLabel}
    </Styled.LeftLabel>
  );
};

const RightLabel = ({ rightLabel }: ISwitchRightLabelProps) => {
  if (!rightLabel) {
    return null;
  }

  return (
    <Styled.RightLabel className="switch-label__right">
      {rightLabel}
    </Styled.RightLabel>
  );
};

export const Switch = forwardRef<HTMLInputElement, ISwitchProps>(
  (
    {
      className,
      leftLabel = null,
      rightLabel = null,
      disabled = false,
      value,
      ...props
    },
    ref,
  ) => {
    return (
      <Styled.Container className={clsx("switch", className)}>
        <LeftLabel leftLabel={leftLabel} />
        <Styled.Pad
          isOn={!!value}
          disabled={disabled}
          className={clsx(
            "switch-pad",
            `switch-pad-isOn__${!!value}`,
            `switch-pad-disabled__${disabled}`,
          )}
        >
          <input
            {...props}
            ref={ref}
            value={value}
            disabled={disabled}
            type="checkbox"
          />
        </Styled.Pad>
        <RightLabel rightLabel={rightLabel} />
      </Styled.Container>
    );
  },
);

Switch.displayName = "Switch";
