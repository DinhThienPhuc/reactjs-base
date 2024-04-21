import { PRE_ADORMENT_VARIANT } from "./_constants";
import { TPreAdormentVariant } from "./_types";
import { Typography } from "@phantomthief/react.components.typography";
import styled from "styled-components";

export const Styled = {
  Container: styled(Typography)<{
    $adormentVariant: TPreAdormentVariant;
  }>`
    position: absolute;
    top: calc(50% + 6px);
    transform: translateY(-50%);
    left: ${({ $adormentVariant }) =>
      $adormentVariant === PRE_ADORMENT_VARIANT.STANDARD ? "0px" : "14px"};
  `,
};
