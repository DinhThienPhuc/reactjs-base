import { TVariant } from "@phantomthief/react.utils.definations";
import { HTMLAttributes, ReactNode } from "react";

export type THelperTextVariant = TVariant;

export interface IHelperTextProps extends HTMLAttributes<HTMLElement> {
  variant?: THelperTextVariant;
  text?: ReactNode;
}
