import {
  CheckCircle as IconCheckCircle,
  Circle as IconCircle,
} from "react-feather";
import { useCallback, useMemo } from "react";

import { ICardProps } from "./types";
import ROUTES from "routes/constants";
import Styled from "./style";
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

  const checkBox = useMemo(() => {
    if (isSelected) {
      return <IconCheckCircle color="#11dce8" />;
    }
    return <IconCircle />;
  }, [isSelected]);

  const handleToggleSelectFighter = useCallback(
    () => toggleSelectFighter(id),
    [id, toggleSelectFighter],
  );

  return (
    <Styled.Container className={cx("card", className)} isSelected={isSelected}>
      <Styled.AvatarBox>
        <img src={avatar} alt={avatar} />
      </Styled.AvatarBox>
      <Styled.Box>
        <Styled.BoxHeader>
          <Styled.BoxHeaderChild>
            <Styled.Name>{name}</Styled.Name>
            <Styled.SelectBox onClick={handleToggleSelectFighter}>
              {checkBox}
            </Styled.SelectBox>
          </Styled.BoxHeaderChild>
          <Styled.Description>
            <Styled.Epithet>{epithet}</Styled.Epithet>
          </Styled.Description>
        </Styled.BoxHeader>
        <Styled.BoxFooter>
          <Styled.DetailButton onClick={goDetail}>
            <Styled.BtnText>Detail</Styled.BtnText>
            <Styled.IconArrowRight width={16} height={16} />
          </Styled.DetailButton>
        </Styled.BoxFooter>
      </Styled.Box>
    </Styled.Container>
  );
};

export default Card;
