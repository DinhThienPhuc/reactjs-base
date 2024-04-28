import { HTMLAttributes, MouseEventHandler, ReactNode } from "react";

import { IExtendable } from "@phantomthief/react.utils.definations";
import { IHelperTextProps } from "@phantomthief/react.components.helper-text";
import { ILabelProps } from "@phantomthief/react.components.label";
import { IPostAdormentProps } from "@phantomthief/react.components.post-adorment";
import { SELECT_VARIANT } from "./_constants";

export interface ISelectOption extends IExtendable {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface ISelectOptionProps extends ISelectOption {
  displayedValue?: string;
  handleSelectOption: (value: string) => MouseEventHandler<HTMLDivElement>;
}

export type TSelectVariant =
  (typeof SELECT_VARIANT)[keyof typeof SELECT_VARIANT];

export interface ISelectProps extends HTMLAttributes<HTMLElement>, IExtendable {
  className?: string;
  optionGroupClassName?: string;
  options: ISelectOption[];
  value?: string;
  fullWidth?: boolean;
  variant?: TSelectVariant;
  disabled?: boolean;
  required?: boolean;
  labelProps?: ILabelProps;
  postAdormentProps?: IPostAdormentProps;
  helperTextProps?: IHelperTextProps;
  isError?: boolean;
}

export interface ISelectEventTarget extends EventTarget {
  value: string;
}
