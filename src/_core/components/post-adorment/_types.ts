import { POST_ADORMENT_VARIANT } from "./_constants";
import { ReactNode } from "react";
import { TFunction } from "@phantomthief/react.utils.definations";

export type TPostAdormentVariant =
  (typeof POST_ADORMENT_VARIANT)[keyof typeof POST_ADORMENT_VARIANT];

export interface IPostAdormentProps {
  className?: string;
  variant?: TPostAdormentVariant;
  content?: ReactNode;
  clearIcon?: ReactNode;
  clear?: TFunction<void>;
}
