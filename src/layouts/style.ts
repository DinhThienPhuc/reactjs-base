import { LAYOUT_SIZE } from "utils";
import styled from "styled-components";

const Styled = {
  Main: styled.main``,
  Content: styled.div`
    margin-top: ${LAYOUT_SIZE.NAVBAR}px;
    padding: 24px;
    margin-bottom: ${LAYOUT_SIZE.TABBAR}px;
  `,
};

export default Styled;
