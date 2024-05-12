import { IExtendable } from "@phantomthief-react/utils.definations";
import { HTMLAttributes } from "react";
import { Property } from "csstype";

export interface IFlexBoxProps
  extends HTMLAttributes<HTMLElement>,
    IExtendable {
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  flexDirection?: Property.FlexDirection;
  variant?: keyof JSX.IntrinsicElements;
}

export interface IStyledFlexBoxProps {
  $alignItems?: Property.AlignItems;
  $justifyContent?: Property.JustifyContent;
  $flexDirection?: Property.FlexDirection;
}
