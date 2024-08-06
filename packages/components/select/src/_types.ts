import {
  HTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
} from "react";

import { IHelperTextProps } from "@phantompurr-react/components.helper-text";
import { ILabelProps } from "@phantompurr-react/components.label";
import { IPostAdormentProps } from "@phantompurr-react/components.post-adorment";
import {
  IExtendable,
  IFormFieldProps,
  INodePosition,
} from "@phantompurr-react/utils";

import { SELECT_VARIANT } from "./_constants";

export interface ISelectOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
  htmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
}

export interface ISelectOptionProps extends ISelectOption {
  displayedValue?: string;
  handleSelectOption: (value: string) => MouseEventHandler<HTMLSpanElement>;
}

export type TSelectVariant =
  (typeof SELECT_VARIANT)[keyof typeof SELECT_VARIANT];

export interface ISelectMenuProps {
  options: ISelectOption[];
  position: INodePosition | null;
  isShowed: boolean;
  currentValue?: string;
  optionGroupClassName?: string;
  htmlAttributes?: HTMLAttributes<HTMLDivElement> & IExtendable;
  selectOption: (value: string) => MouseEventHandler<HTMLSpanElement>;
}

export interface ISelectProps extends IFormFieldProps {
  optionGroupClassName?: string;
  options: ISelectOption[];
  value?: string;
  variant?: TSelectVariant;
  labelProps?: ILabelProps;
  postAdormentProps?: IPostAdormentProps;
  helperTextProps?: IHelperTextProps;
  htmlAttributes?: HTMLAttributes<HTMLDivElement> & IExtendable;
  menuHtmlAttributes?: HTMLAttributes<HTMLDivElement> & IExtendable;
  tabIndex?: number;
  onChange?: (value: string, e: MouseEvent<HTMLSpanElement>) => void;
}
