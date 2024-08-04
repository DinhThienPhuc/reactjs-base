import { ButtonHTMLAttributes } from "react";

import {
  IExtendable,
  ISyncStateWithProps,
} from "@phantomthief-react/utils.definations";

export interface IHamburgerMenuProps extends ISyncStateWithProps {
  gap?: number;
  width?: number;
  height?: number;
  borderRadius?: number;
  onClick?: (active: boolean) => void;
  color?: string;
  active?: boolean;
  className?: string;
  htmlAttributes?: ButtonHTMLAttributes<HTMLButtonElement> & IExtendable;
}
