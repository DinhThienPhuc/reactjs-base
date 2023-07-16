import {
  ISwitchLeftLabelProps,
  ISwitchProps,
  ISwitchRightLabelProps,
} from "./types";
import React, { forwardRef } from "react";

import { Styled } from "./style";
import cx from "classnames";

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
      <Styled.Container className={cx("switch", className)}>
        <LeftLabel leftLabel={leftLabel} />
        <Styled.Pad
          isOn={!!value}
          disabled={disabled}
          className={cx(
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
