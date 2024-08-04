import clsx from "clsx";
import React, { memo } from "react";

import { Styled } from "../_style";
import { IRadioGroupLabelProps } from "../_types";

export const RadioGroupLabel = memo(
  ({ label = "", hasValue, htmlAttributes }: IRadioGroupLabelProps) => {
    return (
      <Styled.Label
        {...htmlAttributes}
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
