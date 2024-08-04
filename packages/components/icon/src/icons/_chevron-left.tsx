import clsx from "clsx";
import React from "react";

import { ISingleIconProps } from "../_types";

export const IconChevronLeft = ({
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
      className={clsx("phantomthief-icon", "icon", `icon--${name}`, className)}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
};
