import styled, { keyframes } from "styled-components";

const ripple = (size: number) => keyframes`
  0% {
    top: ${size * 0.5}px;
    left: ${size * 0.5}px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: ${size * 0.5}px;
    left: ${size * 0.5}px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: ${size * 0.5}px;
    left: ${size * 0.5}px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: ${size}px;
    height: ${size}px;
    opacity: 0;
  }
`;

export const Styled = {
  Container: styled.div<{ $fullScreen: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $fullScreen }) => ($fullScreen ? "100vw" : "100%")};
    height: ${({ $fullScreen }) => ($fullScreen ? "100vh" : "100%")};
  `,
  Ripple: styled.div<{ $size: number; $color: string }>`
    display: inline-block;
    position: relative;
    width: ${({ $size }) => `${$size + 8}px`};
    height: ${({ $size }) => `${$size + 8}px`};

    div {
      position: absolute;
      border: 4px solid ${({ $color }) => $color};
      opacity: 1;
      border-radius: 50%;
      animation: ${({ $size }) => ripple($size)} 1s cubic-bezier(0, 0.2, 0.8, 1)
        infinite;
    }

    div:nth-child(2) {
      animation-delay: -0.5s;
    }
  `,
};
