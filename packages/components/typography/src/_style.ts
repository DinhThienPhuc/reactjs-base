import styled, { css } from "styled-components";

import { getInvisibleButton } from "@phantompurr-react/utils.helpers";

import { IStyledTypographyProps } from "./_types";

const typographyModify = ({
  $size,
  $color,
  $bold,
  $font,
  $align,
}: IStyledTypographyProps) => {
  return css`
    transition: inherit;
    font-size: ${typeof $size === "number" ? `${$size}px` : $size};
    font-weight: ${$bold};
    color: ${$color};
    font-family: ${$font};
    text-align: ${$align};
  `;
};

export const Styled = {
  H1: styled.h1<IStyledTypographyProps>`
    ${typographyModify};
  ` as React.FC<IStyledTypographyProps>,
  H2: styled.h2<IStyledTypographyProps>`
    ${typographyModify};
  ` as React.FC<IStyledTypographyProps>,
  H3: styled.h3<IStyledTypographyProps>`
    ${typographyModify};
  ` as React.FC<IStyledTypographyProps>,
  H4: styled.h4<IStyledTypographyProps>`
    ${typographyModify};
  ` as React.FC<IStyledTypographyProps>,
  H5: styled.h5<IStyledTypographyProps>`
    ${typographyModify};
  ` as React.FC<IStyledTypographyProps>,
  H6: styled.h6<IStyledTypographyProps>`
    ${typographyModify};
  ` as React.FC<IStyledTypographyProps>,
  Span: styled.span<IStyledTypographyProps>`
    ${typographyModify};
  ` as React.FC<IStyledTypographyProps>,
  Caption: styled.caption<IStyledTypographyProps>`
    ${typographyModify};
  ` as React.FC<IStyledTypographyProps>,
  Button: styled.button<IStyledTypographyProps>`
    ${typographyModify};
    ${getInvisibleButton};
    padding: 0;
  ` as React.FC<IStyledTypographyProps>,
  A: styled.a<IStyledTypographyProps>`
    ${typographyModify};
    cursor: pointer;
    text-decoration-line: none;
  ` as React.FC<IStyledTypographyProps>,
  P: styled.p<IStyledTypographyProps>`
    ${typographyModify};
    margin-block: 0;
  ` as React.FC<IStyledTypographyProps>,
};
