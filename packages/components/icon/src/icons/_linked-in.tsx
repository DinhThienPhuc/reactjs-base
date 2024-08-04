import clsx from "clsx";
import React from "react";

import { ISingleIconProps } from "../_types";

export const IconLinkedIn = ({
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
};
