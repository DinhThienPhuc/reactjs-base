import { Navbar } from "_libs/components";
import WrapperButton from "../wrapper-button";
import styled from "styled-components";

const WrapperStyled = {
  Navbar: styled(Navbar)`
    background: #091522;
    height: 100px;
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
  Button: styled(WrapperButton)`
    min-width: unset;
    padding: unset;
    width: 48px;
    height: 48px;
    background: #09152280;
    border: 2px solid #000000;
    box-shadow: 0px -4px 16px #000000;
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export default WrapperStyled;
