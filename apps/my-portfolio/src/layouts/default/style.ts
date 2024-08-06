import styled from "styled-components";

import { FlexBox } from "@phantompurr-react/components";

const Styled = {
  Container: styled.div`
    padding: 15px;
  `,
  InnerContainer: styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: solid 1px #1e2d3d;
    background-color: #011627;
    height: calc(100vh - 30px);
    overflow: hidden;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0px 16px;
  `,
  Footer: styled.div`
    border-top: 1px solid #1e2d3d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    padding-left: 18px;
    color: #607b96;
  `,
  BottomLink: styled(FlexBox)`
    width: 48px;
    height: 48px;
    border-left: 1px solid #1e2d3d;
    color: #607b96;
  `,
};

export default Styled;
