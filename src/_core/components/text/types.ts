import { IntrinsicElementsKeys } from "styled-components";
import { ReactNode } from "react";

export interface ITextProps {
  variant?: IntrinsicElementsKeys;
  children?: ReactNode;
  size?: number | string;
  bold?: number;
  color?: string;
  className?: string;
}
