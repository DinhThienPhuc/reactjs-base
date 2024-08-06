import clsx from "clsx";
import React from "react";

import { ISingleIconProps } from "../_types";

export const IconAnchor = ({
  className = "",
  name,
  color,
  width,
  height,
  htmlAttributes,
}: ISingleIconProps) => {
  return (
    <svg
      {...htmlAttributes}
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      color={color}
      className={clsx("phantompurr-icon", "icon", `icon--${name}`, className)}
    >
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
    </svg>
  );
};
