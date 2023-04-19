import { IntrinsicElementsKeys } from "styled-components";
import type { Property } from "csstype";
import { ReactNode } from "react";

export interface IFlexProps {
  className?: string;
  children?: string | ReactNode;
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  flexDirection?: Property.FlexDirection;
  variant?: IntrinsicElementsKeys;
}
