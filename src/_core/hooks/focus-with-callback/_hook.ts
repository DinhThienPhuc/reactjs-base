import { FocusEvent, FocusEventHandler, useCallback, useState } from "react";

const useFocusWithCallback = (
  onFocus: FocusEventHandler<HTMLElement> | undefined,
  onBlur: FocusEventHandler<HTMLElement> | undefined,
  focused = false,
) => {
  const [isFocused, setFocus] = useState<boolean>(focused);

  const captureOnFocus = useCallback(
    (e: FocusEvent<HTMLElement, Element>) => {
      onFocus?.(e);
      setFocus(true);
    },
    [onFocus],
  );

  const captureOnBlur = useCallback(
    (e: FocusEvent<HTMLElement, Element>) => {
      onBlur?.(e);
      setFocus(false);
    },
    [onBlur],
  );

  return {
    captureOnFocus,
    captureOnBlur,
    isFocused,
  };
};

export default useFocusWithCallback;
