import { IInputProps } from "./types";
import { useFocusWithCallback } from "@phantomthief/react-mui.hooks";
import { useMemo } from "react";

export const useLogic = ({
  preAdorment,
  value,
  onFocus,
  onBlur,
}: IInputProps) => {
  const { captureOnFocus, captureOnBlur, isFocused } = useFocusWithCallback(
    onFocus,
    onBlur,
  );

  const isLabelCollapsed = useMemo(() => {
    if (isFocused) {
      return true;
    }
    if (!!preAdorment || !!value) {
      return true;
    }
    return false;
  }, [isFocused, preAdorment, value]);

  return { captureOnFocus, captureOnBlur, isLabelCollapsed };
};
