import { Property } from "csstype";
import { HTMLAttributes, ReactNode } from "react";

import { IExtendable } from "@phantompurr-react/utils.definations";

export interface ITypographyProps {
  variant?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  size?: number | string;
  bold?: number;
  color?: string;
  font?: string;
  className?: string;
  align?: Property.TextAlign;
  htmlAttributes?: HTMLAttributes<HTMLElement> & IExtendable;
}

export interface IStyledTypographyProps
  extends HTMLAttributes<HTMLElement>,
    IExtendable {
  $size?: number | string;
  $color?: string;
  $bold?: number;
  $font?: string;
  $align?: Property.TextAlign;
}
