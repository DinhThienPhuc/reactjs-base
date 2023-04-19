import styled, { css } from "styled-components";

import { IFlexProps } from "./types";

const flexModify = ({
  alignItems,
  justifyContent,
  flexDirection,
}: IFlexProps) => {
  return css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
  `;
};

export const Styled = {
  Div: styled.div<IFlexProps>`
    ${flexModify};
  `,
  Span: styled.span<IFlexProps>`
    ${flexModify};
  `,
  Nav: styled.nav<IFlexProps>`
    ${flexModify};
  `,
};
