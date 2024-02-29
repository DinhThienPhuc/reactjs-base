import styled, { css } from "styled-components";

import { ITextStyledProps } from "./_types";

const textModify = ({ $size, $color, $bold, $font }: ITextStyledProps) => {
  return css`
    font-size: ${typeof $size === "number" ? `${$size}px` : $size};
    font-weight: ${$bold};
    color: ${$color};
    font-family: ${$font};
  `;
};

export const Styled = {
  H1: styled.h1<ITextStyledProps>`
    ${textModify};
  `,
  H2: styled.h2<ITextStyledProps>`
    ${textModify};
  `,
  H3: styled.h3<ITextStyledProps>`
    ${textModify};
  `,
  H4: styled.h4<ITextStyledProps>`
    ${textModify};
  `,
  H5: styled.h5<ITextStyledProps>`
    ${textModify};
  `,
  H6: styled.h6<ITextStyledProps>`
    ${textModify};
  `,
  Span: styled.span<ITextStyledProps>`
    ${textModify};
  `,
  Caption: styled.caption<ITextStyledProps>`
    ${textModify};
  `,
  Button: styled.button<ITextStyledProps>`
    ${textModify};
    cursor: pointer;
    border: none;
    outline: 0;
    padding: 0;
  `,
  A: styled.a<ITextStyledProps>`
    ${textModify};
    text-decoration-line: none;
  `,
  P: styled.p<ITextStyledProps>`
    ${textModify};
    margin-block: 0;
  `,
};
