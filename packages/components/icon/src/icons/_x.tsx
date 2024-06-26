import { ISingleIconProps } from "../_types";
import React from "react";
import clsx from "clsx";

export const IconX = ({ name, className, ...restProps }: ISingleIconProps) => {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};
