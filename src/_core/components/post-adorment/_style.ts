import { POST_ADORMENT_VARIANT } from "./_constants";
import { TPostAdormentVariant } from "./_types";
import { Text } from "@phantomthief/react.components.text";
import styled from "styled-components";

export const Styled = {
  Container: styled(Text)<{
    $adormentVariant: TPostAdormentVariant;
  }>`
    position: absolute;
    top: calc(50% + 6px);
    transform: translateY(-50%);
    left: ${({ $adormentVariant }) =>
      $adormentVariant === POST_ADORMENT_VARIANT.STANDARD ? "0px" : "14px"};
  `,
};
