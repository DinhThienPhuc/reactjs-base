import { ReactNode } from "react";

import { IExtendable } from "@phantompurr-react/utils";

export interface IPortalProps extends IExtendable {
  className?: string;
  children: ReactNode;
}
