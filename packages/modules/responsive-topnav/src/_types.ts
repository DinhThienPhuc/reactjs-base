import {
  ButtonHTMLAttributes,
  Dispatch,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  SetStateAction,
} from "react";

import { IHamburgerMenuProps } from "@phantomthief-react/components";
import { IExtendable } from "@phantomthief-react/utils";

export interface IResponsiveTopnavItem {
  key: string;
  content: ReactNode;
  htmlAttributes?: ButtonHTMLAttributes<HTMLButtonElement> & IExtendable;
}

export interface IResponsiveTopnavItemProps {
  isMobileMenuExpanded: boolean;
  content: ReactNode;
  index: number;
  activeKey?: string;
  itemKey: string;
  firstItemSelectable?: boolean;
  collapseAfterSelectItem?: boolean;
  htmlAttributes?: ButtonHTMLAttributes<HTMLButtonElement> & IExtendable;
  setMobileMenuExpand: Dispatch<SetStateAction<boolean>>;
  onClick?: (e: MouseEvent<HTMLButtonElement>, key?: string) => void;
}

export interface IResponsiveTopnavProps {
  className?: string;
  items: IResponsiveTopnavItem[];
  activeKey?: string;
  firstItemSelectable?: boolean;
  collapseAfterSelectItem?: boolean;
  mobileMenuExpanded?: boolean;
  hamburgerProps?: IHamburgerMenuProps;
  htmlAttributes?: HTMLAttributes<HTMLDivElement> & IExtendable;
  onClick?: (e: MouseEvent<HTMLButtonElement>, key?: string) => void;
}
