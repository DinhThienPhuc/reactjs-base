import { InputHTMLAttributes, ReactNode } from "react";

export interface ISwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  leftLabel?: ReactNode;
  rightLabel?: ReactNode;
}
