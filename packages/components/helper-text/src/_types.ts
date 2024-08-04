import { HTMLAttributes, ReactNode } from "react";

import { IExtendable } from "@phantomthief-react/utils.definations";

import { HELPER_TEXT_VARIANT } from "./_constants";

export type THelperTextVariant =
  (typeof HELPER_TEXT_VARIANT)[keyof typeof HELPER_TEXT_VARIANT];

export interface IHelperTextProps {
  className?: string;
  variant?: THelperTextVariant;
  children?: ReactNode;
  isError?: boolean;
  hasLabel?: boolean;
  htmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
}
