import { ISingleIconProps } from "../_types";
import React from "react";

export const IconChevronDown = ({
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
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
};
