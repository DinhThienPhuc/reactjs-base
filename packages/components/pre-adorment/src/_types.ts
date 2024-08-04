import { HTMLAttributes, ReactNode } from "react";

import { IExtendable } from "@phantomthief-react/utils.definations";

import { PRE_ADORMENT_VARIANT } from "./_constants";

export type TPreAdormentVariant =
  (typeof PRE_ADORMENT_VARIANT)[keyof typeof PRE_ADORMENT_VARIANT];

export interface IPreAdormentProps {
  className?: string;
  variant?: TPreAdormentVariant;
  children?: ReactNode;
  hasLabel?: boolean;
  htmlAttributes?: HTMLAttributes<HTMLSpanElement> & IExtendable;
}
