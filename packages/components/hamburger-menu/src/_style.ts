import styled, { css } from "styled-components";

import { getInvisibleButton } from "@phantompurr-react/utils.helpers";

export const Styled = {
  Container: styled.button`
    ${getInvisibleButton}
  `,
  Bar: styled.span<{
    $isActivated: boolean;
    $gap: number;
    $width: number;
    $height: number;
    $borderRadius: number;
    $color: string;
  }>`
    display: block;
    width: ${({ $width }) => $width}px;
    height: ${({ $height, $gap }) => ($height - 4 * $gap) / 3}px;
    background-color: ${({ $color }) => $color};
    margin: ${({ $gap }) => $gap}px 0px;
    transition: 0.4s;
    border-radius: ${({ $borderRadius }) => $borderRadius}px;

    &:nth-child(1) {
      ${({ $isActivated, $height, $gap }) =>
        $isActivated &&
        css`
          transform: translate(0, ${($height - $gap) / 3}px) rotate(-45deg);
        `}
    }
    &:nth-child(2) {
      ${({ $isActivated }) =>
        $isActivated &&
        css`
          opacity: 0;
        `}
    }
    &:nth-child(3) {
      ${({ $isActivated, $height, $gap }) =>
        $isActivated &&
        css`
          transform: translate(0, -${($height - $gap) / 3}px) rotate(45deg);
        `}
    }
  `,
};
