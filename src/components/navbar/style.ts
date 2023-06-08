import * as _Components from "_core/components";

import Button from "components/button";
import { LAYOUT_SIDE } from "utils";
import styled from "styled-components";

const Styled = {
  Navbar: styled(_Components.Navbar)`
    background: #091522;
    height: ${LAYOUT_SIDE.NAVBAR}px;
    border: 2px solid #000000;
    box-shadow: 0px -4px 16px #000000;
    border-radius: 0px 0px 28px 28px;
    justify-content: space-between;
    align-items: flex-end;
    padding: 18px 24px;
    z-index: 100;

    & .navbar-button,
    & .navbar-title {
      height: 48px;
    }

    & .navbar-title {
      font-weight: 800;
      font-size: 24px;
    }
  `,
  Button: styled(Button)`
    min-width: unset;
    padding: unset;
    width: 48px;
    height: 48px;
    background: #09152280;
    border: 2px solid #000000;
    box-shadow: 0px -4px 16px #000000;
    border-radius: 28px;
  `,
};

export default Styled;
