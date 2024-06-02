import styled from "styled-components";

const Styled = {
  Container: styled.div`
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 280px;
      height: 275px;
      flex-grow: 0;
      padding: 5px 97px 246px 42px;
      transform: rotate(-94deg);
      opacity: 0.4;
      -webkit-filter: blur(174px);
      filter: blur(174px);
      background-color: #43d9ad;
    }

    &::after {
      content: "";
      position: absolute;
      width: 264px;
      height: 329px;
      flex-grow: 0;
      bottom: 0px;
      transform: rotate(-346deg);
      opacity: 0.4;
      -webkit-filter: blur(174px);
      filter: blur(174px);
      background-color: #4d5bce;
    }
  `,
};

export default Styled;
