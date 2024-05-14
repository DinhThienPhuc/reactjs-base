import { IStyledComponentBase, Substitute } from "styled-components/dist/types";
import { IExtendable } from "@phantomthief-react/utils.definations";
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

export type TStyledTag = IStyledComponentBase<
  "web",
  Substitute<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    IStyledTypographyProps
  >
> &
  string;

export type TTestCI = "ci" | "cd";
