import React, {
  MouseEvent,
  MouseEventHandler,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ISelectEventTarget,
  ISelectOption,
  ISelectOptionsProps,
  ISelectProps,
} from "./_types";

import useNotClickOnElements from "@phantomthief/react.hooks.not-click-on-elements";
import useFocusWithCallback from "@phantomthief/react.hooks.focus-with-callback";
import { PostAdorment } from "@phantomthief/react.components.post-adorment";
import { HelperText } from "@phantomthief/react.components.helper-text";
import { INodePosition } from "@phantomthief/react.utils.definations";
import { getPositionOfNode } from "@phantomthief/react.utils.helpers";
import { Portal } from "@phantomthief/react.components.portal";
import { Label } from "@phantomthief/react.components.label";
import { SELECT_VARIANT } from "./_constants";
import { Styled } from "./_style";
import clsx from "clsx";

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
      optionGroupClassName,
      onChange,
      onFocus,
      onBlur,
    },
    _ref,
  ) => {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const optionGroupRef = useRef<HTMLDivElement | null>(null);
    const [isShowed, setShow] = useState(false);
    const [position, setPosition] = useState<INodePosition | null>(null);

    useNotClickOnElements([boxRef, optionGroupRef], () => {
      setShow(false);
    });

    const toggleListOptions = useCallback<MouseEventHandler<HTMLDivElement>>(
      (e) => {
        e.preventDefault();
        if (disabled) {
          return;
        }
        if (!isShowed) {
          const boxPosition = getPositionOfNode(boxRef);
          setPosition({
            ...boxPosition,
            top: boxPosition.top + boxPosition.height,
          });
        }
        setShow((prev) => !prev);
      },
      [disabled, isShowed],
    );

    const { isFocused, captureOnFocus, captureOnBlur } = useFocusWithCallback(
      onFocus,
      onBlur,
    );

    const isLabelCollapsed = useMemo(() => {
      if (disabled) {
        return true;
      }
      if (isFocused || !!value) {
        return true;
      }
      return false;
    }, [disabled, isFocused, value]);

    const displayedOption = useMemo(
      () => options.find((o) => o.value === value),
      [options, value],
    );

    const handleSelectOption = useCallback(
      (value: string) => (e: MouseEvent<HTMLDivElement>) => {
        const target: ISelectEventTarget = {
          ...e.target,
          value,
        };
        e.target = target;
        onChange?.(e);
        setShow(false);
      },
      [onChange],
    );

    return (
      <Styled.Container
        className={clsx("select", `select-fullwidth__${fullWidth}`, className)}
        fullWidth={fullWidth}
        data-testid="select"
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
          className={clsx(
            "select-box",
            `select-box-fullwidth__${fullWidth}`,
            `select-box-disabled__${disabled}`,
            `select-box__${variant}`,
          )}
          data-testid="select-box"
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
          <Styled.InnerBox
            className={clsx("select-inner-box")}
            data-testid="select-displayed-option"
          >
            {displayedOption?.label}
          </Styled.InnerBox>
          <PostAdorment
            variant={variant}
            content={<Styled.Arrow $isShowed={isShowed} />}
          />
          <HelperText text={helperText} variant={variant} />
        </Styled.Box>

        <Portal className={clsx("portal-select", optionGroupClassName)}>
          <Styled.OptionGroup
            ref={optionGroupRef}
            position={position}
            isShowed={isShowed}
            className={clsx(
              "select-options",
              `select-options-position__${JSON.stringify(position)}`,
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
