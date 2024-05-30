import { IExtendable } from "@phantomthief-react/utils";
import { HTMLAttributes, ReactNode } from "react";

export interface ITypographyProps
  extends HTMLAttributes<HTMLElement>,
    IExtendable {
  variant?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  size?: number | string;
  bold?: number;
  color?: string;
  font?: string;
  className?: string;
}

export interface IStyledTypographyProps extends IExtendable {
  $size?: number | string;
  $color?: string;
  $bold?: number;
  $font?: string;
}
