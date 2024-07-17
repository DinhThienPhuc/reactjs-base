import { Property } from "csstype";
import { HTMLAttributes, ReactNode } from "react";

export interface IFlexBoxProps {
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  flexDirection?: Property.FlexDirection;
  variant?: keyof JSX.IntrinsicElements;
  gap?: Property.Gap;
  wrap?: Property.FlexWrap;
  fullWidth?: boolean;
  htmlAttributes?: HTMLAttributes<HTMLElement>;
  children?: ReactNode;
  className?: string;
}

export interface IStyledFlexBoxProps {
  $alignItems?: Property.AlignItems;
  $justifyContent?: Property.JustifyContent;
  $flexDirection?: Property.FlexDirection;
  $gap?: Property.Gap;
  $wrap?: Property.FlexWrap;
  $fullWidth?: boolean;
}
