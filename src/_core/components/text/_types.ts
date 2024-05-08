import { IntrinsicElementsKeys, StyledComponent } from "styled-components";
import { HTMLAttributes, ReactNode } from "react";

import { TAny } from "@phantomthief/react.utils.definations";

export interface ITextProps extends HTMLAttributes<HTMLElement> {
  variant?: IntrinsicElementsKeys;
  children?: ReactNode;
  size?: number | string;
  bold?: number;
  color?: string;
  font?: string;
  className?: string;
}

export interface IStyledTextProps {
  $size?: number | string;
  $color?: string;
  $bold?: number;
  $font?: string;
}

export type TStyledTag = StyledComponent<
  IntrinsicElementsKeys,
  TAny,
  IStyledTextProps,
  never
>;
