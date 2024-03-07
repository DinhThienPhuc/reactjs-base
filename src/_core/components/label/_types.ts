import { IExtendable } from "@phantomthief/react.utils.definations";
import { LABEL_VARIANT } from "./_constants";
import { ReactNode } from "react";

export type TLabelVariant = (typeof LABEL_VARIANT)[keyof typeof LABEL_VARIANT];

export interface ILabelProps extends IExtendable {
  className?: string;
  content?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  hiddenLabel?: boolean;
  variant?: TLabelVariant;
  isLabelCollapsed: boolean;
}

export interface IStyledLabelProps {
  $variant: TLabelVariant;
  $isLabelCollapsed: boolean;
}
