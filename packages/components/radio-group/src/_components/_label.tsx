import { FONT, arePropsShallowEqual } from "@phantomthief-react/utils";
import { IRadioGroupLabelProps } from "../_types";
import React, { memo } from "react";
import { Styled } from "../_style";
import clsx from "clsx";

export const RadioGroupLabel = memo(
  ({ label = "", hasValue }: IRadioGroupLabelProps) => {
    return (
      <Styled.Label
        $hasValue={hasValue}
        font={FONT.VERNADA}
        className={clsx(
          "radio-group-label",
          hasValue && "radio-group-label--hasValue",
        )}
      >
        {label}
      </Styled.Label>
    );
  },
  arePropsShallowEqual(["hasValue"], (key, prevValue, nextValue) => {
    switch (key) {
      case "hasValue":
        return !!nextValue && !!prevValue;
      default:
        return;
    }
  }),
);

RadioGroupLabel.displayName = "RadioGroupLabel";
