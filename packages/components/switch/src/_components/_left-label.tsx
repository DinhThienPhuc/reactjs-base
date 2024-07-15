import clsx from "clsx";
import React, { memo } from "react";

import { Styled } from "../_style";
import { ISwitchLeftLabelProps } from "../_types";

export const SwitchLabelLeft = memo(
  ({ leftLabel = "", disabled = false }: ISwitchLeftLabelProps) => {
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
  },
);

SwitchLabelLeft.displayName = "SwitchLabelLeft";
