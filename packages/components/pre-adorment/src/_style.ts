import { PRE_ADORMENT_VARIANT } from "./_constants";
import { TPreAdormentVariant } from "./_types";
import styled from "styled-components";

export const Styled = {
  Container: styled.div<{
    $adormentVariant: TPreAdormentVariant;
    $hasLabel: boolean;
  }>`
    position: absolute;
    top: ${({ $hasLabel }) => ($hasLabel ? "calc(50% + 6px)" : "50%")};
    transform: translateY(-50%);
    left: ${({ $adormentVariant }) =>
      $adormentVariant === PRE_ADORMENT_VARIANT.STANDARD ? "0px" : "14px"};
  `,
};
