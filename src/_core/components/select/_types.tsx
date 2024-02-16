import { HTMLAttributes, MouseEventHandler, ReactNode } from "react";

import { SELECT_VARIANT } from "./_constants";

export interface ISelectOption {
  value: string;
  label: ReactNode;
}

export interface ISelectOptionsProps {
  options: ISelectOption[];
  displayedOption?: ISelectOption;
  handleSelectOption: (value: string) => MouseEventHandler<HTMLDivElement>;
}

export type TSelectVariant =
  (typeof SELECT_VARIANT)[keyof typeof SELECT_VARIANT];

export interface ISelectProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  optionGroupClassName?: string;
  options: ISelectOption[];
  label?: ReactNode;
  value?: string;
  fullWidth?: boolean;
  variant?: TSelectVariant;
  helperText?: ReactNode;
  disabled?: boolean;
  required?: boolean;
  hiddenLabel?: boolean;
}

export interface ISelectEventTarget extends EventTarget {
  value: string;
}
