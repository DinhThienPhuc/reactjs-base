import styled from "styled-components";

export const Styled = {
  Container: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #121212;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow:
      #00000033 0px 2px 4px -1px,
      #00000024 0px 4px 5px 0px,
      #0000001f 0px 1px 10px 0px;
    background-image: linear-gradient(#ffffff17, #ffffff17);
    width: 100%;
  `,
  Item: styled.a<{ $isMobileMenuExpanded: boolean }>`
    transition: all 200ms ease-in-out;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    height: 56px;
    overflow: hidden;

    &:not(:first-child) {
      border-top: ${({ $isMobileMenuExpanded }) =>
        $isMobileMenuExpanded ? "1px solid #ffffff1f" : "0px"};
      height: ${({ $isMobileMenuExpanded }) =>
        $isMobileMenuExpanded ? "56px" : "0px"};
      opacity: ${({ $isMobileMenuExpanded }) =>
        $isMobileMenuExpanded ? 1 : 0};
    }

    &:hover {
      cursor: pointer;
    }

    @media (min-width: 768px) {
      height: 64px;
      padding-left: 24px;
      padding-right: 24px;
    }
  `,
  MenuIconWrapper: styled.div`
    position: absolute;
    top: 28px;
    right: 28px;
    transform: translate(50%, -50%);
  `,
};
