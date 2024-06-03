import { IExtendable } from "../../../utils/definations/dist";
import { HTMLAttributes } from "react";

export interface IHumburgerMenuProps
  extends HTMLAttributes<HTMLDivElement>,
    IExtendable {
  gap?: number;
  width?: number;
  height?: number;
  borderRadius?: number;
}
