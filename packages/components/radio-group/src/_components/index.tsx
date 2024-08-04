import clsx from "clsx";
import React, { Suspense, forwardRef, lazy } from "react";

import { FlexBox } from "@phantomthief-react/components.flex-box";
import useSyncStateWithProps from "@phantomthief-react/hooks.sync-state-with-props";

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
      htmlAttributes,
      labelHtmlAttributes,
      optionHtmlAttributes,
    },
    _ref,
  ) => {
    const { currentValue, setCurrentValue } = useSyncStateWithProps<
      string | undefined
    >(value, isStandalone);

    return (
      <Styled.Container
        {...htmlAttributes}
        className={clsx("radio-group", className)}
      >
        <Suspense>
          {!!label && (
            <RadioGroupLabel
              hasValue={!!currentValue}
              label={label}
              htmlAttributes={labelHtmlAttributes}
            />
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
              key={option.key}
              label={option.label}
              value={option.value}
              name={name}
              htmlAttributes={optionHtmlAttributes ?? option.htmlAttributes}
              isStandalone={isStandalone}
              currentValue={currentValue}
              setCurrentValue={setCurrentValue}
              onChange={onChange}
            />
          ))}
        </FlexBox>
      </Styled.Container>
    );
  },
);

RadioGroup.displayName = "RadioGroup";

// TODO: Implement error state, use IFormFieldProps
