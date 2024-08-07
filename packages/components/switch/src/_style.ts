import styled, { css } from "styled-components";

import { FONT } from "@phantompurr-react/utils.constants";

const disabledLabelModify = ({ $disabled }: { $disabled: boolean }) => {
  if ($disabled) {
    return css`
      opacity: 0.5;
      cursor: not-allowed;
    `;
  }

  return css`
    opacity: 1;
  `;
};

const modifyLabelFontStyle = ({ $disabled }: { $disabled: boolean }) => {
  return css`
    color: ${$disabled ? "#ffffff80" : "#ffffff"};
    font-size: 16px;
    font-family: ${FONT.VERNADA};
  `;
};

export const Styled = {
  Container: styled.div`
    display: inline-flex;
    align-items: center;
  `,
  Pad: styled.div<{ $isOn: boolean; $disabled: boolean }>`
    position: relative;
    transition: all 200ms ease-in-out;
    width: 34px;
    height: 14px;
    border-radius: 7px;
    background-color: ${({ $isOn, $disabled }) => {
      if ($disabled) {
        if ($isOn) {
          return "rgb(144, 202, 249, 0.2)";
        }
        return "rgb(255, 255, 255, 0.2)";
      }
      if ($isOn) {
        return "rgb(144, 202, 249, 0.5)";
      }
      return "rgb(255, 255, 255, 0.5)";
    }};

    &::after {
      position: absolute;
      pointer-events: none;
      transition: all 200ms ease-in-out;
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${({ $isOn, $disabled }) => {
        if ($disabled) {
          if ($isOn) {
            return "rgb(64, 90, 112)";
          }
          return "rgb(117, 117, 117)";
        }
        if ($isOn) {
          return "rgb(144, 202, 249)";
        }
        return "rgb(224, 224, 224)";
      }};
      transform: ${({ $isOn }) =>
        $isOn ? "translate(17px, -3px)" : "translate(-3px, -3px)"};
    }

    & > input {
      position: absolute;
      height: 20px;
      width: 34px;
      top: -3px;
      opacity: 0;
      cursor: ${({ $disabled }) => {
        if ($disabled) {
          return "not-allowed";
        }
        return "pointer";
      }};
    }
  `,
  LeftLabel: styled.span<{ $disabled: boolean }>`
    margin-right: 8px;
    ${modifyLabelFontStyle};
    ${disabledLabelModify};
  `,
  RightLabel: styled.span<{ $disabled: boolean }>`
    margin-left: 8px;
    ${modifyLabelFontStyle};
    ${disabledLabelModify};
  `,
};
