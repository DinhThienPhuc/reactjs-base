import { Property } from "csstype";
import { HTMLAttributes } from "react";

import { IExtendable } from "@phantomthief-react/utils";

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
