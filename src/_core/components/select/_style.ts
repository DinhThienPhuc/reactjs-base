import styled, { css } from "styled-components";

import { ChevronDown as IconChevronLeft } from "react-feather";
import { SELECT_VARIANT } from "./_constants";
import { TSelectVariant } from "./_types";
import { Text } from "@phantomthief/react.components.text";
import { getVariantStyle } from "@phantomthief/react.utils.helpers";

const selectLabelModify = (props: {
  selectVariant: TSelectVariant;
  isLabelCollapsed: boolean;
}) => {
  if (props?.selectVariant === SELECT_VARIANT.STANDARD) {
    if (props?.isLabelCollapsed) {
      return css`
        font-size: 12px;
        top: 12px;
        left: 0px;
        color: #90caf9;
      `;
    }
    return css`
      left: 0px;
    `;
  }
  if (props?.isLabelCollapsed) {
    return css`
      font-size: 12px;
      top: 12px;
      left: 14px;
      color: #90caf9;
    `;
  }
  return css`
    left: 14px;
  `;
};

export const Styled = {
  Container: styled.div<{ fullWidth: boolean }>`
    position: relative;
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  `,
  Option: styled(Text)<{ selected: boolean }>`
    transition: all 200ms ease-in-out;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    height: 36px;
    background-color: ${({ selected }) =>
      selected ? "#90caf929" : "transparent"};

    &:hover {
      background-color: #ffffff14;
    }
  `,
  OptionGroup: styled.div<{
    isShowed: boolean;
    position: { left: number; top: number; width: number } | null;
  }>`
    position: absolute;
    display: ${({ isShowed }) => (isShowed ? "block" : "none")};
    top: ${({ position }) => position?.top || 0}px;
    left: ${({ position }) => position?.left || 0}px;
    width: ${({ position }) => position?.width || 0}px;
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
    fullWidth: boolean;
    disabled: boolean;
    variant: TSelectVariant;
  }>`
    transition: all 200ms ease-in-out;
    position: relative;
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "210px")};
    height: 56px;
    border-radius: 4px;
    ${getVariantStyle};
  `,
  Label: styled(Text)<{
    selectVariant: TSelectVariant;
    isLabelCollapsed: boolean;
  }>`
    transition: all 200ms ease-in-out;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    ${selectLabelModify};
  `,
  InnerBox: styled.div`
    position: absolute;
    transition: all 200ms ease-in-out;
    width: 100%;
    height: 44px;
    top: 12px;
    background-color: transparent;
    color: #ffffff;
    border: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding: 0px 16px;

    &:focus-visible {
      outline: none;
    }

    &:disabled {
      color: #ffffff80;
    }
  `,
  PostAdorment: styled.div<{
    variant: TSelectVariant;
  }>`
    position: absolute;
    top: calc(50% + 6px);
    transform: translateY(-50%);
    right: ${({ variant }) =>
      variant === SELECT_VARIANT.STANDARD ? "0px" : "14px"};
  `,
  HelperText: styled(Text)<{
    selectVariant: TSelectVariant;
  }>`
    position: absolute;
    bottom: -20px;
    left: ${({ selectVariant }) =>
      selectVariant === SELECT_VARIANT.STANDARD ? "0px" : "14px"};
  `,
  FakeSelect: styled.select`
    width: 100%;
    height: 100%;
    opacity: 0;
  `,
  Arrow: styled(IconChevronLeft)<{ $isShowed: boolean }>`
    transition: all 350ms ease-in-out;
    width: 20px;
    height: 20px;
    transform: ${({ $isShowed }) => ($isShowed ? "rotate(180deg)" : "none")};
  `,
};
