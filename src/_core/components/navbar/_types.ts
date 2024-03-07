import { HTMLAttributes, ReactNode } from "react";

export interface INavbarProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  className?: string;
  leftButton?: ReactNode;
  rightButton?: ReactNode;
  title?: ReactNode;
}
