import { TVariant } from "@phantomthief/react.utils.definations";
import { ReactNode } from "react";

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
