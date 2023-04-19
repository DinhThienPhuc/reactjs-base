import { Text } from "_libs/components";
import styled from "styled-components";

const Styled = {
  Container: styled.div`
    width: 60px;
    height: 120px;
    text-align: center;
  `,
  Label: styled(Text)`
    /* font-size: 13px;
    font-weight: 600; */
    margin-top: 6px;
  `,
};

export default Styled;
