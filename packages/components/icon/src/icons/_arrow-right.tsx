import clsx from "clsx";
import React from "react";

import { ISingleIconProps } from "../_types";

export const IconArrowRight = ({
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
};
