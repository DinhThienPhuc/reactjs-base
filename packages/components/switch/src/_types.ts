import {
  ChangeEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { IExtendable, IFormFieldProps } from "@phantomthief-react/utils";

export interface ISwitchProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    IFormFieldProps,
    IExtendable {
  value?: boolean;
  leftLabel?: ReactNode;
  rightLabel?: ReactNode;
  inputProps?: InputHTMLAttributes<HTMLInputElement> & IExtendable;
  onChange?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
}
