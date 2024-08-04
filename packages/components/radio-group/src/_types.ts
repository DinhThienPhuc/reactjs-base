import { ChangeEvent, HTMLAttributes, LabelHTMLAttributes } from "react";

import { IExtendable, ISyncStateWithProps } from "@phantomthief-react/utils";

import { RADIO_GROUP_DIRECTION } from "./_constants";

export type TRadioGroupDirection =
  (typeof RADIO_GROUP_DIRECTION)[keyof typeof RADIO_GROUP_DIRECTION];

export interface IRadioGroupOption {
  key: string;
  value: string;
  label?: string;
  htmlAttributes?: LabelHTMLAttributes<HTMLLabelElement> & IExtendable;
}

export interface IRadioGroupOptionProps
  extends IRadioGroupOption,
    ISyncStateWithProps {
  name: string;
  currentValue?: string;
  setCurrentValue?: (value: string) => void;
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IRadioGroupLabelProps {
  label?: string;
  hasValue?: boolean;
  htmlAttributes?: LabelHTMLAttributes<HTMLLabelElement> & IExtendable;
}

export interface IRadioGroupProps extends ISyncStateWithProps {
  className?: string;
  options: IRadioGroupOption[];
  name: string;
  value?: string;
  label?: string;
  direction?: TRadioGroupDirection;
  htmlAttributes?: HTMLAttributes<HTMLDivElement> & IExtendable;
  labelHtmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
  optionHtmlAttributes?: LabelHTMLAttributes<HTMLLabelElement> & IExtendable;
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
}
