import { InputHTMLAttributes, ReactNode } from "react";

export interface ISwitchLeftLabelProps {
  leftLabel?: ReactNode;
}

export interface ISwitchRightLabelProps {
  rightLabel?: ReactNode;
}

export interface ISwitchProps
  extends InputHTMLAttributes<HTMLInputElement>,
    ISwitchLeftLabelProps,
    ISwitchRightLabelProps {}
