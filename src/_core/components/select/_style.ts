import styled, { css } from "styled-components";

import { SELECT_VARIANT } from "./_constants";
import { TSelectVariant } from "./_types";
import { modifyVariant } from "@phantomthief/react.utils.helpers";

const modifyInnerBoxPadding = (props: { $variant: TSelectVariant }) => {
  if (props.$variant === SELECT_VARIANT.STANDARD) {
    return css`
      padding: 0px 35px 0px 0px;
    `;
  }

  return css`
    padding: 0px 35px 0px 14px;
  `;
};

export const Styled = {
  Container: styled.div<{ $fullWidth: boolean }>`
    position: relative;
    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "fit-content")};
  `,
  Option: styled.div<{ $selected: boolean; $disabled?: boolean }>`
    transition: all 200ms ease-in-out;
    cursor: pointer;
    padding: 0px 14px;
    height: 36px;
    line-height: 36px;
    background-color: ${({ $selected, $disabled }) => {
      if ($disabled) {
        return "#121212";
      }
      return $selected ? "#90caf929" : "transparent";
    }};
    color: ${({ $disabled }) => ($disabled ? "#ffffff80" : "#ffffff")};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
      background-color: #ffffff14;
    }
  `,
  OptionGroup: styled.div<{
    $isShowed: boolean;
    $position: { left: number; top: number; width: number } | null;
  }>`
    position: absolute;
    display: ${({ $isShowed }) => ($isShowed ? "block" : "none")};
    top: ${({ $position }) => $position?.top || 0}px;
    left: ${({ $position }) => $position?.left || 0}px;
    width: ${({ $position }) => $position?.width || 0}px;
    padding: 6px 0px;
    z-index: 999;
    background-color: rgb(18, 18, 18);
    min-width: 120px;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
      rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
    background-image: linear-gradient(#ffffff1f, #ffffff1f);
  `,
  Box: styled.div<{
    $fullWidth: boolean;
    $disabled: boolean;
    $variant: TSelectVariant;
    $isError: boolean;
  }>`
    transition: all 200ms ease-in-out;
    position: relative;
    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "210px")};
    height: 56px;
    border-radius: 4px;
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    ${modifyVariant};
  `,
  InnerBox: styled.span<{
    $hasLabel: boolean;
    $variant: TSelectVariant;
    $disabled: boolean;
  }>`
    position: absolute;
    transition: all 200ms ease-in-out;
    box-sizing: border-box;
    width: 100%;
    height: ${({ $hasLabel }) => ($hasLabel ? "44px" : "56px")};
    line-height: ${({ $hasLabel }) => ($hasLabel ? "44px" : "56px")};
    top: ${({ $hasLabel }) => ($hasLabel ? "12px" : "0px")};
    left: 0px;
    background-color: transparent;
    border: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({ $disabled }) => ($disabled ? "#ffffff80" : "#ffffff")};
    ${modifyInnerBoxPadding};

    &:focus-visible {
      outline: none;
    }
  `,
  FakeSelect: styled.select`
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  `,
  PostAdormentContentWrapper: styled.div<{
    $isShowed: boolean;
    $disabled?: boolean;
  }>`
    display: flex;
    transition: all 350ms ease-in-out;
    width: 20px;
    height: 20px;
    color: ${({ $disabled }) => ($disabled ? "#ffffff80" : "#ffffff")};
    transform: ${({ $isShowed }) => ($isShowed ? "rotate(180deg)" : "none")};
  `,
};
