import {
  ButtonHTMLAttributes,
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";

import { IExtendable } from "@phantomthief-react/utils";

export type TItemDictionary = Record<string, boolean>;

export interface IAccordionItem
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IExtendable {
  label: string;
  body: ReactNode;
  preIcon?: ReactNode;
  postIcon?: ReactNode;
  expandIcon?: ReactNode;
}

export interface IAccordionItemProps extends IAccordionItem {
  id: string;
  isExpanded: boolean;
  isOnlyOneExpand: boolean;
  setItemDictionary: Dispatch<SetStateAction<TItemDictionary>>;
}

export interface IAccordionProps
  extends HTMLAttributes<HTMLDivElement>,
    IExtendable {
  items?: IAccordionItem[];
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

export interface IAccordionItemExpandIconProps {
  expandIcon?: ReactNode;
  isExpanded: boolean;
}

export interface IAccordionItemHeaderProps {
  label: string;
  preIcon?: ReactNode;
  postIcon?: ReactNode;
  expandIcon?: ReactNode;
  disabled?: boolean;
  isExpanded: boolean;
  isOnlyOneExpand: boolean;
  id: string;
  setItemDictionary: Dispatch<SetStateAction<TItemDictionary>>;
}

export interface IAccordionItemHeaderRightProps {
  postIcon?: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
}
