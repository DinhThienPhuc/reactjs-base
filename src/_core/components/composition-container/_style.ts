import styled from "styled-components";
import { ICompositionContainerOffset } from "./_types";

export const Styled = {
  Container: styled.div<{
    offset: ICompositionContainerOffset;
  }>`
    width: 100%;
    height: ${({ offset }) =>
      `calc(100vh - ${offset.top}px - ${offset.bottom}px)`};
  `,
};