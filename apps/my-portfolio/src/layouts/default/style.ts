import { ResponsiveTopnav } from "@phantomthief-react/modules";
import { FlexBox } from "@phantomthief-react/components";
import styled from "styled-components";

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
  `,
  Topnav: styled(ResponsiveTopnav)`
    background: #011627;
    box-shadow: none;

    &.responsive-topnav--mobile-expanded {
      height: calc(100vh - 78px);
    }

    & .responsive-topnav-item {
      color: #607b96;
    }

    & .responsive-topnav-item--active {
      color: #ffffff;
    }

    & .responsive-topnav-item--active::after {
      background-color: #fea55f;
      border-radius: 0px;
      height: 3px;
    }

    &.responsive-topnav--mobile-expanded .responsive-topnav-item {
      border-top-color: #1e2d3d;
    }
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
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
