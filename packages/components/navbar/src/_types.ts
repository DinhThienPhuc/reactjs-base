import { HTMLAttributes, ReactNode } from "react";

import { IExtendable } from "@phantompurr-react/utils.definations";

export interface INavbarProps {
  className?: string;
  leftButton?: ReactNode;
  rightButton?: ReactNode;
  title?: ReactNode;
  htmlAttributes?: HTMLAttributes<HTMLDivElement> & IExtendable;
}
