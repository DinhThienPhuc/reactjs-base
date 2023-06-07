import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

export type TButtonSize = "small" | "medium" | "large";

export type TButtonVariant = "outlined" | "contained" | "text";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TButtonSize;
  variant?: TButtonVariant;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  loadingComponent?: ReactNode;
}
