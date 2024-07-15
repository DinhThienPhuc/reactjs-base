import styled from "styled-components";

import { Accordion } from "@phantomthief-react/modules";

const Styled = {
  Sections: styled(Accordion)`
    & .accordion-item {
      background-color: transparent;
      box-shadow: none;
    }

    & .accordion-item:not(:last-of-type) {
      margin-bottom: 3px;
    }

    & .accordion-item__header {
      background-color: #1e2d3d;
    }
  `,
};

export default Styled;
