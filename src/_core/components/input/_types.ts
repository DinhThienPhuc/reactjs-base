import { InputHTMLAttributes, ReactNode } from "react";
import { TFunction, TVariant } from "@phantomthief/react.utils.definations";

export type TInputVariant = Exclude<TVariant, "contained" | "text">;

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  hiddenLabel?: boolean;
  fullWidth?: boolean;
  variant?: TInputVariant;
  preAdorment?: ReactNode;
  postAdorment?: ReactNode;
  helperText?: ReactNode;
  clear?: TFunction<void>;
}
