import styled, { css } from "styled-components";

export const Styled = {
  Container: styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: 0;
  `,
  Bar: styled.span<{
    $isOpened: boolean;
    $gap: number;
    $width: number;
    $height: number;
    $borderRadius: number;
  }>`
    display: block;
    width: ${({ $width }) => $width}px;
    height: ${({ $height, $gap }) => ($height - 4 * $gap) / 3}px;
    background-color: #ffffff;
    margin: ${({ $gap }) => $gap}px 0px;
    transition: 0.4s;
    border-radius: ${({ $borderRadius }) => $borderRadius}px;

    &:nth-child(1) {
      ${({ $isOpened, $height, $gap }) =>
        $isOpened &&
        css`
          transform: translate(0, ${($height - $gap) / 3}px) rotate(-45deg);
        `}
    }
    &:nth-child(2) {
      ${({ $isOpened }) =>
        $isOpened &&
        css`
          opacity: 0;
        `}
    }
    &:nth-child(3) {
      ${({ $isOpened, $height, $gap }) =>
        $isOpened &&
        css`
          transform: translate(0, -${($height - $gap) / 3}px) rotate(45deg);
        `}
    }
  `,
};
