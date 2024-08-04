import styled, { css } from "styled-components";

import { FONT } from "@phantomthief-react/utils.constants";

import { LABEL_VARIANT } from "./_constants";
import { IStyledLabelProps } from "./_types";

const modifyLabelPosition = (props: IStyledLabelProps) => {
  if (props?.$variant === LABEL_VARIANT.STANDARD) {
    if (props?.$isLabelCollapsed) {
      return css`
        top: 12px;
        left: 0px;
        font-size: 12px;
      `;
    }
    return css`
      left: 0px;
      font-size: 16px;
    `;
  }
  if (props?.$isLabelCollapsed) {
    return css`
      top: 12px;
      left: 14px;
      font-size: 12px;
    `;
  }
  return css`
    left: 14px;
    font-size: 16px;
  `;
};

const modifyLabelColor = (props: IStyledLabelProps) => {
  if (props?.$disabled) {
    return css`
      color: #ffffff80;
    `;
  }
  if (props?.$isError) {
    return css`
      color: #f44336;
    `;
  }
  if (props?.$isFocused) {
    return css`
      color: #90caf9;
    `;
  }
  return css`
    color: #ffffff;
  `;
};

export const Styled = {
  Container: styled.span<IStyledLabelProps>`
    transition: all 200ms ease-in-out 100ms;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    font-family: ${FONT.VERNADA};
    ${modifyLabelColor};
    ${modifyLabelPosition};
  `,
};
