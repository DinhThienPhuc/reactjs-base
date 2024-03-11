import { HTMLAttributes, ReactNode } from "react";

import { HELPER_TEXT_VARIANT } from "./_constants";
import { IExtendable } from "@phantomthief/react.utils.definations";

export type THelperTextVariant =
  (typeof HELPER_TEXT_VARIANT)[keyof typeof HELPER_TEXT_VARIANT];

export interface IHelperTextProps
  extends HTMLAttributes<HTMLElement>,
    IExtendable {
  variant?: THelperTextVariant;
  text?: ReactNode;
}
