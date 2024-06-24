import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";
import { IExtendable, ISyncStateWithProps } from "@phantomthief-react/utils";

export interface IRadioGroupOptionProps
  extends InputHTMLAttributes<HTMLInputElement>,
    ISyncStateWithProps,
    IExtendable {
  key: string;
  value: string;
  label?: ReactNode;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  currentValue?: string;
}

export interface IRadioGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    ISyncStateWithProps,
    IExtendable {
  options: IRadioGroupOptionProps[];
  value?: string;
  label?: ReactNode;
  name: string;
}
