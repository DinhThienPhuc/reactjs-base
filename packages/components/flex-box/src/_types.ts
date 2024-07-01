import { IExtendable } from "@phantomthief-react/utils";
import { HTMLAttributes } from "react";
import { Property } from "csstype";

export interface IFlexBoxProps
  extends HTMLAttributes<HTMLElement>,
    IExtendable {
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  flexDirection?: Property.FlexDirection;
  variant?: keyof JSX.IntrinsicElements;
  gap?: Property.Gap;
  wrap?: Property.FlexWrap;
}

export interface IStyledFlexBoxProps {
  $alignItems?: Property.AlignItems;
  $justifyContent?: Property.JustifyContent;
  $flexDirection?: Property.FlexDirection;
  $gap?: Property.Gap;
  $wrap?: Property.FlexWrap;
}
