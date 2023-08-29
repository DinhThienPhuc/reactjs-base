import { DEFAULT_AVATAR, _Utils } from "utils";
import { SyntheticEvent, useCallback, useMemo } from "react";
import { useAvatar, useCompareFighters } from "store";

import Styled from "components/avatar/style";
import cx from "classnames";

interface IProps {
  fighterId: string;
  className?: string;
}

const Avatar = ({ fighterId, className }: IProps) => {
  const fighterIds = useCompareFighters((state) => state.fighterIds);
  const url = useAvatar((state) => state.url);

  const isSelected = useMemo(
    () => fighterIds.includes(fighterId),
    [fighterId, fighterIds],
  );

  const onImageError = useCallback(
    (e: SyntheticEvent<HTMLImageElement, Event>) => {
      e.currentTarget.src = DEFAULT_AVATAR;
    },
    [],
  );

  return (
    <Styled.Container
      className={cx("avatar", className)}
      isSelected={isSelected}
    >
      <img src={url} alt={url || _Utils.NOT_AVAILABLE} onError={onImageError} />
    </Styled.Container>
  );
};

export default Avatar;
