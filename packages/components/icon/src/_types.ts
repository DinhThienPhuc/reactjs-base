import { SVGProps } from "react";

import { ILoadingEllipsisProps } from "@phantomthief-react/components.loading-ellipsis";
import { IExtendable } from "@phantomthief-react/utils";

export interface ISingleIconProps extends SVGProps<SVGSVGElement>, IExtendable {
  name: string;
}

export interface IIconProps extends ISingleIconProps, IExtendable {
  name: string;
  loadingProps?: ILoadingEllipsisProps;
}
