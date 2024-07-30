import { HTMLAttributes, ReactNode } from "react";

import { IExtendable } from "@phantomthief-react/utils";

export interface INavbarProps {
  className?: string;
  leftButton?: ReactNode;
  rightButton?: ReactNode;
  title?: ReactNode;
  htmlAttributes?: HTMLAttributes<HTMLDivElement> & IExtendable;
}
