import { ResponsiveTopnav } from "@phantomthief-react/modules";
import styled from "styled-components";

const Styled = {
  Container: styled.div`
    position: relative;
    padding: 15px;
    background-color: #010c15;

    &::before {
      content: "";
      position: absolute;
      width: 280px;
      height: 275px;
      flex-grow: 0;
      top: 289px;
      padding: 12px 41px 81px 42px;
      transform: rotate(-94deg);
      opacity: 0.4;
      -webkit-filter: blur(174px);
      filter: blur(174px);
      background-color: #43d9ad;
    }

    &::after {
      content: "";
      position: absolute;
      width: 264px;
      height: 329px;
      flex-grow: 0;
      bottom: 86px;
      left: 62px;
      transform: rotate(-346deg);
      opacity: 0.4;
      -webkit-filter: blur(174px);
      filter: blur(174px);
      background-color: #4d5bce;
    }
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
  Topnav: styled(ResponsiveTopnav)`
    z-index: 1;
    background: #011627;
    box-shadow: none;

    &.responsive-topnav--mobile-expanded {
      height: calc(100vh - 30px);
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
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 134px);
    width: 100%;
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
};

export default Styled;
