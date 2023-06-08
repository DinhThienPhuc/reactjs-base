import { LAYOUT_SIDE } from "utils";
import styled from "styled-components";

const Styled = {
  Container: styled.nav`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    bottom: 0;
    height: ${LAYOUT_SIDE.TABBAR}px;
    padding: 18px 0px;
    width: 100%;
    background: #091522;
    box-shadow: 0px -4px 16px #000000;
    border-radius: 28px 28px 0px 0px;
    z-index: 100;
  `,
};

export default Styled;
