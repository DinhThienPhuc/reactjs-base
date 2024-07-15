import { HTMLAttributes, InputHTMLAttributes } from "react";

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

export interface ITextFieldProps
  extends HTMLAttributes<HTMLElement>,
    IFormFieldProps,
    IExtendable {
  variant?: TTextFieldVariant;
  clear?: TFunction<void>;
  captureOnFocus?: (e: React.FocusEvent<HTMLElement, Element>) => void;
  captureOnBlur?: (e: React.FocusEvent<HTMLElement, Element>) => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  labelProps?: ILabelProps;
  preAdormentProps?: IPreAdormentProps;
  postAdormentProps?: IPostAdormentProps;
  helperTextProps?: IHelperTextProps;
}
