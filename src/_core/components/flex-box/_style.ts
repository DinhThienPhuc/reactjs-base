import styled, { css } from "styled-components";

import { IStyledFlexBoxProps } from "./_types";

const flexBoxModify = ({
  $alignItems,
  $justifyContent,
  $flexDirection,
}: IStyledFlexBoxProps) => {
  return css`
    display: flex;
    justify-content: ${$justifyContent};
    align-items: ${$alignItems};
    flex-direction: ${$flexDirection};
  `;
};

export const Styled = {
  Div: styled.div<IStyledFlexBoxProps>`
    ${flexBoxModify};
  `,
  Span: styled.span<IStyledFlexBoxProps>`
    ${flexBoxModify};
  `,
};
