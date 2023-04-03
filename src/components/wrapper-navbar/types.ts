import { MouseEventHandler, ReactNode } from "react";

import { INavbarProps } from "_libs/components";

export interface IWrapperNavbarProps extends INavbarProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLeftClick?: MouseEventHandler<HTMLButtonElement>;
  onRightClick?: MouseEventHandler<HTMLButtonElement>;
}
