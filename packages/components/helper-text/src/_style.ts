import { HELPER_TEXT_VARIANT } from "./_constants";
import { THelperTextVariant } from "./_types";
import styled from "styled-components";

export const Styled = {
  Container: styled.div<{
    $variant: THelperTextVariant;
    $hasLabel: boolean;
  }>`
    position: absolute;
    top: ${({ $hasLabel }) => 4 + ($hasLabel ? 44 : 56)}px;
    left: ${({ $variant }) =>
      $variant === HELPER_TEXT_VARIANT.STANDARD ? "0px" : "14px"};
  `,
};
