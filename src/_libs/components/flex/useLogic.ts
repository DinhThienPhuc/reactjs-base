import { IFlexProps } from "./types";
import { Styled } from "./style";
import { capitalized } from "@phantomthief/react-mui.utils";
import { useMemo } from "react";

export const useLogic = ({ variant = "div" }: IFlexProps) => {
  const StyledTag = useMemo(() => {
    const styledTagProperty = capitalized(variant) as keyof typeof Styled;
    return Styled[styledTagProperty];
  }, [variant]);

  return StyledTag;
};
