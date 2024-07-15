import { IRadioGroupLabelProps } from "../_types";
import React, { memo } from "react";
import { Styled } from "../_style";
import clsx from "clsx";

export const RadioGroupLabel = memo(
  ({ label = "", hasValue }: IRadioGroupLabelProps) => {
    return (
      <Styled.Label
        $hasValue={hasValue}
        className={clsx(
          "radio-group-label",
          hasValue && "radio-group-label--hasValue",
        )}
      >
        {label}
      </Styled.Label>
    );
  },
);

RadioGroupLabel.displayName = "RadioGroupLabel";
