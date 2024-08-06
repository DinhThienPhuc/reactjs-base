import {
  ChangeEvent,
  FocusEventHandler,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";

import { IHelperTextProps } from "@phantompurr-react/components.helper-text";
import { ILabelProps } from "@phantompurr-react/components.label";
import { IPostAdormentProps } from "@phantompurr-react/components.post-adorment";
import { IPreAdormentProps } from "@phantompurr-react/components.pre-adorment";
import {
  IExtendable,
  IFormFieldProps,
  TFunction,
} from "@phantompurr-react/utils.definations";

import { TEXT_FIELD_VARIANT } from "./_constants";

export type TTextFieldVariant =
  (typeof TEXT_FIELD_VARIANT)[keyof typeof TEXT_FIELD_VARIANT];

export interface ITextFieldProps extends IFormFieldProps {
  value?: string;
  variant?: TTextFieldVariant;
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  clear?: TFunction<void>;
  htmlAttributes?: HTMLAttributes<HTMLDivElement> & IExtendable;
  inputHtmlAttributes?: InputHTMLAttributes<HTMLInputElement> & IExtendable;
  labelProps?: ILabelProps;
  preAdormentProps?: IPreAdormentProps;
  postAdormentProps?: IPostAdormentProps;
  helperTextProps?: IHelperTextProps;
}
