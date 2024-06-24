import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { IExtendable } from "@phantomthief-react/utils";

export interface IAccordionItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IExtendable {
  key?: string;
  itemKey?: string;
  preIcon?: ReactNode;
  postIcon?: ReactNode;
  expandIcon?: ReactNode;
  label?: ReactNode;
  body?: ReactNode;
  isOnlyOneExpand?: boolean;
}

export interface IAccordionProps
  extends HTMLAttributes<HTMLDivElement>,
    IExtendable {
  items?: IAccordionItemProps[];
  disabled?: boolean;
  preIcon?: ReactNode;
  postIcon?: ReactNode;
  expandIcon?: ReactNode;
  expandKeys?: string[];
  isOnlyOneExpand?: boolean;
}

export interface IStyledAccordionItemContainerProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IExtendable {
  $preIcon?: ReactNode;
  $postIcon?: ReactNode;
  $expandIcon?: ReactNode;
}
