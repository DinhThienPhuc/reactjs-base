import { Property } from "csstype";
import { HTMLAttributes, ReactNode } from "react";

import { IExtendable } from "@phantomthief-react/utils";

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
  align?: Property.TextAlign;
}

export interface IStyledTypographyProps extends IExtendable {
  $size?: number | string;
  $color?: string;
  $bold?: number;
  $font?: string;
}
