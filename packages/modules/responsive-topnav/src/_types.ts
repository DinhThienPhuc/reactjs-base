import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  MouseEvent,
} from "react";
import { IExtendable } from "@phantomthief-react/utils";

export interface IResponsiveTopnavItem
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "content"> {
  key: string;
  content: ReactNode;
}

export interface IResponsiveTopnavProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onClick">,
    IExtendable {
  items: IResponsiveTopnavItem[];
  activeKey?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>, key?: string) => void;
  firstItemSelectable?: boolean;
}
