import { Button } from "_libs/components";
import styled from "styled-components";

const WrapperStyled = {
  Button: styled(Button)`
    transition: all 300ms linear;
    min-width: 115px;
    height: 44px;
    border-radius: 44px;
    color: #ffffff;

    &.button-variant__text:hover {
      color: #11dce8;
      background-color: transparent;
    }

    &.button-variant__outlined {
      border: 2px solid #11dce8;
    }

    &.button-variant__outlined:hover {
      color: #11dce8;
    }

    &.button-variant__contained {
      background: #11dce8;
    }

    &.button-variant__contained:hover {
      background: #72a5f2;
    }
  `,
};

export default WrapperStyled;
