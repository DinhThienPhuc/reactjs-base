import {
  CheckCircle as IconCheckCircle,
  Circle as IconCircle,
} from "react-feather";
import { useCallback, useMemo } from "react";

import { ICardProps } from "./types";
import ROUTES from "routes/constants";
import Styled from "./style";
import { Text } from "_libs/components";
import cx from "classnames";
import { useCompareFighters } from "store";
import { useNavigate } from "react-router-dom";

const Card = ({ id, avatar, name, epithet, className }: ICardProps) => {
  const navigate = useNavigate();
  const fighterIds = useCompareFighters(
    (state) => state.fighterIds,
    (oldFighters, newFighters) =>
      (!oldFighters.includes(id) && !newFighters.includes(id)) ||
      (oldFighters.includes(id) && newFighters.includes(id)),
  );
  const toggleSelectFighter = useCompareFighters(
    (state) => state.toggleSelectFighter,
  );

  const isSelected = useMemo(() => fighterIds.includes(id), [fighterIds, id]);

  const goDetail = useCallback(() => {
    navigate(`${ROUTES.DETAIL}/${id}/view`);
  }, [id, navigate]);

  const handleToggleSelectFighter = useCallback(
    () => toggleSelectFighter(id),
    [id, toggleSelectFighter],
  );

  const checkBox = useMemo(() => {
    if (isSelected) {
      return (
        <IconCheckCircle color="#11dce8" onClick={handleToggleSelectFighter} />
      );
    }
    return <IconCircle onClick={handleToggleSelectFighter} />;
  }, [handleToggleSelectFighter, isSelected]);

  return (
    <Styled.Container className={cx("card", className)} isSelected={isSelected}>
      <Styled.AvatarBox>
        <img src={avatar} alt={avatar} />
      </Styled.AvatarBox>
      <Styled.Box
        flexDirection="column"
        justifyContent="space-between"
        alignItems="unset"
      >
        <div>
          <Styled.BoxHeaderChild justifyContent="space-between">
            <Text color="#11dce8" bold={800} size={16}>
              {name}
            </Text>
            {checkBox}
          </Styled.BoxHeaderChild>
          <Text>{epithet}</Text>
        </div>
        <Styled.BoxFooter justifyContent="flex-end">
          <Styled.DetailButton onClick={goDetail}>
            <Styled.BtnText bold={700} size={14}>
              Detail
            </Styled.BtnText>
            <Styled.IconArrowRight width={16} height={16} />
          </Styled.DetailButton>
        </Styled.BoxFooter>
      </Styled.Box>
    </Styled.Container>
  );
};

export default Card;
