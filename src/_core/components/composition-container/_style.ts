import styled from "styled-components";
import { ICompositionContainerOffset } from "./_types";

export const Styled = {
  Container: styled.div<{
    offset: ICompositionContainerOffset;
    bgColor: string;
  }>`
    width: 100%;
    height: ${({ offset }) =>
      `calc(100vh - ${offset.top}px - ${offset.bottom}px)`};
    background-color: ${({ bgColor }) => bgColor};
  `,
};
