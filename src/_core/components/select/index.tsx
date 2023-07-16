import { ISelectOption, ISelectOptionsProps, ISelectProps } from "./types";
import React, { forwardRef } from "react";

import { HelperText } from "../helper-text";
import { Label } from "../label";
import { Portal } from "../portal";
import { PostAdorment } from "../post-adorment";
import { SELECT_VARIANT } from "./constants";
import { Styled } from "./style";
import cx from "classnames";
import { useLogic } from "./useLogic";

const SelectOptions = ({
  options,
  displayedOption,
  handleSelectOption,
}: ISelectOptionsProps) => {
  return (
    <>
      {options.map((option: ISelectOption) => {
        return (
          <Styled.Option
            key={option.value}
            selected={option.value === displayedOption?.value}
            className="select-option"
            onClick={handleSelectOption(option.value)}
          >
            {option.label}
          </Styled.Option>
        );
      })}
    </>
  );
};

export const Select = forwardRef<HTMLInputElement, ISelectProps>(
  (
    {
      className,
      label,
      options,
      value,
      helperText,
      variant = SELECT_VARIANT.STANDARD,
      disabled = false,
      fullWidth = false,
      hiddenLabel = false,
      required = false,
      tabIndex = -1,
      onChange,
      onFocus,
      onBlur,
    },
    _ref,
  ) => {
    const {
      boxRef,
      optionGroupRef,
      isShowed,
      position,
      displayedOption,
      isLabelCollapsed,
      handleSelectOption,
      captureOnFocus,
      captureOnBlur,
      toggleListOptions,
    } = useLogic({ options, value, disabled, onChange, onFocus, onBlur });

    return (
      <Styled.Container
        className={cx("select", `select-fullwidth__${fullWidth}`, className)}
        fullWidth={fullWidth}
      >
        <Styled.Box
          ref={boxRef}
          onClick={toggleListOptions}
          variant={variant}
          disabled={disabled}
          fullWidth={fullWidth}
          tabIndex={tabIndex}
          onFocus={captureOnFocus}
          onBlur={captureOnBlur}
          className={cx(
            "select-box",
            `select-box-fullwidth__${fullWidth}`,
            `select-box-disabled__${disabled}`,
            `select-box__${variant}`,
          )}
        >
          <Label
            content={label}
            required={required}
            disabled={disabled}
            hiddenLabel={hiddenLabel}
            variant={variant}
            isLabelCollapsed={isLabelCollapsed}
          />
          <Styled.FakeSelect required={required} />
          <Styled.InnerBox className={cx("select-inner-box")}>
            {displayedOption?.label}
          </Styled.InnerBox>
          <PostAdorment
            variant={variant}
            content={<Styled.Arrow $isShowed={isShowed} />}
          />
          <HelperText text={helperText} variant={variant} />
        </Styled.Box>

        <Portal id={"portal-select"}>
          <Styled.OptionGroup
            ref={optionGroupRef}
            position={position}
            isShowed={isShowed}
            className={cx(
              "select-options",
              `select-options-position__${position}`,
              `select-options-isShowed__${isShowed}`,
            )}
          >
            <SelectOptions
              options={options}
              displayedOption={displayedOption}
              handleSelectOption={handleSelectOption}
            />
          </Styled.OptionGroup>
        </Portal>
      </Styled.Container>
    );
  },
);

Select.displayName = "Select";
