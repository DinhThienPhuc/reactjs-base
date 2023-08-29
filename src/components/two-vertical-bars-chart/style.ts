import * as _Components from "_core/components";

import styled from "styled-components";

const Styled = {
  ChartBox: styled.div`
    width: calc(50vw - 80px);
    height: 160px;
  `,
  Labels: styled(_Components.Flex)`
    width: 52px;
  `,
  Values: styled(_Components.Flex)`
    width: 30px;
  `,
};

export default Styled;
