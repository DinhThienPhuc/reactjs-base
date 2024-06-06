import { IExtendable } from "../../../utils/definations/dist";
import { ButtonHTMLAttributes } from "react";

export interface IHamburgerMenuProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
    IExtendable {
  gap?: number;
  width?: number;
  height?: number;
  borderRadius?: number;
  onClick?: (isOpened: boolean) => void;
}
