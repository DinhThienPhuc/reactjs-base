import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";

import { IHelperTextProps } from "@phantomthief-react/components.helper-text";
import { ILabelProps } from "@phantomthief-react/components.label";
import { IPostAdormentProps } from "@phantomthief-react/components.post-adorment";
import { IPreAdormentProps } from "@phantomthief-react/components.pre-adorment";
import {
  IExtendable,
  IFormFieldProps,
  TFunction,
} from "@phantomthief-react/utils";

import { TEXT_FIELD_VARIANT } from "./_constants";

export type TTextFieldVariant =
  (typeof TEXT_FIELD_VARIANT)[keyof typeof TEXT_FIELD_VARIANT];

export interface ITextFieldProps extends IFormFieldProps {
  value?: string;
  variant?: TTextFieldVariant;
  onChange?: ChangeEventHandler<HTMLInputElement>;
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
