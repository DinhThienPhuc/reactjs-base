import { ReactNode } from "react";

import { IExtendable } from "@phantomthief-react/utils";

export interface IPortalProps extends IExtendable {
  className?: string;
  children: ReactNode;
}
