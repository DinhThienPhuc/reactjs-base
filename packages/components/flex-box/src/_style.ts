import styled, { css } from "styled-components";

import { IStyledFlexBoxProps } from "./_types";

const modifyFlexBox = ({
  $alignItems,
  $justifyContent,
  $flexDirection,
  $gap,
  $wrap,
  $fullWidth,
}: IStyledFlexBoxProps) => {
  return css`
    display: flex;
    justify-content: ${$justifyContent};
    align-items: ${$alignItems};
    flex-direction: ${$flexDirection};
    gap: ${$gap};
    flex-wrap: ${$wrap};
    width: ${$fullWidth ? "100%" : "auto"};
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
