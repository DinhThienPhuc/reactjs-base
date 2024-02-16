import { useEffect, useRef } from "react";

import { TAny } from "@phantomthief/react.utils.definations";
import { logger } from "@phantomthief/react.utils.helpers";

export type IProps = Record<string, TAny>;

export default function useWhyDidYouUpdate(
  componentName: string,
  props: IProps,
) {
  const prevProps = useRef<IProps>({});

  useEffect(() => {
    if (prevProps.current) {
      const allKeys = Object.keys({ ...prevProps.current, ...props });
      const changedProps: IProps = {};

      allKeys.forEach((key) => {
        if (!Object.is(prevProps.current[key], props[key])) {
          changedProps[key] = {
            from: prevProps.current[key],
            to: props[key],
          };
        }
      });

      if (Object.keys(changedProps).length) {
        logger.log("%c❄️ [why-did-you-update] ❄️", "color:#94f2f4");
        logger.log(componentName, changedProps);
      }
    }

    prevProps.current = props;
  });
}
