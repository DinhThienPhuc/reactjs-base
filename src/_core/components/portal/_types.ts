import { IExtendable } from "@phantomthief/react.utils.definations";
import { ReactNode } from "react";

export interface IPortalProps extends IExtendable {
  className?: string;
  children: ReactNode;
}
