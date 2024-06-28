import { ILoadingEllipsisProps } from "@phantomthief-react/components.loading-ellipsis";
import { IExtendable } from "@phantomthief-react/utils";
import { SVGProps } from "react";

export interface ISingleIconProps extends SVGProps<SVGSVGElement>, IExtendable {
  name: string;
}

export interface IIconProps extends ISingleIconProps, IExtendable {
  name: string;
  loadingProps?: ILoadingEllipsisProps;
}
