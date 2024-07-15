import styled from "styled-components";

import { ResponsiveTopnav } from "@phantomthief-react/modules";

const Styled = {
  Container: styled(ResponsiveTopnav)`
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

    & .responsive-topnav-item:first-of-type {
      border-bottom: 1px solid #1e2d3d;
    }

    &.responsive-topnav--mobile-expanded .responsive-topnav-item {
      border-top-color: #1e2d3d;
      border-bottom: none;
    }
  `,
};

export default Styled;
