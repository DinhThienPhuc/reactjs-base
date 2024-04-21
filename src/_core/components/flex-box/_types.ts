import { HTMLAttributes } from "react";
import { IExtendable } from "@phantomthief/react.utils.definations";
import { IntrinsicElementsKeys } from "styled-components";
import { Property } from "csstype";

export interface IFlexBoxProps
  extends HTMLAttributes<HTMLElement>,
    IExtendable {
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  flexDirection?: Property.FlexDirection;
  variant?: IntrinsicElementsKeys;
}

export interface IStyledFlexBoxProps {
  $alignItems?: Property.AlignItems;
  $justifyContent?: Property.JustifyContent;
  $flexDirection?: Property.FlexDirection;
}
