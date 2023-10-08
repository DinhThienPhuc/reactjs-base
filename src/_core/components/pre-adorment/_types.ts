import { ReactNode } from "react";
import { TVariant } from "@phantomthief/react.utils.definations";

export type TPreAdormentVariant = TVariant;

export interface IPreAdormentProps {
  className?: string;
  variant?: TPreAdormentVariant;
  content?: ReactNode;
}
