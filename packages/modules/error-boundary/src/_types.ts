import { TAny, TFunction } from "@phantomthief-react/utils";
import { ComponentType, ReactNode } from "react";

export interface IErrorBoundaryProps {
  onReset: TFunction<void>;
  children: ReactNode;
  FallbackComponent?: ComponentType | null;
}

export interface IErrorBoundaryState {
  error: TAny;
  errorInfo: TAny;
}
