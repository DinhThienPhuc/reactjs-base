import {
  IExtendable,
  IFormFieldProps,
  INodePosition,
} from "@phantomthief-react/utils";
import { IPostAdormentProps } from "@phantomthief-react/components.post-adorment";
import { IHelperTextProps } from "@phantomthief-react/components.helper-text";
import { HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { ILabelProps } from "@phantomthief-react/components.label";
import { SELECT_VARIANT } from "./_constants";

export interface ISelectOption
  extends HTMLAttributes<HTMLSpanElement>,
    IExtendable {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface ISelectOptionProps extends ISelectOption {
  displayedValue?: string;
  handleSelectOption: (value: string) => MouseEventHandler<HTMLSpanElement>;
}

export type TSelectVariant =
  (typeof SELECT_VARIANT)[keyof typeof SELECT_VARIANT];

export interface ISelectMenuProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    IExtendable {
  options: ISelectOption[];
  position: INodePosition | null;
  isShowed: boolean;
  optionGroupClassName?: string;
  currentValue?: string;
  selectOption: (value: string) => MouseEventHandler<HTMLSpanElement>;
}

export interface ISelectProps
  extends HTMLAttributes<HTMLElement>,
    IFormFieldProps,
    IExtendable {
  optionGroupClassName?: string;
  options: ISelectOption[];
  value?: string;
  variant?: TSelectVariant;
  labelProps?: ILabelProps;
  postAdormentProps?: IPostAdormentProps;
  helperTextProps?: IHelperTextProps;
}

export interface ISelectEventTarget extends EventTarget {
  value: string;
}
