import { IStyledLabelProps } from "./_types";
import { Typography } from "@phantomthief/react.components.typography";
import { getLabelStyle } from "@phantomthief/react.utils.helpers";
import styled from "styled-components";

export const Styled = {
  Container: styled(Typography)<IStyledLabelProps>`
    transition: all 200ms ease-in-out;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    ${getLabelStyle};
  `,
};
