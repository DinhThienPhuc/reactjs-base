import { HTMLAttributes } from "react";
import { IntrinsicElementsKeys } from "styled-components";
import { Property } from "csstype";

export interface IFlexProps extends HTMLAttributes<HTMLElement> {
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  flexDirection?: Property.FlexDirection;
  variant?: IntrinsicElementsKeys;
}
