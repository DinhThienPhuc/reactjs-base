import { FocusEvent, FocusEventHandler, useCallback, useState } from "react";

export interface IFocusWithCallback {
  onFocus: FocusEventHandler<HTMLElement> | undefined;
  onBlur: FocusEventHandler<HTMLElement> | undefined;
  focused?: boolean;
  disabled?: boolean;
}

const useFocusWithCallback = ({
  onFocus,
  onBlur,
  focused = false,
  disabled = false,
}: IFocusWithCallback) => {
  const [isFocused, setFocus] = useState<boolean>(focused);

  const captureOnFocus = useCallback(
    (e: FocusEvent<HTMLElement, Element>) => {
      if (disabled) {
        return;
      }
      onFocus?.(e);
      setFocus(true);
    },
    [disabled, onFocus],
  );

  const captureOnBlur = useCallback(
    (e: FocusEvent<HTMLElement, Element>) => {
      if (disabled) {
        return;
      }
      onBlur?.(e);
      setFocus(false);
    },
    [disabled, onBlur],
  );

  return {
    captureOnFocus,
    captureOnBlur,
    isFocused,
  };
};

export default useFocusWithCallback;
