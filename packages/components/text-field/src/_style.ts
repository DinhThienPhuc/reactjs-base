import styled, { css } from "styled-components";

import { getVariantStyle } from "@phantompurr-react/utils.helpers";

import { TEXT_FIELD_VARIANT } from "./_constants";
import { TTextFieldVariant } from "./_types";

const inputPaddingModify = (props: {
  $hasPreAdorment: boolean;
  $hasPostAdorment: boolean;
  $variant: TTextFieldVariant;
}) => {
  let paddingLeftStyle = 0;
  let paddingRightStyle = 0;
  const offset = props?.$variant === TEXT_FIELD_VARIANT.STANDARD ? 0 : 14;

  if (props?.$hasPreAdorment) {
    paddingLeftStyle = 32 + offset;
  } else {
    paddingLeftStyle = offset;
  }
  if (props?.$hasPostAdorment) {
    paddingRightStyle = 32 + offset;
  } else {
    paddingRightStyle = offset;
  }
  return css`
    padding: 0px ${paddingRightStyle}px 0px ${paddingLeftStyle}px;
  `;
};

export const Styled = {
  Container: styled.div<{
    $fullWidth: boolean;
    $disabled: boolean;
    $variant: TTextFieldVariant;
  }>`
    transition: all 200ms ease-in-out;
    position: relative;
    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "210px")};
    height: 56px;
    border-radius: 4px;
    ${getVariantStyle};
  `,
  Input: styled.input<{
    $variant: TTextFieldVariant;
    $hasPreAdorment: boolean;
    $hasPostAdorment: boolean;
    $hasLabel: boolean;
  }>`
    box-sizing: border-box;
    transition: all 200ms ease-in-out;
    width: 100%;
    margin-top: ${({ $hasLabel }) => ($hasLabel ? "12px" : "0px")};
    height: ${({ $hasLabel }) => ($hasLabel ? "44px" : "56px")};
    line-height: ${({ $hasLabel }) => ($hasLabel ? "44px" : "56px")};
    background-color: transparent;
    color: #ffffff;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    ${inputPaddingModify};

    &:focus-visible {
      outline: none;
    }

    &:disabled {
      color: #ffffff80;
    }
  `,
};
