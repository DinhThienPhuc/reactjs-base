import styled, { css } from "styled-components";

import { IStyledLabelProps } from "./_types";
import { LABEL_VARIANT } from "./_constants";
import { Text } from "@phantomthief/react.components.text";

const labelModify = ({ $variant, $isLabelCollapsed }: IStyledLabelProps) => {
  // TODO: Recheck this modify for color and font-size
  if ($variant === LABEL_VARIANT.STANDARD) {
    if ($isLabelCollapsed) {
      return css`
        font-size: 12px;
        top: 12px;
        left: 0px;
        color: #90caf9;
      `;
    }
    return css`
      left: 0px;
    `;
  }
  if ($isLabelCollapsed) {
    return css`
      font-size: 12px;
      top: 12px;
      left: 14px;
      color: #90caf9;
    `;
  }
  return css`
    left: 14px;
  `;
};

export const Styled = {
  Container: styled(Text)<IStyledLabelProps>`
    transition: all 200ms ease-in-out;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    ${labelModify};
  `,
};
