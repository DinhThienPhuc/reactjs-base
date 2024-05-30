import { HELPER_TEXT_VARIANT } from "./_constants";
import { THelperTextVariant } from "./_types";
import styled from "styled-components";

export const Styled = {
  Container: styled.div<{
    $variant: THelperTextVariant;
    $order: number;
  }>`
    position: absolute;
    bottom: -20px;
    bottom: ${({ $order }) => -20 - $order * 16}px;
    left: ${({ $variant }) =>
      $variant === HELPER_TEXT_VARIANT.STANDARD ? "0px" : "14px"};
  `,
};
