import { MutableRefObject } from "react";

import useEventListener from "@phantomthief-react/hooks.event-listener";

const useNotClickOnElements = (
  refs: MutableRefObject<HTMLDivElement | null>[],
  callback?: () => void,
) => {
  useEventListener("click", (event: MouseEvent) => {
    for (let index = 0; index < refs.length; index++) {
      const ref = refs[index];
      if (!ref?.current || ref?.current.contains(event.target as Node)) {
        return;
      }
    }
    callback?.();
  });
};

export default useNotClickOnElements;
