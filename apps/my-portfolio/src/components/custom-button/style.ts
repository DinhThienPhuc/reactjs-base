import styled from "styled-components";

import { Button } from "@phantomthief-react/components";

export const Styled = {
  CustomButton: styled(Button)`
    padding: 10px 14px;
    border-radius: 8px;
    background-color: #1c2b3a;
    font-size: 14px;
    color: #fff;
    border: none;

    &:hover {
      border: none;
    }
  `,
};
