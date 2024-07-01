import { ISingleIconProps } from "../_types";
import React from "react";
import clsx from "clsx";

export const IconArrowLeft = ({
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
};
