import * as _Components from "_core/components";

import styled, { css } from "styled-components";

import { ArrowRight as IconArrowRight } from "react-feather";
import WrapperButton from "components/wrapper-button";

const WrapperStyled = {
  Container: styled.div<{ isSelected: boolean }>`
    transition: all 300ms ease-in-out;
    display: flex;
    background: #091522b3;
    box-shadow: 0px -4px 16px #000000;
    border-radius: 28px;
    padding: 24px;
    height: 142px;
    ${({ isSelected }) =>
      isSelected
        ? css`
            transform: scale(1.03);
            border: 1px solid #11dce8;
            box-shadow: 0px 0px 16px #11dce8;
          `
        : css``};
  `,
  AvatarBox: styled.div`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: #eeeef0;
    border: 1px solid #ffffff;

    & img {
      border-radius: 50%;
      width: 70px;
      height: 70px;
    }
  `,
  Box: styled(_Components.Flex)`
    height: 100%;
    width: 100%;
    margin-left: 12px;
  `,
  BoxHeaderChild: styled(_Components.Flex)`
    height: 24px;
  `,
  Description: styled.div`
    margin-top: 8px;
  `,
  SelectBox: styled.div``,
  BoxFooter: styled(_Components.Flex)`
    height: 24px;
  `,
  DetailButton: styled(WrapperButton)`
    padding: unset;
    min-width: unset;
    height: 100%;
  `,
  BtnText: styled(_Components.Text)`
    margin-right: 6px;
  `,
  IconArrowRight: styled(IconArrowRight)`
    color: #11dce8;
  `,
};

export default WrapperStyled;
