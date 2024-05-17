import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { BUTTON_SIZE, BUTTON_VARIANT } from "./_constants";

import { IExtendable } from "@phantomthief-react/utils.definations";

export type TButtonSize = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];

export type TButtonVariant =
  (typeof BUTTON_VARIANT)[keyof typeof BUTTON_VARIANT];

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IExtendable {
  size?: TButtonSize;
  variant?: TButtonVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  loadingComponent?: ReactNode;
}
