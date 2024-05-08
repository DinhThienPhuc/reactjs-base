import { ICompositionContainerOffset } from "./_types";
import styled from "styled-components";

export const Styled = {
  Container: styled.div<{
    $offset: ICompositionContainerOffset;
  }>`
    box-sizing: border-box;
    width: 100%;
    height: ${({ $offset }) =>
      `calc(100vh - ${$offset.top}px - ${$offset.bottom}px)`};
  `,
};
