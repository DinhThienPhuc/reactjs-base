import styled, { css } from "styled-components";

import { IStyledTextProps } from "./_types";

const textModify = ({ $size, $color, $bold, $font }: IStyledTextProps) => {
  return css`
    font-size: ${typeof $size === "number" ? `${$size}px` : $size};
    font-weight: ${$bold};
    color: ${$color};
    font-family: ${$font};
  `;
};

export const Styled = {
  H1: styled.h1<IStyledTextProps>`
    ${textModify};
  `,
  H2: styled.h2<IStyledTextProps>`
    ${textModify};
  `,
  H3: styled.h3<IStyledTextProps>`
    ${textModify};
  `,
  H4: styled.h4<IStyledTextProps>`
    ${textModify};
  `,
  H5: styled.h5<IStyledTextProps>`
    ${textModify};
  `,
  H6: styled.h6<IStyledTextProps>`
    ${textModify};
  `,
  Span: styled.span<IStyledTextProps>`
    ${textModify};
  `,
  Caption: styled.caption<IStyledTextProps>`
    ${textModify};
  `,
  Button: styled.button<IStyledTextProps>`
    ${textModify};
    cursor: pointer;
    border: none;
    outline: 0;
    padding: 0;
  `,
  A: styled.a<IStyledTextProps>`
    ${textModify};
    text-decoration-line: none;
  `,
  P: styled.p<IStyledTextProps>`
    ${textModify};
    margin-block: 0;
  `,
};
