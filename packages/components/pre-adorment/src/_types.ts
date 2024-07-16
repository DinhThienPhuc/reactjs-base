import { ReactNode } from "react";

import { IExtendable } from "@phantomthief-react/utils";

import { PRE_ADORMENT_VARIANT } from "./_constants";

export type TPreAdormentVariant =
  (typeof PRE_ADORMENT_VARIANT)[keyof typeof PRE_ADORMENT_VARIANT];

export interface IPreAdormentProps extends IExtendable {
  className?: string;
  variant?: TPreAdormentVariant;
  children?: ReactNode;
  hasLabel?: boolean;
}
