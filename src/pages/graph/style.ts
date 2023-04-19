import { FIGHTER_ORDER_COLORS } from "utils";
import { Flex } from "components";
import styled from "styled-components";

const Styled = {
  AvatarGroup: styled(Flex)`
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
  StatChartGroup: styled(Flex)`
    margin-top: 32px;
  `,
};

export default Styled;
