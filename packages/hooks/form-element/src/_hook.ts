import { useCallback, useState } from "react";

const useFormElement = <V>(value: V, isStandalone = false) => {
  const [currentValue, setCurrentValue] = useState<V>(value);

  const handleSetCurrentValue = useCallback(
    (value: V) => {
      isStandalone && setCurrentValue(value);
    },
    [isStandalone],
  );

  return {
    currentValue: isStandalone ? currentValue : value,
    setCurrentValue: handleSetCurrentValue,
  };
};

export default useFormElement;
