import { ReactNode } from "react";
import { TVariant } from "@phantomthief/react.utils.definations";

export type TLabelVariant = TVariant;

export interface ILabelProps {
  className?: string;
  content?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  hiddenLabel?: boolean;
  variant?: TLabelVariant;
  isLabelCollapsed: boolean;
}
