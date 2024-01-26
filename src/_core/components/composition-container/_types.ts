import { ReactNode } from "react";

export interface ICompositionContainerOffset {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface ICompositionContainer {
  children?: ReactNode;
  offset?: ICompositionContainerOffset;
  bgColor?: string;
}
