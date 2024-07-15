import clsx from "clsx";
import React from "react";

import { ISingleIconProps } from "../_types";

export const IconAnchor = ({
  name,
  className,
  ...restProps
}: ISingleIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...restProps}
      className={clsx("phantomthief-icon", "icon", `icon--${name}`, className)}
    >
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
    </svg>
  );
};
