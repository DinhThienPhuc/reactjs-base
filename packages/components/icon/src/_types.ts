import { SVGProps } from "react";

import { ILoadingEllipsisProps } from "@phantomthief-react/components.loading-ellipsis";
import { IExtendable } from "@phantomthief-react/utils.definations";

export interface ISingleIconProps {
  className?: string;
  name: string;
  color?: string;
  width?: number;
  height?: number;
  htmlAttributes?: SVGProps<SVGSVGElement> & IExtendable;
}

export interface IIconProps extends ISingleIconProps {
  loadingProps?: ILoadingEllipsisProps;
}
