import { InputHTMLAttributes, ReactNode } from "react";

import { INPUT_VARIANT } from "./_constants";

export type TInputVariant = (typeof INPUT_VARIANT)[keyof typeof INPUT_VARIANT];

// TODO: add comment for interface, type, function
// TODO: add accessibility params

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * A text or an element to be used in an enclosing label element. Prefer a string.
   */
  label?: ReactNode;
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a FilledInput.
   * Be sure to add aria-label to the input element.
   */
  hiddenLabel?: boolean;
  fullWidth?: boolean;
  variant?: TInputVariant;
  preAdorment?: ReactNode;
  postAdorment?: ReactNode;
  helperText?: ReactNode;
}
