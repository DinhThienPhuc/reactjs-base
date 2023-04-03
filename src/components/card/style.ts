import styled, { css } from "styled-components";

import { ArrowRight as IconArrowRight } from "react-feather";
import WrapperButton from "../wrapper-button";

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
  Box: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    margin-left: 12px;
  `,
  BoxHeader: styled.div``,
  BoxHeaderChild: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 24px;
  `,
  Description: styled.div`
    font-weight: 400;
    font-size: 14px;
    margin-top: 8px;
  `,
  Epithet: styled.div``,
  Name: styled.span`
    font-weight: 800;
    font-size: 16px;
    color: #11dce8;
  `,
  SelectBox: styled.div``,
  BoxFooter: styled.div`
    display: flex;
    justify-content: flex-end;
    height: 24px;
  `,
  DetailButton: styled(WrapperButton)`
    padding: unset;
    min-width: unset;
    height: 100%;
    display: flex;
    align-items: center;
  `,
  BtnText: styled.span`
    font-weight: 700;
    font-size: 14px;
    margin-right: 6px;
  `,
  IconArrowRight: styled(IconArrowRight)`
    color: #11dce8;
  `,
};

export default WrapperStyled;
