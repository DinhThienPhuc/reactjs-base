import styled, { css } from "styled-components";

import { ITextProps } from "./_types";

const textModify = ({ size, bold, color }: ITextProps) => {
  return css`
    font-size: ${typeof size === "number" ? `${size}px` : size};
    font-weight: ${bold};
    color: ${color};
  `;
};

export const Styled = {
  H1: styled.h1<ITextProps>`
    ${textModify};
  `,
  H2: styled.h2<ITextProps>`
    ${textModify};
  `,
  H3: styled.h3<ITextProps>`
    ${textModify};
  `,
  H4: styled.h4<ITextProps>`
    ${textModify};
  `,
  H5: styled.h5<ITextProps>`
    ${textModify};
  `,
  H6: styled.h6<ITextProps>`
    ${textModify};
  `,
  Span: styled.span<ITextProps>`
    ${textModify};
  `,
  Caption: styled.caption<ITextProps>`
    ${textModify};
  `,
  P: styled.p<ITextProps>`
    ${textModify};
    margin-bottom: 0;
  `,
};
