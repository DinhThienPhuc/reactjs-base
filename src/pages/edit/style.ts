import { Avatar, Button, Input, Navbar, _Components } from "components";

import styled from "styled-components";

const Styled = {
  Navbar: styled(Navbar)`
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
  Input: styled(Input)`
    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
  `,
  ButtonGroup: styled(_Components.Flex)`
    width: 100%;
    margin-top: 36px;
  `,
  DeleteButton: styled(Button)`
    &.button-variant__outlined {
      color: #ff5858;
      border-color: #ff5858;
    }

    &.button-variant__outlined:hover {
      color: #ff5858;
      border-color: #ff5858;
    }
  `,
  Icon: styled.div`
    margin-right: 8px;
  `,
};

export default Styled;
