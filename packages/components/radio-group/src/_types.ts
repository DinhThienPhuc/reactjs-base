import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";
import { IExtendable, ISyncStateWithProps } from "@phantomthief-react/utils";
import { RADIO_GROUP_DIRECTION } from "./_constants";

export type TRadioGroupDirection =
  (typeof RADIO_GROUP_DIRECTION)[keyof typeof RADIO_GROUP_DIRECTION];

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

export interface IRadioGroupLabelProps extends IExtendable {
  label?: ReactNode;
  hasValue?: boolean;
}

export interface IRadioGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    ISyncStateWithProps,
    IExtendable {
  options: IRadioGroupOptionProps[];
  value?: string;
  label?: ReactNode;
  name: string;
  direction?: TRadioGroupDirection;
}
