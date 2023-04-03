import {
  CheckCircle as IconCheckCircle,
  Circle as IconCircle,
} from "react-feather";

import { useCompareFighters } from "store";
import { useMemo } from "react";

interface IProps {
  fighterId: string;
}

const SelectFighterButton = ({ fighterId }: IProps) => {
  const fighterIds = useCompareFighters((state) => state.fighterIds);

  const isSelected = useMemo(
    () => fighterIds.includes(fighterId),
    [fighterId, fighterIds],
  );

  if (isSelected) {
    return <IconCheckCircle color="#11dce8" />;
  }

  return <IconCircle />;
};

export default SelectFighterButton;
