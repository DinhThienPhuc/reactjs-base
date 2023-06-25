import { ComponentType, ReactNode } from "react";

import { TFunction } from "@phantomthief/react-mui.utils";

export interface IErrorBoundaryProps {
  onReset: TFunction<void>;
  children: ReactNode;
  FallbackComponent?: ComponentType | null;
}

export interface IErrorBoundaryState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errorInfo: any;
}
