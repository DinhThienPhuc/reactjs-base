import { ReactNode, useCallback } from "react";

import { Icon } from "react-feather";
import { MAX_COMPARE_FIGHTERS } from "utils";
import Styled from "./style";
import { useCompareFighters } from "store";

interface IProps {
  route: string;
  label: string | ReactNode;
  hasFighterCompareBadge?: boolean;
  Icon: Icon;
}

const TabbarItem = ({
  route,
  label,
  Icon,
  hasFighterCompareBadge = false,
}: IProps) => {
  const fighterIds = useCompareFighters(
    (state) => state.fighterIds,
    (oldFighters, newFighters) => {
      if (!hasFighterCompareBadge) {
        return true;
      }
      if (oldFighters.length === newFighters.length) {
        return true;
      }
      return false;
    },
  );

  const getActiveColorForIcon = useCallback((isActive: boolean) => {
    if (isActive) {
      return "#11DCE8";
    }
    return "#8d8e99";
  }, []);

  return (
    <Styled.Container to={route}>
      {({ isActive }) => (
        <>
          <Icon color={getActiveColorForIcon(isActive)} />
          <Styled.Text isActive={isActive}>{label}</Styled.Text>
          {hasFighterCompareBadge ? (
            <Styled.Badge
              isReachedMaxFighters={fighterIds.length === MAX_COMPARE_FIGHTERS}
            >
              {fighterIds.length ? fighterIds.length : ""}
            </Styled.Badge>
          ) : null}
        </>
      )}
    </Styled.Container>
  );
};

export default TabbarItem;
