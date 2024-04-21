import { POST_ADORMENT_VARIANT } from "./_constants";
import { TPostAdormentVariant } from "./_types";
import { Typography } from "@phantomthief/react.components.typography";
import styled from "styled-components";

export const Styled = {
  Container: styled(Typography)<{
    $adormentVariant: TPostAdormentVariant;
  }>`
    position: absolute;
    top: calc(50% + 6px);
    transform: translateY(-50%);
    right: ${({ $adormentVariant }) =>
      $adormentVariant === POST_ADORMENT_VARIANT.STANDARD ? "0px" : "14px"};
  `,
};
