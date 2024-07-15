import styled, { css } from "styled-components";

import { getInvisibleButton } from "@phantomthief-react/utils";

import { POST_ADORMENT_VARIANT } from "./_constants";
import { IStyledContainerProps } from "./_types";

const modifyContainer = (props: IStyledContainerProps) => {
  return css`
    display: flex;
    position: absolute;
    transform: translateY(-50%);
    color: #ffffff;
    top: ${props.$hasLabel ? "calc(50% + 6px)" : "50%"};
    right: ${props.$adormentVariant === POST_ADORMENT_VARIANT.STANDARD
      ? "0px"
      : "14px"};
  `;
};

export const Styled = {
  Container: styled.span<IStyledContainerProps>`
    ${modifyContainer};
  `,
  ButtonContainer: styled.button<IStyledContainerProps>`
    ${getInvisibleButton};
    ${modifyContainer};
  `,
};
