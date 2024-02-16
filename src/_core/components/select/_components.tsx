import { ISelectEventTarget, ISelectOption, ISelectProps } from "./_types";
import React, {
  MouseEvent,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

import { INodePosition } from "@phantomthief/react.utils.definations";
import { Portal } from "@phantomthief/react.components.portal";
import { SELECT_VARIANT } from "./_constants";
import { Styled } from "./_style";
import { VERNADA_FONT } from "@phantomthief/react.utils.constants";
import clsx from "clsx";
import { getPositionOfNode } from "@phantomthief/react.utils.helpers";
import useFocusWithCallback from "@phantomthief/react.hooks.focus-with-callback";
import useNotClickOnElements from "@phantomthief/react.hooks.not-click-on-elements";

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

    // GOOD
    useNotClickOnElements([boxRef, optionGroupRef], () => {
      setShow(false);
    });
    // GOOD

    // GOOD
    const { isFocused, captureOnFocus, captureOnBlur } = useFocusWithCallback(
      onFocus,
      onBlur,
    );
    // GOOD

    // GOOD
    const toggleListOptions = (e: MouseEvent) => {
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
    // GOOD

    // GOOD
    const isLabelCollapsed = disabled || isFocused || !!value ? true : false;
    // GOOD

    // GOOD
    const displayedOption = options.find((o) => o.value === value);
    // GOOD

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

    // GOOD
    const customLabel = useMemo(() => {
      if (hiddenLabel || !label) {
        return null;
      }
      return (
        <Styled.Label
          variant="span"
          size={16}
          font={VERNADA_FONT}
          color={disabled ? "#ffffff80" : "#ffffff"}
          selectVariant={variant}
          isLabelCollapsed={isLabelCollapsed}
          className={clsx(
            "select-label",
            `select-label--${variant}`,
            `select-label__collapsed--${isLabelCollapsed}`,
            `select-label__disabled--${disabled}`,
            `select-label__required--${required}`,
          )}
          data-testid="select-label"
        >
          {label} {required ? "*" : ""}
        </Styled.Label>
      );
    }, [disabled, hiddenLabel, isLabelCollapsed, label, required, variant]);
    // GOOD

    // GOOD
    const customPostAdorment = useMemo(
      () => (
        <Styled.PostAdorment
          variant={variant}
          className={clsx(
            "select-postAdorment",
            `select-postAdorment--${variant}`,
            className,
          )}
          data-testid="select-postAdorment"
        >
          <Styled.Arrow
            $isShowed={isShowed}
            color={disabled ? "#ffffff80" : "#ffffff"}
          />
        </Styled.PostAdorment>
      ),
      [className, disabled, isShowed, variant],
    );
    // GOOD

    const customHelperText = useMemo(() => {
      if (!helperText) {
        return null;
      }
      return (
        <Styled.HelperText
          variant="span"
          size={12}
          font={VERNADA_FONT}
          color="#ffffffb3"
          selectVariant={variant}
          className={clsx(
            "select-helperText",
            `select-helperText--${variant}`,
            className,
          )}
          data-testid="select-helperText"
        >
          {helperText}
        </Styled.HelperText>
      );
    }, [className, helperText, variant]);

    const selectOptionsMenu = useMemo(() => {
      return options.map((option: ISelectOption) => {
        return (
          <Styled.Option
            key={option.value}
            variant="button"
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
        className={clsx("select", `select__fullwidth--${fullWidth}`, className)}
        fullWidth={fullWidth}
        data-testid="select"
      >
        <Styled.Box
          ref={boxRef}
          onClick={toggleListOptions}
          variant={variant}
          disabled={disabled}
          fullWidth={fullWidth}
          onFocus={captureOnFocus}
          onBlur={captureOnBlur}
          className={clsx(
            "select-box",
            `select-box__fullwidth--${fullWidth}`,
            `select-box__disabled--${disabled}`,
            `select-box--${variant}`,
          )}
          data-testid="select-box"
        >
          {customLabel}
          <Styled.FakeSelect required={required} />
          <Styled.InnerBox
            className={clsx("select-inner-box")}
            data-testid="select-displayed-option"
          >
            {displayedOption?.label}
          </Styled.InnerBox>
          {customPostAdorment}
          {customHelperText}
        </Styled.Box>

        <Portal className={clsx("portal-select", optionGroupClassName)}>
          <Styled.OptionGroup
            ref={optionGroupRef}
            position={position}
            isShowed={isShowed}
            className={clsx(
              "select-options",
              `select-options__position--${JSON.stringify(position)}`,
              `select-options__isShowed--${isShowed}`,
            )}
          >
            {selectOptionsMenu}
          </Styled.OptionGroup>
        </Portal>
      </Styled.Container>
    );
  },
);

Select.displayName = "Select";
