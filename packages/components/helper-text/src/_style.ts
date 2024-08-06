import styled from "styled-components";

import { FONT } from "@phantompurr-react/utils.constants";

import { HELPER_TEXT_VARIANT } from "./_constants";
import { THelperTextVariant } from "./_types";

export const Styled = {
  Container: styled.span<{
    $variant: THelperTextVariant;
    $hasLabel: boolean;
    $isError: boolean;
  }>`
    display: inline-block;
    position: absolute;
    font-size: 12px;
    font-family: ${FONT.VERNADA};
    top: ${({ $hasLabel }) => 4 + ($hasLabel ? 44 : 56)}px;
    left: ${({ $variant }) =>
      $variant === HELPER_TEXT_VARIANT.STANDARD ? "0px" : "14px"};
    color: ${({ $isError }) => ($isError ? "#f44336" : "#ffffffb3")};
  `,
};
