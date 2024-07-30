import { HTMLAttributes, ReactNode } from "react";

import { IExtendable, TFunction } from "@phantomthief-react/utils";

import { POST_ADORMENT_VARIANT } from "./_constants";

export type TPostAdormentVariant =
  (typeof POST_ADORMENT_VARIANT)[keyof typeof POST_ADORMENT_VARIANT];

export interface IPostAdormentProps {
  className?: string;
  variant?: TPostAdormentVariant;
  children?: ReactNode;
  clearIcon?: ReactNode;
  hasLabel?: boolean;
  htmlAttributes?: HTMLAttributes<HTMLSpanElement & HTMLButtonElement> &
    IExtendable;
  clear?: TFunction<void>;
}

export interface IStyledContainerProps {
  $adormentVariant: TPostAdormentVariant;
  $hasLabel: boolean;
}
