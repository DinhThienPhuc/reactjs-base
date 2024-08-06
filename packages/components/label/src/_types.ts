import { HTMLAttributes, ReactNode } from "react";

import { IExtendable } from "@phantompurr-react/utils.definations";

import { LABEL_VARIANT } from "./_constants";

export type TLabelVariant = (typeof LABEL_VARIANT)[keyof typeof LABEL_VARIANT];

export interface ILabelProps {
  className?: string;
  children?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  isFocused?: boolean;
  hiddenLabel?: boolean;
  variant?: TLabelVariant;
  isLabelCollapsed?: boolean;
  isError?: boolean;
  htmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
}

export interface IStyledLabelProps {
  $variant: TLabelVariant;
  $isLabelCollapsed: boolean;
  $disabled: boolean;
  $isError: boolean;
  $isFocused: boolean;
}
