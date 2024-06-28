import { IExtendable } from "@phantomthief-react/utils";
import { ReactNode } from "react";

export interface IPortalProps extends IExtendable {
  className?: string;
  children: ReactNode;
}
