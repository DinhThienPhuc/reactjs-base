import styled, { css } from "styled-components";

const Styled = {
  Container: styled.div<{ isSelected: boolean }>`
    transition: all 300ms ease-in-out;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    padding: 5px;

    ${({ isSelected }) =>
      isSelected
        ? css`
            border: 2px solid #11dce8;
            box-shadow: 0px 0px 24px #11dce8;
          `
        : css`
            border: 2px solid #ffffff;
          `};

    & img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  `,
};

export default Styled;
