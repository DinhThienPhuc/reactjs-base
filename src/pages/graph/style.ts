import { FIGHTER_ORDER_COLORS } from "utils";
import styled from "styled-components";

const Styled = {
  AvatarGroup: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
  `,
  Avatar: styled.div`
    transition: all 300ms ease-in-out;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    padding: 5px;

    &:first-of-type {
      border: 2px solid ${FIGHTER_ORDER_COLORS.FIRST};
      margin-right: 26px;
    }
    &:last-of-type {
      border: 2px solid ${FIGHTER_ORDER_COLORS.SECOND};
      margin-left: 26px;
    }

    & img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  `,
  StatChartGroup: styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 24px;
  `,
};

export default Styled;
