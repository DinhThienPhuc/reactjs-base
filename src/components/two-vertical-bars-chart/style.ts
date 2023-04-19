import { Flex } from "_libs/components";
import styled from "styled-components";

const Styled = {
  ChartBox: styled.div`
    width: calc(50vw - 80px);
    height: 160px;
  `,
  Labels: styled(Flex)`
    width: 52px;
  `,
  Values: styled(Flex)`
    width: 30px;
  `,
};

export default Styled;
