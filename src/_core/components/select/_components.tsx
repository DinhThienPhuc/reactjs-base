import {
  ISelectEventTarget,
  ISelectOption,
  ISelectOptionProps,
  ISelectProps,
} from "./_types";
import React, {
  MouseEvent,
  MouseEventHandler,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

import { HelperText } from "@phantomthief/react.components.helper-text";
import { INodePosition } from "@phantomthief/react.utils.definations";
import { ChevronDown as IconChevronLeft } from "react-feather";
import { Label } from "@phantomthief/react.components.label";
import { Portal } from "@phantomthief/react.components.portal";
import { PostAdorment } from "@phantomthief/react.components.post-adorment";
import { SELECT_VARIANT } from "./_constants";
import { Styled } from "./_style";
import { Typography } from "@phantomthief/react.components.typography";
import { VERNADA_FONT } from "@phantomthief/react.utils.constants";
import clsx from "clsx";
import { getPositionOfNode } from "@phantomthief/react.utils.helpers";
import useBlock from "@phantomthief/react.hooks.block";
import useFocusWithCallback from "@phantomthief/react.hooks.focus-with-callback";
import useNotClickOnElements from "@phantomthief/react.hooks.not-click-on-elements";

const SelectOption = ({
  value,
  displayedValue,
  label,
  disabled,
  handleSelectOption,
}: ISelectOptionProps) => (
  <Styled.Option
    $selected={value === displayedValue}
    $disabled={disabled}
    key={value}
    className={clsx(
      "select-option",
      `select-option--selected-${value === displayedValue}`,
      `select-option--disabled-${disabled}`,
      "select-option--lines-1",
    )}
    onClick={handleSelectOption(value)}
  >
    <Typography
      size={16}
      font={VERNADA_FONT}
      color={disabled ? "#ffffff80" : "#ffffff"}
    >
      {label}
    </Typography>
  </Styled.Option>
);

export const Select = forwardRef<HTMLInputElement, ISelectProps>(
  (
    {
      className,
      options,
      value,
      variant = SELECT_VARIANT.STANDARD,
      disabled = false,
      fullWidth = false,
      required = false,
      tabIndex = -1,
      isError = false,
      optionGroupClassName,
      labelProps,
      postAdormentProps,
      helperTextProps,
      onChange,
      onFocus,
      onBlur,
      ...restProps
    },
    _ref,
  ) => {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const optionGroupRef = useRef<HTMLDivElement | null>(null);
    const [isShowed, setShow] = useState(false);
    const [position, setPosition] = useState<INodePosition | null>(null);
    const [currentValue, setCurrentValue] = useState(value);
    const previousValueRef = useRef(value);

    if (value !== previousValueRef.current) {
      previousValueRef.current = value;
      setCurrentValue(value);
    }

    useNotClickOnElements([boxRef, optionGroupRef], () => {
      setShow(false);
    });

    const toggleListOptions: MouseEventHandler<HTMLDivElement> = (e) => {
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
    };

    const { isFocused, captureOnFocus, captureOnBlur } = useFocusWithCallback({
      onFocus,
      onBlur,
      disabled,
    });

    // TODO: Check why select double render
    // eslint-disable-next-line no-console
    console.log("CAC: ", isFocused, position, isShowed);

    const isLabelCollapsed = useBlock(() => {
      if (disabled) {
        return true;
      }
      if (isFocused || !!currentValue) {
        return true;
      }
      return false;
    });

    const displayedOption = options.find((o) => o.value === currentValue);

    const handleSelectOption = useCallback(
      (value: string) => (e: MouseEvent<HTMLDivElement>) => {
        const target: ISelectEventTarget = {
          ...e.target,
          value,
        };
        e.target = target;
        onChange?.(e);
        setShow(false);
        setCurrentValue(value);
      },
      [onChange],
    );

    const selectOptions = useMemo(() => {
      return options.map((option: ISelectOption) => {
        return (
          <SelectOption
            key={option.value}
            value={option.value}
            label={option.label}
            displayedValue={currentValue}
            handleSelectOption={handleSelectOption}
          />
        );
      });
    }, [currentValue, handleSelectOption, options]);

    const portal = useMemo(() => {
      return (
        <Portal className={clsx("portal-select", optionGroupClassName)}>
          <Styled.OptionGroup
            $position={position}
            $isShowed={isShowed}
            ref={optionGroupRef}
            className={clsx(
              "select-options",
              position?.top
                ? `select-options--position-top-${position.top}`
                : "",
              position?.left
                ? `select-options--position-left-${position.left}`
                : "",
              position?.height
                ? `select-options--position-height-${position.height}`
                : "",
              position?.width
                ? `select-options--position-width-${position.width}`
                : "",
              `select-options--isShowed-${isShowed}`,
            )}
          >
            {selectOptions}
          </Styled.OptionGroup>
        </Portal>
      );
    }, [isShowed, optionGroupClassName, position, selectOptions]);

    const postAdormentChild = useMemo(
      () => postAdormentProps?.children ?? <IconChevronLeft />,
      [postAdormentProps?.children],
    );

    return (
      <Styled.Container
        {...restProps}
        $fullWidth={fullWidth}
        className={clsx("select", `select--fullwidth-${fullWidth}`, className)}
        data-testid="select"
      >
        <Styled.Box
          $variant={variant}
          $disabled={disabled}
          $fullWidth={fullWidth}
          $isError={isError}
          ref={boxRef}
          onClick={toggleListOptions}
          tabIndex={tabIndex}
          onFocus={captureOnFocus}
          onBlur={captureOnBlur}
          className={clsx(
            "select-box",
            `select-box--fullwidth--${fullWidth}`,
            `select-box--disabled-${disabled}`,
            `select-box--isError-${isError}`,
            `select-box--${variant}`,
          )}
          data-testid="select-box"
        >
          <Label
            {...labelProps}
            required={required}
            disabled={disabled}
            variant={variant}
            isLabelCollapsed={isLabelCollapsed}
            isFocused={isFocused}
            isError={isError}
          />
          <Styled.FakeSelect required={required} disabled={disabled} />
          <Styled.InnerBox
            $hasLabel={!!labelProps?.content}
            $variant={variant}
            $disabled={disabled}
            className={clsx(
              "select-inner-box",
              `select-inner-box--${variant}`,
              `select-inner-box--hasLabel-${!!labelProps?.content}`,
              `select-inner-box--disabled-${disabled}`,
            )}
            data-testid="select-displayed-option"
          >
            <Typography
              size={16}
              font={VERNADA_FONT}
              color={disabled ? "#ffffff80" : "#ffffff"}
            >
              {displayedOption?.label}
            </Typography>
          </Styled.InnerBox>
          <PostAdorment {...postAdormentProps} variant={variant}>
            <Styled.PostAdormentContentWrapper
              $isShowed={isShowed}
              $disabled={disabled}
            >
              {postAdormentChild}
            </Styled.PostAdormentContentWrapper>
          </PostAdorment>
          <HelperText
            {...helperTextProps}
            isError={isError}
            variant={variant}
          />
        </Styled.Box>

        {portal}
      </Styled.Container>
    );
  },
);

Select.displayName = "Select";
