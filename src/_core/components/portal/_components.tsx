import React, { useEffect } from "react";

import { createPortal } from "react-dom";
import { IPortalProps } from "./_types";

export const Portal = ({ children, className = "" }: IPortalProps) => {
  const elementContainer = React.useRef<Element | null>(null);

  useEffect(() => {
    let portalRoot = document.getElementById("portal-root") as HTMLDivElement;

    if (!portalRoot) {
      portalRoot = document.createElement("div");
      portalRoot.setAttribute("id", "portal-root");
    }

    if (!elementContainer.current) {
      elementContainer.current = document.createElement("div");
      elementContainer.current.setAttribute("data-testid", "portal");
      elementContainer.current.setAttribute("class", `portal ${className}`);
    }

    document.body.appendChild(portalRoot);
    portalRoot.appendChild(elementContainer.current);

    return () => {
      elementContainer.current &&
        portalRoot.removeChild(elementContainer.current);
    };
  }, [className]);

  return elementContainer.current
    ? createPortal(children, elementContainer.current)
    : null;
};
