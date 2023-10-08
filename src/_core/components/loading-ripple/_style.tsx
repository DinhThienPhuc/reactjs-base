import styled, { keyframes } from "styled-components";

const ripple = (size: number, sizeUnit: string) => keyframes`
  0% {
    top: ${size * 0.5}${sizeUnit};
    left: ${size * 0.5}${sizeUnit};
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: ${size * 0.5}${sizeUnit};
    left: ${size * 0.5}${sizeUnit};
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: ${size * 0.5}${sizeUnit};
    left: ${size * 0.5}${sizeUnit};
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: ${size}${sizeUnit};
    height: ${size}${sizeUnit};
    opacity: 0;
  }
`;

export const Styled = {
  Container: styled.div<{ fullScreen: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ fullScreen }) => (fullScreen ? "100vw" : "100%")};
    height: ${({ fullScreen }) => (fullScreen ? "100vh" : "100%")};
  `,
  Ripple: styled.div<{ size: number; sizeUnit: string; color: string }>`
    display: inline-block;
    position: relative;
    width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
    height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};

    div {
      position: absolute;
      border: 4px solid ${({ color }) => color};
      opacity: 1;
      border-radius: 50%;
      animation: ${({ size, sizeUnit }) => ripple(size, sizeUnit)} 1s
        cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    div:nth-child(2) {
      animation-delay: -0.5s;
    }
  `,
};
