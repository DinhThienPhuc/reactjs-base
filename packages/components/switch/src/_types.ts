import { ChangeEvent, HTMLAttributes, InputHTMLAttributes } from "react";

import { IExtendable, IFormFieldProps } from "@phantomthief-react/utils";

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

export interface ISwitchLeftLabelProps
  extends HTMLAttributes<HTMLDivElement>,
    IExtendable {
  leftLabel?: string;
}

export interface ISwitchRightLabelProps
  extends HTMLAttributes<HTMLDivElement>,
    IExtendable {
  rightLabel?: string;
}
