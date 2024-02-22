import styled, { css } from "styled-components";

const sectionModify = () => {
  return css`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100%;
  `;
};

export const Styled = {
  Container: styled.nav`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 56px;
    background-color: #121212;
    left: 0;
    right: 0;
  `,
  Title: styled.div`
    ${sectionModify};
  `,
  LeftButton: styled.div`
    ${sectionModify};
  `,
  RightButton: styled.div`
    ${sectionModify};
  `,
};
