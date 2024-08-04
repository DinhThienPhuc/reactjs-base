import clsx from "clsx";
import React, { memo } from "react";

import { Styled } from "../_style";
import { ISwitchRightLabelProps } from "../_types";

export const SwitchLabelRight = memo(
  ({
    rightLabel = "",
    disabled = false,
    htmlAttributes,
  }: ISwitchRightLabelProps) => {
    if (!rightLabel) {
      return null;
    }

    return (
      <Styled.RightLabel
        {...htmlAttributes}
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
  },
);

SwitchLabelRight.displayName = "SwitchLabelRight";
