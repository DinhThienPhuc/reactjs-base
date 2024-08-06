import {
  ButtonHTMLAttributes,
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";

import { IExtendable } from "@phantompurr-react/utils";

export type TItemDictionary = Record<string, boolean>;

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

export interface IAccordionItemExpandIconProps {
  expandIcon?: ReactNode;
  isExpanded: boolean;
  htmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
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
  expandIconHtmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
  htmlAttributes?: HTMLAttributes<HTMLButtonElement> & IExtendable;
  labelHtmlAttributes?: HTMLAttributes<HTMLElement> & IExtendable;
  setItemDictionary: Dispatch<SetStateAction<TItemDictionary>>;
}
