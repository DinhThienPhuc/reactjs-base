import clsx from "clsx";
import React, {
  MouseEvent,
  MouseEventHandler,
  Suspense,
  forwardRef,
  lazy,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

import { Portal } from "@phantomthief-react/components.portal";
import useBlock from "@phantomthief-react/hooks.block";
import useNotClickOnElements from "@phantomthief-react/hooks.not-click-on-elements";
import useSyncStateWithProps from "@phantomthief-react/hooks.sync-state-with-props";
import { INodePosition, getPositionOfNode } from "@phantomthief-react/utils";

import { SELECT_VARIANT } from "../_constants";
import { Styled } from "../_style";
import { ISelectProps } from "../_types";

const HelperText = lazy(() =>
  import("@phantomthief-react/components.helper-text").then((module) => ({
    default: module.HelperText,
  })),
);

const Icon = lazy(() =>
  import("@phantomthief-react/components.icon").then((module) => ({
    default: module.Icon,
  })),
);

const Label = lazy(() =>
  import("@phantomthief-react/components.label").then((module) => ({
    default: module.Label,
  })),
);

const PostAdorment = lazy(() =>
  import("@phantomthief-react/components.post-adorment").then((module) => ({
    default: module.PostAdorment,
  })),
);

const SelectMenu = lazy(() =>
  import("./_menu").then((module) => ({ default: module.SelectMenu })),
);

export const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  (
    {
      optionGroupClassName,
      options,
      value,
      variant = SELECT_VARIANT.STANDARD,
      labelProps,
      postAdormentProps,
      helperTextProps,
      className,
      fullWidth = false,
      disabled = false,
      required = false,
      error = null,
      isStandalone = false,
      tabIndex = -1,
      menuHtmlAttributes,
      htmlAttributes,
      onChange,
    },
    _ref,
  ) => {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const optionGroupRef = useRef<HTMLDivElement | null>(null);
    const [isShowed, setShow] = useState(false);
    const [position, setPosition] = useState<INodePosition | null>(null);

    const { currentValue, setCurrentValue } = useSyncStateWithProps<
      string | undefined
    >(value, isStandalone);

    useNotClickOnElements([boxRef, optionGroupRef], () => {
      if (isShowed) {
        setShow(false);
      }
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

    const isLabelCollapsed = useBlock(() => {
      if (disabled) {
        return true;
      }
      if (isShowed || !!currentValue) {
        return true;
      }
      return false;
    });

    const displayedOption = options.find((o) => o.value === currentValue);

    const postAdormentContent = useMemo(
      () => (
        <Styled.PostAdormentContentWrapper
          $isShowed={isShowed}
          $disabled={disabled}
          className={clsx(
            "select-post-adorment-content",
            isShowed && "select-post-adorment-content--showed",
            disabled && "select-post-adorment-content--disabled",
          )}
        >
          {postAdormentProps?.children ?? (
            <Suspense>
              <Icon name="chevron-down" />
            </Suspense>
          )}
        </Styled.PostAdormentContentWrapper>
      ),
      [disabled, isShowed, postAdormentProps?.children],
    );

    const handleSelectOption = useCallback(
      (value: string) => (e: MouseEvent<HTMLSpanElement>) => {
        onChange?.(value, e);
        setShow(false);
        setCurrentValue(value);
      },
      [onChange, setCurrentValue, setShow],
    );

    return (
      <Styled.Container
        {...htmlAttributes}
        $fullWidth={fullWidth}
        className={clsx("select", fullWidth && "select--fullWidth", className)}
      >
        <Styled.Box
          $variant={variant}
          $disabled={disabled}
          $fullWidth={fullWidth}
          $isError={!!error}
          ref={boxRef}
          onClick={toggleListOptions}
          tabIndex={tabIndex}
          className={clsx(
            "select-box",
            fullWidth && "select-box--fullwidth",
            disabled && "select-box--disabled",
            !!error && "select-box--error",
            `select-box--variant-${variant}`,
          )}
        >
          <Suspense>
            {!!labelProps?.children && (
              <Label
                {...labelProps}
                required={required}
                disabled={disabled}
                variant={variant}
                isLabelCollapsed={isLabelCollapsed}
                isFocused={isShowed}
                isError={!!error}
              />
            )}
          </Suspense>
          <Styled.FakeSelect required={required} disabled={disabled} />
          <Styled.InnerBox
            $hasLabel={!!labelProps?.children}
            $variant={variant}
            $disabled={disabled}
            className={clsx(
              "select-inner-box",
              `select-inner-box--variant-${variant}`,
              !!labelProps?.children && "select-inner-box--hasLabel",
              disabled && "select-inner-box--disabled",
            )}
          >
            {displayedOption?.label}
          </Styled.InnerBox>
          <Suspense>
            {!!postAdormentProps?.children && (
              <PostAdorment {...postAdormentProps} variant={variant}>
                {postAdormentContent}
              </PostAdorment>
            )}
          </Suspense>
          <Suspense>
            {!!helperTextProps?.children && (
              <HelperText
                {...helperTextProps}
                isError={!!error}
                variant={variant}
              >
                {error?.message ?? helperTextProps?.children ?? ""}
              </HelperText>
            )}
          </Suspense>
        </Styled.Box>
        <Portal className={clsx("portal-select", optionGroupClassName)}>
          <Suspense>
            {isShowed && (
              <SelectMenu
                ref={optionGroupRef}
                options={options}
                position={position}
                isShowed={isShowed}
                optionGroupClassName={optionGroupClassName}
                currentValue={currentValue}
                htmlAttributes={menuHtmlAttributes}
                selectOption={handleSelectOption}
              />
            )}
          </Suspense>
        </Portal>
      </Styled.Container>
    );
  },
);

Select.displayName = "Select";
