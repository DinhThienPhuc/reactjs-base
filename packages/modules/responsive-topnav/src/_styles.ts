import { getInvisibleButton } from "@phantomthief-react/utils";
import styled from "styled-components";

export const Styled = {
  Container: styled.div<{ $isMobileMenuExpanded: boolean }>`
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
    height: ${({ $isMobileMenuExpanded }) =>
      $isMobileMenuExpanded ? "100vh" : "auto"};

    @media (min-width: 768px) {
      flex-direction: row;
    }
  `,
  Item: styled.button<{
    $isMobileMenuExpanded: boolean;
    $isActivated: boolean;
  }>`
    position: relative;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    width: 100%;
    height: 56px;
    overflow: hidden;
    color: ${({ $isActivated }) => ($isActivated ? "#90caf9" : "#ffffff")};
    ${getInvisibleButton};

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

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 3px;
      border-radius: 4px;
      background-color: #90caf9;
      transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
      width: ${({ $isActivated }) => ($isActivated ? "100%" : 0)};
    }

    @media (min-width: 768px) {
      height: 64px;
      padding-left: 24px;
      padding-right: 24px;
      width: auto;

      &:not(:first-child) {
        opacity: 1;
        height: 64px;
      }
    }
  `,
  Left: styled.div``,
  Center: styled.div``,
  Right: styled.div``,
  MenuIconWrapper: styled.div`
    display: flex;
    position: absolute;
    top: 28px;
    right: 28px;
    transform: translate(50%, -50%);

    @media (min-width: 768px) {
      display: none;
    }
  `,
};
