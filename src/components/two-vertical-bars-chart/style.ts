import { FIGHTER_ORDER_COLORS } from "utils";
import styled from "styled-components";

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
  `,
  ChartBox: styled.div`
    width: calc(50vw - 80px);
    height: 160px;
  `,
  Labels: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 13px;
    width: 52px;
    font-weight: 600;
  `,
  Values: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 13px;
    width: 30px;
    font-weight: 600;

    &:first-of-type {
      color: ${FIGHTER_ORDER_COLORS.FIRST};
    }
    &:last-of-type {
      color: ${FIGHTER_ORDER_COLORS.SECOND};
    }
  `,
};

export default Styled;
