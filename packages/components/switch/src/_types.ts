import {
  ChangeEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

import { IExtendable } from "@phantomthief-react/utils.definations";

export interface ISwitchProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    IExtendable {
  value?: boolean;
  leftLabel?: ReactNode;
  rightLabel?: ReactNode;
  inputProps?: InputHTMLAttributes<HTMLInputElement> & IExtendable;
  onChange?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
}
