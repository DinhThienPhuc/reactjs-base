import styled, { css } from "styled-components";

import { NavLink } from "react-router-dom";

const Styled = {
  Container: styled(NavLink)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 58px;
    height: 44px;
    margin: 0 29px;
  `,
  Text: styled.span<{ isActive?: boolean }>`
    font-weight: 600;
    font-size: 10px;
    color: ${({ isActive }) => (isActive ? "#ffffff" : "#8d8e99")};
  `,
  Badge: styled.span<{ isReachedMaxFighters: boolean }>`
    position: absolute;
    top: -8px;
    right: 5px;
    font-size: 14px;
    font-weight: 600;
    ${({ isReachedMaxFighters }) =>
      isReachedMaxFighters
        ? css`
            /* color: #ffffff; */
            color: #11dce8;
            text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
              0 0 42px #11dce8, 0 0 82px #11dce8, 0 0 92px #11dce8,
              0 0 102px #11dce8, 0 0 151px #11dce8;
          `
        : css`
            color: #ffffff;
          `}
  `,
};

export default Styled;
