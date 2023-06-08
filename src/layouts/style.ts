import { LAYOUT_SIDE } from "utils";
import styled from "styled-components";

const Styled = {
  Main: styled.main``,
  Content: styled.div`
    margin-top: ${LAYOUT_SIDE.NAVBAR}px;
    padding: 24px;
    margin-bottom: ${LAYOUT_SIDE.TABBAR}px;
  `,
};

export default Styled;
