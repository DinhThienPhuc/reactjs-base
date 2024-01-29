import { CSSProperties, ReactNode } from "react";

export interface ICompositionContainerOffset {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface ICompositionContainerProps {
  children?: ReactNode;
  offset?: ICompositionContainerOffset;
  style?: CSSProperties;
}
