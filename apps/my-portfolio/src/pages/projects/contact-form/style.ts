import { TextField } from "@phantomthief-react/components";
import styled from "styled-components";

export const Styled = {
  Container: styled.div`
    display: flex;
    min-height: 334px;
    width: 100%;

    & form {
      width: 100%;
    }
  `,
  TextField: styled(TextField)`
    margin: 10px 0px 18px 0px;
    border-radius: 8px;
    border: solid 1px #1e2d3d;
    background-color: #011221;
    height: 41px;

    &:hover {
      border-color: #607b96;
    }

    & .text-field-input {
      height: 100%;
      color: #465e77;
    }
  `,
};
