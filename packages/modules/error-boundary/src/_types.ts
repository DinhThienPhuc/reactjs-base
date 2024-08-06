import { ComponentType, ReactNode } from "react";

import { TAny, TFunction } from "@phantompurr-react/utils.definations";

export interface IErrorBoundaryProps {
  onReset: TFunction<void>;
  children: ReactNode;
  FallbackComponent?: ComponentType | null;
}

export interface IErrorBoundaryState {
  error: TAny;
  errorInfo: TAny;
}
