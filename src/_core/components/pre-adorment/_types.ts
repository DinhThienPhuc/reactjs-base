import { IExtendable } from "@phantomthief/react.utils.definations";
import { PRE_ADORMENT_VARIANT } from "./_constants";
import { ReactNode } from "react";

export type TPreAdormentVariant =
  (typeof PRE_ADORMENT_VARIANT)[keyof typeof PRE_ADORMENT_VARIANT];

export interface IPreAdormentProps extends IExtendable {
  className?: string;
  variant?: TPreAdormentVariant;
  children?: ReactNode;
  hasLabel?: boolean;
}
