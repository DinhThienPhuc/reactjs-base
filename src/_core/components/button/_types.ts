import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { TSize, TVariant } from "@phantomthief/react.utils.definations";

export type TButtonSize = TSize;

export type TButtonVariant = TVariant;

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TButtonSize;
  variant?: TButtonVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  loadingComponent?: ReactNode;
}
