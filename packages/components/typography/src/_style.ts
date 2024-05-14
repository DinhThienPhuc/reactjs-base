import styled, { css } from "styled-components";

import { IStyledTypographyProps } from "./_types";

const typographyModify = ({
  $size,
  $color,
  $bold,
  $font,
}: IStyledTypographyProps) => {
  return css`
    transition: inherit;
    font-size: ${typeof $size === "number" ? `${$size}px` : $size};
    font-weight: ${$bold};
    color: ${$color};
    font-family: ${$font};
  `;
};

export const Styled = {
  H1: styled.h1<IStyledTypographyProps>`
    ${typographyModify};
  `,
  H2: styled.h2<IStyledTypographyProps>`
    ${typographyModify};
  `,
  H3: styled.h3<IStyledTypographyProps>`
    ${typographyModify};
  `,
  H4: styled.h4<IStyledTypographyProps>`
    ${typographyModify};
  `,
  H5: styled.h5<IStyledTypographyProps>`
    ${typographyModify};
  `,
  H6: styled.h6<IStyledTypographyProps>`
    ${typographyModify};
  `,
  Span: styled.span<IStyledTypographyProps>`
    ${typographyModify};
  `,
  Caption: styled.caption<IStyledTypographyProps>`
    ${typographyModify};
  `,
  Button: styled.button<IStyledTypographyProps>`
    ${typographyModify};
    cursor: pointer;
    border: none;
    outline: 0;
    padding: 0;
  `,
  A: styled.a<IStyledTypographyProps>`
    ${typographyModify};
    text-decoration-line: none;
  `,
  P: styled.p<IStyledTypographyProps>`
    ${typographyModify};
    margin-block: 0;
  `,
};
