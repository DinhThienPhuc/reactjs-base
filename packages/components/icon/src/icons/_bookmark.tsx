import clsx from "clsx";
import React from "react";

import { ISingleIconProps } from "../_types";

export const IconBookmark = ({
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
};
