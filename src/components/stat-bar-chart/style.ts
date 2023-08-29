import * as _Components from "_core/components";

import styled from "styled-components";

const Styled = {
  Container: styled.div`
    width: 60px;
    height: 120px;
    text-align: center;
  `,
  Label: styled(_Components.Text)`
    margin-top: 6px;
  `,
};

export default Styled;
