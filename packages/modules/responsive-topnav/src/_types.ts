import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  MouseEvent,
} from "react";
import { IExtendable, ISyncStateWithProps } from "@phantomthief-react/utils";
import { IHamburgerMenuProps } from "@phantomthief-react/components";

export interface IResponsiveTopnavItem
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "content"> {
  key: string;
  content: ReactNode;
}

export interface IResponsiveTopnavProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onClick">,
    IExtendable,
    ISyncStateWithProps {
  items: IResponsiveTopnavItem[];
  activeKey?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>, key?: string) => void;
  firstItemSelectable?: boolean;
  mobileMenuExpanded?: boolean;
  hamburgerProps?: IHamburgerMenuProps;
}
