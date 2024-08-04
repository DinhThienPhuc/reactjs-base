import styled, { css } from "styled-components";

import { FONT, getInvisibleButton } from "@phantomthief-react/utils";

export const Styled = {
  Container: styled.div`
    color: #ffffff;
  `,
  ItemContainer: styled.div<{ $isExpanded: boolean }>`
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
  ItemHeader: styled.button<{ $disabled?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    color: ${({ $disabled }) => ($disabled ? "#ffffff80" : "#ffffff")};
    padding: 0px 16px;
    width: 100%;
    height: 48px;
    ${getInvisibleButton}
    ${({ $disabled }) =>
      $disabled
        ? css`
            background-color: #ffffff1f;
            pointer-events: none;
            cursor: default;
          `
        : css`
            background-color: transparent;
            cursor: pointer;
          `};
  `,
  ItemHeaderSection: styled.span`
    display: flex;
    gap: 16px;
  `,
  ItemHeaderSectionGroup: styled.span`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  `,
  ItemHeaderLabel: styled.span`
    font-family: ${FONT.VERNADA};
  `,
  ItemHeaderExpandIcon: styled.span<{
    $isExpanded: boolean;
  }>`
    display: flex;
    transition: all 250ms ease-in-out;
    width: 20px;
    height: 20px;
    transform: ${({ $isExpanded }) =>
      $isExpanded ? "rotate(180deg)" : "none"};
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
