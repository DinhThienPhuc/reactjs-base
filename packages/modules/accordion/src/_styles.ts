import { IStyledAccordionItemContainerProps } from "./_types";
import styled, { css } from "styled-components";

export const Styled = {
  Container: styled.div`
    color: #ffffff;
  `,
  ItemContainer: styled.div<IStyledAccordionItemContainerProps>`
    transition: margin 150ms ease-in-out;
    background-color: #121212;
    width: 100%;
    box-shadow:
      #00000033 0px 2px 1px -1px,
      #00000024 0px 1px 1px 0px,
      #0000001f 0px 1px 3px 0px;
    background-image: ease-in-out-gradient(#ffffff0d, #ffffff0d);
    will-change: margin;
    margin: ${({ $isExpanded }) => ($isExpanded ? "16px 0px" : "0px")};

    &:not(:first-of-type) {
      border-top: 1px solid #ffffff1f;
    }

    &:first-of-type {
      margin-top: 0px;
    }

    &:last-of-type {
      margin-bottom: 0px;
    }
  `,
  ItemHeader: styled.button`
    background-color: transparent;
    outline: 0;
    border: none;
    width: 100%;
    height: 48px;
    cursor: pointer;
    color: inherit;
    padding: 0px 16px;
  `,
  ItemContent: styled.div<{ $isExpanded: boolean }>`
    transition:
      max-height 150ms ease-in-out,
      opacity 150ms ease-in-out,
      padding-top 150ms ease-in-out,
      padding-bottom 150ms ease-in-out;
    padding-left: 16px;
    padding-right: 16px;
    overflow: hidden;
    will-change: max-height, opacity, padding-top, padding-bottom;

    ${({ $isExpanded }) =>
      $isExpanded
        ? css`
            max-height: 200vh;
            padding-top: 16px;
            padding-bottom: 16px;
            opacity: 1;
          `
        : css`
            max-height: 0px;
            padding-top: 0px;
            padding-bottom: 0px;
            opacity: 0;
          `};
  `,
};
