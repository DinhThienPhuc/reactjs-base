import styled, { keyframes } from "styled-components";

const motion1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const motion2Modify = ($size: number) => keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: ${`translate(${(5 * $size) / 3}px, 0)`};
  }
`;

const motion3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
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
  Spinner: styled.div<{
    $size: number;
    $color: string;
  }>`
    display: flex;
    position: relative;
    width: ${({ $size }) => `${(17 * $size) / 3}px`};
    height: ${({ $size }) => `${$size}px`};

    div {
      position: absolute;
      width: ${({ $size }) => `${$size}px`};
      height: ${({ $size }) => `${$size}px`};
      border-radius: 50%;
      background: ${({ $color }) => $color};
    }

    div:nth-child(1) {
      left: ${({ $size }) => `${(2 * $size) / 3}px`};
      animation: ${motion1} 0.6s infinite;
    }

    div:nth-child(2) {
      left: ${({ $size }) => `${(2 * $size) / 3}px`};
      animation: ${({ $size }) => motion2Modify($size)} 0.6s infinite;
    }

    div:nth-child(3) {
      left: ${({ $size }) => `${(7 * $size) / 3}px`};
      animation: ${({ $size }) => motion2Modify($size)} 0.6s infinite;
    }

    div:nth-child(4) {
      left: ${({ $size }) => `${4 * $size}px`};
      animation: ${motion3} 0.6s infinite;
    }
  `,
};
