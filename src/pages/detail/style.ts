import { Avatar, WrapperButton, WrapperNavbar } from "components";

import styled from "styled-components";

const Styled = {
  Navbar: styled(WrapperNavbar)`
    background-color: transparent;
    box-shadow: none;
    border: none;
  `,
  Box: styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #091522b3;
    box-shadow: 0px -4px 16px #000000;
    border-radius: 28px;
    height: 680px;
  `,
  Avatar: styled(Avatar)`
    position: absolute;
    top: -60px;
    left: calc(50% - 60px);
  `,
  Name: styled.div`
    font-weight: 800;
    font-size: 32px;
    margin-top: 80px;
    text-align: center;
  `,
  Epithet: styled.div`
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
    height: 24px;
  `,
  ParamGroup: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
  `,
  Param: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 110px;
    min-height: 120px;
  `,
  Title: styled.div`
    font-size: 16px;
    margin-top: 10px;
  `,
  Unit: styled.div`
    font-size: 16px;
  `,
  Value: styled.div`
    margin-top: 10px;
    font-weight: 800;
    font-size: 20px;
  `,
  FightingStyle: styled.div`
    font-size: 16px;
    padding: 5px 0px;
    text-align: center;

    &.first-element {
      margin-top: 30px;
    }
  `,
  ButtonGroup: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 100px;
  `,
  DeleteButton: styled(WrapperButton)`
    &.button-variant__outlined {
      color: #ff5858;
      border-color: #ff5858;
    }

    &.button-variant__outlined:hover {
      color: #ff5858;
      border-color: #ff5858;
    }
  `,
  WrapIcon: styled.div`
    margin-right: 8px;
  `,
};

export default Styled;
