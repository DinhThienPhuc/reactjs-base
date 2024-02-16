import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";

export interface ISwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value?: boolean;
  leftLabel?: ReactNode;
  rightLabel?: ReactNode;
  onChange?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
}
