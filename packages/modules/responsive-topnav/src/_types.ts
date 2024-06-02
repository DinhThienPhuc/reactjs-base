import { ReactNode } from "react";

export interface IResponsiveTopnavItem {
  key: string;
  content: ReactNode;
}

export interface IResponsiveTopnavProps {
  items: IResponsiveTopnavItem[];
}
