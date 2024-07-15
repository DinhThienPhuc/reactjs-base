import { HTMLAttributes, ReactNode } from "react";

import { IExtendable } from "@phantomthief-react/utils";

import { HELPER_TEXT_VARIANT } from "./_constants";

export type THelperTextVariant =
  (typeof HELPER_TEXT_VARIANT)[keyof typeof HELPER_TEXT_VARIANT];

export interface IHelperTextProps
  extends HTMLAttributes<HTMLElement>,
    IExtendable {
  variant?: THelperTextVariant;
  children?: ReactNode;
  isError?: boolean;
  hasLabel?: boolean;
}
