import { FieldError } from "react-hook-form";
import { TAny } from "./_types";

/**
 * Extendable interface, can be inherited
 */
export interface IExtendable {
  [key: string]: TAny;
}

/**
 * Node Position interface
 */
export interface INodePosition {
  left: number;
  top: number;
  width: number;
  height: number;
}

/**
 * Common Loading Component props
 */
export interface ILoadingProps {
  size?: number;
  color?: string;
  className?: string;
  fullScreen?: boolean;
}

/**
 * Form Field Props
 */
export interface IFormFieldProps {
  isStandalone?: boolean;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: FieldError;
}
