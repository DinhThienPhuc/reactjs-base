import { HTMLAttributes, ReactNode } from "react";

import { TVariant } from "@phantomthief/react.utils.definations";

export type THelperTextVariant = TVariant;

export interface IHelperTextProps extends HTMLAttributes<HTMLElement> {
  variant?: THelperTextVariant;
  text?: ReactNode;
}
