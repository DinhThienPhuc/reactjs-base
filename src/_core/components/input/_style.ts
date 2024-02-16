import styled, { css } from "styled-components";

import { INPUT_VARIANT } from "./_constants";
import { TInputVariant } from "./_types";

const inputVariantModify = (props: {
  variant: TInputVariant;
  disabled: boolean;
}) => {
  if (props?.variant === INPUT_VARIANT.FILLED) {
    if (!props?.disabled) {
      return css`
        border-radius: 4px;
        border: 1px solid #ffffff3b;

        &:hover {
          border: 1px solid #ffffff;
        }

        &:focus,
        &:focus-visible,
        &:focus-within {
          border: 1px solid #90caf9;
        }
      `;
    }
    return css`
      border-radius: 4px;
      border: 1px solid #ffffff80;
    `;
  }

  if (props?.variant === INPUT_VARIANT.OUTLINED) {
    if (!props?.disabled) {
      return css`
        border-radius: 4px 4px 0 0;
        border-bottom: 1px solid #ffffffb3;
        background-color: #ffffff17;

        &:hover {
          border-bottom: 1px solid #ffffff;
          background-color: #ffffff21;
        }

        &:focus,
        &:focus-visible,
        &:focus-within {
          border-bottom: 1px solid #90caf9;
        }
      `;
    }
    return css`
      border-radius: 4px 4px 0 0;
      border-bottom: 1px solid #ffffff80;
      background-color: #ffffff17;
    `;
  }

  if (!props?.disabled) {
    return css`
      border-radius: 4px 4px 0 0;
      border-bottom: 1px solid #ffffffb3;

      &:hover {
        border-bottom: 1px solid #ffffff;
      }

      &:focus,
      &:focus-visible,
      &:focus-within {
        border-bottom: 1px solid #90caf9;
      }
    `;
  }

  return css`
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid #ffffff80;
  `;
};

const inputPaddingModify = (props: {
  hasPreAdorment: boolean;
  hasPostAdorment: boolean;
  variant: TInputVariant;
}) => {
  let paddingLeftStyle = 0;
  let paddingRightStyle = 0;
  const offset = props?.variant === INPUT_VARIANT.STANDARD ? 0 : 14;

  if (props?.hasPreAdorment) {
    paddingLeftStyle = 32 + offset;
  } else {
    paddingLeftStyle = offset;
  }
  if (props?.hasPostAdorment) {
    paddingRightStyle = 32 + offset;
  } else {
    paddingRightStyle = offset;
  }
  return css`
    width: calc(100% - ${paddingLeftStyle + paddingRightStyle}px);
    padding: 0 ${paddingRightStyle}px 0 ${paddingLeftStyle}px;
  `;
};

export const Styled = {
  Container: styled.div<{
    fullWidth: boolean;
    disabled: boolean;
    variant: TInputVariant;
  }>`
    transition: all 200ms ease-in-out;
    position: relative;
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "210px")};
    height: 56px;
    ${inputVariantModify};
  `,
  Input: styled.input<{
    variant: TInputVariant;
    hasPreAdorment: boolean;
    hasPostAdorment: boolean;
  }>`
    transition: all 200ms ease-in-out;
    height: 44px;
    margin-top: 12px;
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
