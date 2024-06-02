import styled, { css } from "styled-components";

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
  `,
  Item: styled.a<{ $isMobileMenuExpanded: boolean }>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #ffffff1f;

    &:hover {
      cursor: pointer;
    }

    @media (min-width: 768px) {
      height: 64px;
      padding-left: 24px;
      padding-right: 24px;
    }
    /* display: inline-block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;

    &:hover {
      background-color: #ddd;
      color: black;
    }

    &.icon {
      display: none;
    }

    @media screen and (max-width: 600px) {
      &:not(:first-child) {
        display: none;
      }

      &.icon {
        float: right;
        display: block;
      }

      ${({ $isMobileMenuExpanded }) =>
      $isMobileMenuExpanded &&
      css`
        float: none;
        display: block;
        text-align: left;

        &.icon {
          position: absolute;
          right: 0;
          top: 0;
        }
      `};
    } */
  `,
};
