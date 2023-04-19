import { ISelectOption, ISelectProps } from "./types";
import React, { forwardRef, useMemo } from "react";

import { HelperText } from "../helper-text";
import { Label } from "../label";
import { Portal } from "../portal";
import { PostAdorment } from "../post-adorment";
import { SELECT_VARIANT } from "./constants";
import { Styled } from "./style";
import cx from "classnames";
import { useLogic } from "./useLogic";

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

    const listOptions = useMemo(() => {
      return options.map((option: ISelectOption) => {
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
      });
    }, [displayedOption?.value, handleSelectOption, options]);

    return (
      <Styled.Container
        className={cx("select-container", className)}
        fullWidth={fullWidth}
      >
        <Styled.Box
          onClick={toggleListOptions}
          variant={variant}
          disabled={disabled}
          fullWidth={fullWidth}
          className={cx(
            "select-box",
            `select-box-fullwidth__${fullWidth}`,
            `select-box-disabled__${disabled}`,
            `select-box__${variant}`,
          )}
          tabIndex={tabIndex}
          onFocus={captureOnFocus}
          onBlur={captureOnBlur}
          ref={boxRef}
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
              "select-option-group",
              `select-option-group-fullwidth__${fullWidth}`,
              `select-option-group-disabled__${disabled}`,
              `select-option-group__${variant}`,
            )}
          >
            {listOptions}
          </Styled.OptionGroup>
        </Portal>
      </Styled.Container>
    );
  },
);

Select.displayName = "Select";
