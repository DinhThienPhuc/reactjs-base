import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

import { IPortalProps } from "./_types";

export const Portal = ({
  children,
  className = "",
  ...restProps
}: IPortalProps) => {
  const elementContainer = React.useRef<Element | null>(null);

  const setAttributesToElement = useCallback(
    (element: Element | null) => {
      element?.setAttribute("data-testid", "portal");
      element?.setAttribute("class", `portal ${className}`);

      Object.entries(restProps).forEach(([key, value]: [string, unknown]) => {
        element?.setAttribute(key, String(value));
      });
    },
    [className, restProps],
  );

  useEffect(() => {
    let portalRoot = document.getElementById("portal-root") as HTMLDivElement;

    if (!portalRoot) {
      portalRoot = document.createElement("div");
      portalRoot.setAttribute("id", "portal-root");
    }

    if (!elementContainer.current) {
      elementContainer.current = document.createElement("div");
      setAttributesToElement(elementContainer.current);
    }

    document.body.appendChild(portalRoot);
    portalRoot.appendChild(elementContainer.current);

    return () => {
      elementContainer.current &&
        portalRoot.removeChild(elementContainer.current);
    };
  }, [setAttributesToElement]);

  return elementContainer.current
    ? createPortal(children, elementContainer.current)
    : null;
};
