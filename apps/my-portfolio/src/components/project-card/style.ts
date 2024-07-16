import styled from "styled-components";

import { FlexBox } from "@phantomthief-react/components";

export const Styled = {
  Container: styled.div``,
  InnerContainer: styled.div`
    border-radius: 15px;
    border: solid 1px #1e2d3d;
    background-color: #011221;
    overflow: hidden;
    margin-top: 15px;
  `,
  Preview: styled.div`
    width: 100%;
    padding-top: 50%;
    position: relative;
    border-bottom: solid 1px #1e2d3d;

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,
  Details: styled(FlexBox)`
    padding: 30px;
  `,
};
