import { HTMLAttributes, ReactNode } from "react";
import { IExtendable, TAny } from "@phantomthief/react.utils.definations";
import { IntrinsicElementsKeys, StyledComponent } from "styled-components";

export interface ITextProps extends HTMLAttributes<HTMLElement>, IExtendable {
  variant?: IntrinsicElementsKeys;
  children?: ReactNode;
  size?: number | string;
  bold?: number;
  color?: string;
  font?: string;
  className?: string;
}

export interface ITextStyledProps extends IExtendable {
  $size?: number | string;
  $color?: string;
  $bold?: number;
  $font?: string;
}

export type TStyledTag = StyledComponent<
  IntrinsicElementsKeys,
  TAny,
  ITextStyledProps,
  never
>;
