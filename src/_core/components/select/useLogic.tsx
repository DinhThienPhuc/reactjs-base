import { IPosition, getPositionOfNode } from "@phantomthief/react-mui.utils";
import { ISelectEventTarget, ISelectProps } from "./types";
import {
  MouseEvent,
  MouseEventHandler,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  useFocusWithCallback,
  useNotClickOnElements,
} from "@phantomthief/react-mui.hooks";

export const useLogic = ({
  options,
  value,
  disabled = false,
  onChange,
  onFocus,
  onBlur,
}: ISelectProps) => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const optionGroupRef = useRef<HTMLDivElement | null>(null);
  const [isShowed, setShow] = useState(false);
  const [position, setPosition] = useState<IPosition | null>(null);

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

  return {
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
  };
};
