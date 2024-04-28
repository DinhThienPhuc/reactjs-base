import styled, { css } from "styled-components";

import { IStyledFlexBoxProps } from "./_types";

const modifyFlexBox = ({
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
    ${modifyFlexBox};
  `,
  Span: styled.span<IStyledFlexBoxProps>`
    ${modifyFlexBox};
  `,
};
