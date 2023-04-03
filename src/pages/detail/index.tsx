import {
  ArrowLeft as IconArrowLeft,
  Edit as IconEdit,
  Trash2 as IconTrash2,
} from "react-feather";
import { SelectFighterButton, WrapperButton } from "components";
import { deleteFighter, getFighterById } from "services";
import { useAvatar, useCompareFighters } from "store";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { IFighter } from "utils";
import { ReactComponent as IconHeight } from "assets/svg/height.svg";
import { ReactComponent as IconWeight } from "assets/svg/weight.svg";
import { ReactComponent as IconWinLoseRate } from "assets/svg/wlr.svg";
import ROUTES from "routes/constants";
import Styled from "./style";
import StyledLayout from "layouts/style";
import cx from "classnames";
import { toast } from "react-toastify";

const PageDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<IFighter | null>(null);
  const toggleSelectFighter = useCompareFighters(
    (state) => state.toggleSelectFighter,
  );
  const setUrl = useAvatar((state) => state.setUrl);

  const goBackHomePage = useCallback(() => {
    navigate(ROUTES.HOME);
  }, [navigate]);

  const goToEditPage = useCallback(() => {
    navigate(`${ROUTES.DETAIL}/${id}/edit`);
  }, [id, navigate]);

  const fetchFighterData = useCallback(async () => {
    const { error, result } = await getFighterById(id as string);
    if (error) {
      toast.error("Get fighter information failed!", {
        position: toast.POSITION.TOP_CENTER,
        icon: "🍎",
      });
    } else {
      setData(result);
      setUrl(result?.avatar);
    }
  }, [id, setUrl]);

  const fightingStyles = useMemo(() => {
    return data?.fightingStyles?.map?.((fs, i) => {
      return (
        <Styled.FightingStyle key={fs} className={cx({ "first-element": !i })}>
          {fs}
        </Styled.FightingStyle>
      );
    });
  }, [data?.fightingStyles]);

  const handleDeleteFighter = useCallback(async () => {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm(`Do you want to delete ${data?.name}? This cannot be undone!`)
    ) {
      const { error } = await deleteFighter(id as string);
      const action = error ? "error" : "success";
      toast[action]?.(`Delete fighter ${data?.name} ${action}!`, {
        position: toast.POSITION.TOP_CENTER,
        icon: error ? "🍎" : "🥬",
      });
      navigate(ROUTES.HOME);
    }
  }, [data?.name, id, navigate]);

  const handleToggleSelectFighter = useCallback(
    () => toggleSelectFighter(id + ""),
    [id, toggleSelectFighter],
  );

  useEffect(() => {
    fetchFighterData();
  }, [fetchFighterData]);

  return (
    <>
      <Styled.Navbar
        title={""}
        leftIcon={<IconArrowLeft />}
        rightIcon={<SelectFighterButton fighterId={id + ""} />}
        onLeftClick={goBackHomePage}
        onRightClick={handleToggleSelectFighter}
      />
      <StyledLayout.Content>
        <Styled.Box>
          <Styled.Avatar fighterId={id + ""} />
          <Styled.Name>{data?.name || ""}</Styled.Name>
          <Styled.Epithet>{data?.epithet || ""}</Styled.Epithet>

          <Styled.ParamGroup>
            <Styled.Param>
              <IconHeight height={48} width={48} />
              <Styled.Title>Height</Styled.Title>
              <Styled.Unit>(cm)</Styled.Unit>
              <Styled.Value>{data?.height}</Styled.Value>
            </Styled.Param>
            <Styled.Param>
              <IconWeight height={48} width={48} />
              <Styled.Title>Weight</Styled.Title>
              <Styled.Unit>(kg)</Styled.Unit>
              <Styled.Value>{data?.weight}</Styled.Value>
            </Styled.Param>
            <Styled.Param>
              <IconWinLoseRate height={48} width={48} />
              <Styled.Title>WLR</Styled.Title>
              <Styled.Unit>(%)</Styled.Unit>
              <Styled.Value>{data?.winLoseRate}</Styled.Value>
            </Styled.Param>
          </Styled.ParamGroup>

          {fightingStyles}

          <Styled.ButtonGroup>
            <Styled.DeleteButton
              variant="outlined"
              onClick={handleDeleteFighter}
            >
              <Styled.WrapIcon>
                <IconTrash2 width={16} height={16} />
              </Styled.WrapIcon>{" "}
              <div>Delete</div>
            </Styled.DeleteButton>
            <WrapperButton variant="outlined" onClick={goToEditPage}>
              <Styled.WrapIcon>
                <IconEdit width={16} height={16} />
              </Styled.WrapIcon>{" "}
              <div>Edit</div>
            </WrapperButton>
          </Styled.ButtonGroup>
        </Styled.Box>
      </StyledLayout.Content>
    </>
  );
};

export default PageDetail;
