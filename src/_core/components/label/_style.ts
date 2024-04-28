import { IStyledLabelProps, TLabelVariant } from "./_types";
import styled, { css } from "styled-components";

import { LABEL_VARIANT } from "./_constants";

const modifyLabelPosition = (props: {
  $variant: TLabelVariant;
  $isLabelCollapsed: boolean;
}) => {
  if (props?.$variant === LABEL_VARIANT.STANDARD) {
    if (props?.$isLabelCollapsed) {
      return css`
        top: 12px;
        left: 0px;
      `;
    }
    return css`
      left: 0px;
    `;
  }
  if (props?.$isLabelCollapsed) {
    return css`
      top: 12px;
      left: 14px;
    `;
  }
  return css`
    left: 14px;
  `;
};

export const Styled = {
  Container: styled.div<IStyledLabelProps>`
    transition: all 200ms ease-in-out;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    ${modifyLabelPosition};
  `,
};
