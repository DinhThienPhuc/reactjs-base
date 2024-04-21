import { HTMLAttributes, InputHTMLAttributes } from "react";
import { IExtendable, TFunction } from "@phantomthief/react.utils.definations";

import { IHelperTextProps } from "@phantomthief/react.components.helper-text";
import { ILabelProps } from "@phantomthief/react.components.label";
import { INPUT_VARIANT } from "./_constants";
import { IPostAdormentProps } from "@phantomthief/react.components.post-adorment";
import { IPreAdormentProps } from "@phantomthief/react.components.pre-adorment";

export type TInputVariant = (typeof INPUT_VARIANT)[keyof typeof INPUT_VARIANT];

export interface IInputProps extends HTMLAttributes<HTMLElement>, IExtendable {
  fullWidth?: boolean;
  variant?: TInputVariant;
  clear?: TFunction<void>;
  inputBoxProps?: InputHTMLAttributes<HTMLInputElement>;
  labelProps?: ILabelProps;
  preAdormentProps?: IPreAdormentProps;
  postAdormentProps?: IPostAdormentProps;
  helperTextProps?: IHelperTextProps;
}
