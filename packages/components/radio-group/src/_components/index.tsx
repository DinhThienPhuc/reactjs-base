import clsx from "clsx";
import React, { Suspense, forwardRef, lazy } from "react";

import { FlexBox } from "@phantomthief-react/components.flex-box";
import { useSyncStateWithProps } from "@phantomthief-react/hooks";

import { RADIO_GROUP_DIRECTION } from "../_constants";
import { Styled } from "../_style";
import { IRadioGroupProps } from "../_types";
import { RadioGroupOption } from "./_option";

const RadioGroupLabel = lazy(() =>
  import("./_label").then((module) => ({
    default: module.RadioGroupLabel,
  })),
);

export const RadioGroup = forwardRef<HTMLElement, IRadioGroupProps>(
  (
    {
      options,
      className,
      name,
      value = "",
      label = "",
      onChange,
      isStandalone = false,
      direction = RADIO_GROUP_DIRECTION.COLUMN,
      ...restProps
    },
    _ref,
  ) => {
    const { currentValue, setCurrentValue } = useSyncStateWithProps<
      string | undefined
    >(value, isStandalone);

    return (
      <Styled.Container
        {...restProps}
        className={clsx("radio-group", className)}
        data-testid="radio-group"
      >
        <Suspense>
          {!!label && (
            <RadioGroupLabel hasValue={!!currentValue} label={label} />
          )}
        </Suspense>
        <FlexBox
          gap="16px"
          flexDirection={direction}
          alignItems={
            direction === RADIO_GROUP_DIRECTION.COLUMN
              ? "flex-start"
              : undefined
          }
        >
          {options?.map((option) => (
            <RadioGroupOption
              {...option}
              name={name}
              key={option.key}
              isStandalone={isStandalone}
              currentValue={currentValue}
              onChange={onChange}
              setCurrentValue={setCurrentValue}
            />
          ))}
        </FlexBox>
      </Styled.Container>
    );
  },
);

RadioGroup.displayName = "RadioGroup";
