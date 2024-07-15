import { ReactNode } from "react";

import { IExtendable } from "@phantomthief-react/utils";

import { LABEL_VARIANT } from "./_constants";

export type TLabelVariant = (typeof LABEL_VARIANT)[keyof typeof LABEL_VARIANT];

export interface ILabelProps extends IExtendable {
  className?: string;
  children?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  isFocused?: boolean;
  hiddenLabel?: boolean;
  variant?: TLabelVariant;
  isLabelCollapsed: boolean;
  isError?: boolean;
}

export interface IStyledLabelProps {
  $variant: TLabelVariant;
  $isLabelCollapsed: boolean;
  $disabled: boolean;
  $isError: boolean;
  $isFocused: boolean;
}
