import { ResponsiveTopnav } from "@phantomthief-react/modules";
import styled from "styled-components";

const Styled = {
  Container: styled.div`
    position: relative;
    padding: 15px;
    background-color: #010c15;
    color: #ffffff;

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
    border-radius: 8px;
    border: solid 1px #1e2d3d;
    background-color: #011627;
    height: calc(100vh - 30px);
    overflow: hidden;
  `,
  ResponsiveTopnav: styled(ResponsiveTopnav)`
    position: relative;
    background: #011627;
    box-shadow: none;

    &.responsive-topnav--mobile-expanded {
      height: calc(100vh - 30px);
    }

    /* &.responsive-topnav--mobile-expanded {
      height: calc(100vh - 30px);
    } */

    &.responsive-topnav--mobile-expanded .responsive-topnav-item {
      border-top-color: #1e2d3d;
    }
  `,
};

export default Styled;
