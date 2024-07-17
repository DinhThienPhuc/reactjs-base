import {
  ButtonHTMLAttributes,
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";

import { IExtendable } from "@phantomthief-react/utils";

// GOOD
export type TItemDictionary = Record<string, boolean>;

// GOOD
export interface IAccordionItem {
  id: string;
  label: string;
  body: ReactNode;
  preIcon?: ReactNode;
  postIcon?: ReactNode;
  expandIcon?: ReactNode;
  disabled?: boolean;
  bodyHtmlAttributes?: HTMLAttributes<HTMLDivElement> & IExtendable;
  htmlAttributes?: HTMLAttributes<HTMLDivElement> & IExtendable;
  expandIconHtmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
  itemHeaderHtmlAttributes?: ButtonHTMLAttributes<HTMLButtonElement> &
    IExtendable;
  itemHeaderLabelHtmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
}

// GOOD
export interface IAccordionItemProps extends IAccordionItem {
  isExpanded: boolean;
  isOnlyOneExpand: boolean;
  setItemDictionary: Dispatch<SetStateAction<TItemDictionary>>;
}

export interface IAccordionProps {
  items?: IAccordionItem[];
  className?: string;
  disabled?: boolean;
  preIcon?: ReactNode;
  postIcon?: ReactNode;
  expandIcon?: ReactNode;
  expandIds?: string[];
  isOnlyOneExpand?: boolean;
  htmlAttributes?: HTMLAttributes<HTMLDivElement> & IExtendable;
}

// GOOD
export interface IAccordionItemExpandIconProps {
  expandIcon?: ReactNode;
  isExpanded: boolean;
  htmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
}

// GOOD
export interface IAccordionItemHeaderProps {
  label: string;
  preIcon?: ReactNode;
  postIcon?: ReactNode;
  expandIcon?: ReactNode;
  disabled?: boolean;
  isExpanded: boolean;
  isOnlyOneExpand: boolean;
  id: string;
  expandIconHtmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
  itemHeaderHtmlAttributes?: HTMLAttributes<HTMLButtonElement> & IExtendable;
  itemHeaderLabelHtmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
  setItemDictionary: Dispatch<SetStateAction<TItemDictionary>>;
}
