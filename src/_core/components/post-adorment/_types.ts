import { IExtendable, TFunction } from "@phantomthief/react.utils.definations";

import { POST_ADORMENT_VARIANT } from "./_constants";
import { ReactNode } from "react";

export type TPostAdormentVariant =
  (typeof POST_ADORMENT_VARIANT)[keyof typeof POST_ADORMENT_VARIANT];

export interface IPostAdormentProps extends IExtendable {
  className?: string;
  variant?: TPostAdormentVariant;
  content?: ReactNode;
  clearIcon?: ReactNode;
  hasLabel?: boolean;
  clear?: TFunction<void>;
}
