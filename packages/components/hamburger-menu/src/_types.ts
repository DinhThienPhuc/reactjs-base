import { IExtendable, ISyncStateWithProps } from "@phantomthief-react/utils";
import { ButtonHTMLAttributes } from "react";

export interface IHamburgerMenuProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
    IExtendable,
    ISyncStateWithProps {
  gap?: number;
  width?: number;
  height?: number;
  borderRadius?: number;
  onClick?: (active: boolean) => void;
  color?: string;
  active?: boolean;
}
