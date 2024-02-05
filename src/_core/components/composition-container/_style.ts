import { ICompositionContainerOffset } from "./_types";
import styled from "styled-components";

export const Styled = {
  Container: styled.div<{
    offset: ICompositionContainerOffset;
  }>`
    width: 100%;
    height: ${({ offset }) =>
      `calc(100vh - ${offset.top}px - ${offset.bottom}px)`};
  `,
};
