import { IExtendable, IFormFieldProps } from "@phantomthief-react/utils";
import { ChangeEvent, HTMLAttributes, InputHTMLAttributes } from "react";

export interface ISwitchProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    IFormFieldProps,
    IExtendable {
  value?: boolean;
  leftLabel?: string;
  rightLabel?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement> & IExtendable;
  onChange?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
}
