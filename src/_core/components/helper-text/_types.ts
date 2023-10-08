import { ReactNode } from "react";
import { TVariant } from "@phantomthief/react.utils.definations";

export type THelperTextVariant = TVariant;

export interface IHelperTextProps {
  className?: string;
  variant?: THelperTextVariant;
  text?: ReactNode;
}
