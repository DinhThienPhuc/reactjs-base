import { POST_ADORMENT_VARIANT } from "./_constants";
import { TPostAdormentVariant } from "./_types";
import styled from "styled-components";

export const Styled = {
  Container: styled.div<{
    $adormentVariant: TPostAdormentVariant;
    $hasLabel: boolean;
  }>`
    position: absolute;
    top: ${({ $hasLabel }) => ($hasLabel ? "calc(50% + 6px)" : "50%")};
    transform: translateY(-50%);
    right: ${({ $adormentVariant }) =>
      $adormentVariant === POST_ADORMENT_VARIANT.STANDARD ? "0px" : "14px"};
  `,
};
