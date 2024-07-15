import React, {
  MouseEventHandler,
  Suspense,
  forwardRef,
  lazy,
  useCallback,
  useMemo,
  useRef,
  useState,
  MouseEvent,
} from "react";
import {
  useBlock,
  useNotClickOnElements,
  useSyncStateWithProps,
} from "@phantomthief-react/hooks";
import { INodePosition, getPositionOfNode } from "@phantomthief-react/utils";
import { PostAdorment } from "@phantomthief-react/components.post-adorment";
import { HelperText } from "@phantomthief-react/components.helper-text";
import { Portal } from "@phantomthief-react/components.portal";
import { Label } from "@phantomthief-react/components.label";
import { ISelectEventTarget, ISelectProps } from "../_types";
import { Icon } from "@phantomthief-react/components.icon";
import { SELECT_VARIANT } from "../_constants";
import { Styled } from "../_style";
import clsx from "clsx";

const SelectMenu = lazy(() =>
  import("./_menu").then((module) => ({ default: module.SelectMenu })),
);

export const Select = forwardRef<HTMLSelectElement, ISelectProps>(
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
      error = null,
      isStandalone = false,
      optionGroupClassName,
      labelProps,
      postAdormentProps,
      helperTextProps,
      onChange,
      ...restProps
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
          {postAdormentProps?.children ?? <Icon name="chevron-down" />}
        </Styled.PostAdormentContentWrapper>
      ),
      [disabled, isShowed, postAdormentProps?.children],
    );

    const handleSelectOption = useCallback(
      (value: string) => (e: MouseEvent<HTMLSpanElement>) => {
        const target: ISelectEventTarget = {
          ...e.target,
          value,
        };
        e.target = target;
        onChange?.(e);
        setShow(false);
        setCurrentValue(value);
      },
      [onChange, setCurrentValue, setShow],
    );

    return (
      <Styled.Container
        {...restProps}
        $fullWidth={fullWidth}
        className={clsx("select", fullWidth && "select--fullWidth", className)}
        data-testid="select"
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
          data-testid="select-box"
        >
          <Label
            {...labelProps}
            required={required}
            disabled={disabled}
            variant={variant}
            isLabelCollapsed={isLabelCollapsed}
            isFocused={isShowed}
            isError={!!error}
          />
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
            data-testid="select-displayed-option"
          >
            {displayedOption?.label}
          </Styled.InnerBox>
          <PostAdorment {...postAdormentProps} variant={variant}>
            {postAdormentContent}
          </PostAdorment>
          <HelperText {...helperTextProps} isError={!!error} variant={variant}>
            {error?.message ?? helperTextProps?.children ?? ""}
          </HelperText>
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
