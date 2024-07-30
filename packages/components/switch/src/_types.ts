import { ChangeEvent, HTMLAttributes, InputHTMLAttributes } from "react";

import { IExtendable, IFormFieldProps } from "@phantomthief-react/utils";

export interface ISwitchProps extends IFormFieldProps {
  value?: boolean;
  leftLabel?: string;
  rightLabel?: string;
  htmlAttributes?: HTMLAttributes<HTMLDivElement> & IExtendable;
  inputHtmlAttributes?: InputHTMLAttributes<HTMLInputElement> & IExtendable;
  leftHtmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
  rightHtmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
  onChange?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISwitchLeftLabelProps {
  leftLabel?: string;
  disabled?: boolean;
  htmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
}

export interface ISwitchRightLabelProps {
  rightLabel?: string;
  disabled?: boolean;
  htmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
}
