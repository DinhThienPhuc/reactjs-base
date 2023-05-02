import {
  Avatar,
  WrapperButton,
  WrapperInput,
  WrapperNavbar,
  _Components,
} from "components";

import styled from "styled-components";

const Styled = {
  Navbar: styled(WrapperNavbar)`
    background-color: transparent;
    box-shadow: none;
    border: none;
  `,
  AvatarPreview: styled(Avatar)`
    margin: 0px auto 24px auto;
  `,
  Box: styled.div`
    background: #091522b3;
    box-shadow: 0px -4px 16px #000000;
    border-radius: 28px;
    padding: 24px;
  `,
  Input: styled(WrapperInput)`
    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
  `,
  ButtonGroup: styled(_Components.Flex)`
    width: 100%;
    margin-top: 36px;
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
