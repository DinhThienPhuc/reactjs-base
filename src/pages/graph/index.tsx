import {
  DEFAULT_AVATAR,
  FIGHTER_ORDER_COLORS,
  FIGHTER_PROPERTIES,
  FIRST_FIGHTER_PROPERTIES,
  IFighter,
  IFighterInfo,
  IStatBarChartData,
  ITwoVerticalBarsChartData,
  SECOND_FIGHTER_PROPERTIES,
  TFighterProperty,
  _Utils,
  getFighterStats,
} from "utils";
import { ArrowLeft as IconArrowLeft, Heart as IconHeart } from "react-feather";
import {
  StatBarChart,
  TwoVerticalBarsChart,
  Navbar,
  _Components,
} from "components";
import { useCallback, useMemo, useState } from "react";

import ROUTES from "routes/constants";
import Styled from "pages/graph/style";
import StyledLayout from "layouts/style";
import { _Hooks } from "hooks";
import { getFighterById } from "services";
import { useCompareFighters } from "store";
import { useNavigate } from "react-router-dom";

interface IFighterWithMoreStats
  extends Omit<IFighter, "avatar" | "height" | "weight">,
    IFighterInfo {
  avatar?: string | undefined;
}

interface IFighters {
  first: IFighterWithMoreStats | null;
  second: IFighterWithMoreStats | null;
}

const PageGraph = () => {
  const navigate = useNavigate();
  const [firstFighterData, setFirstFighterData] = useState<
    ITwoVerticalBarsChartData[] | undefined
  >([]);
  const [secondFighterData, setSecondFighterData] = useState<
    ITwoVerticalBarsChartData[] | undefined
  >([]);
  const [fighters, setFighters] = useState<IFighters>({
    first: null,
    second: null,
  });
  const fighterIds = useCompareFighters((state) => state.fighterIds);

  const fetchFighterData = useCallback(async () => {
    const promises: Promise<_Utils.TTryCatchResult<IFighter>>[] = [];
    fighterIds.forEach((fighterId) => {
      if (fighterId) {
        promises.push(getFighterById(fighterId));
      }
    });

    const [firstFighterResponse, secondFighterResponse] = await Promise.all(
      promises,
    );

    const firstFighterStats = getFighterStats(firstFighterResponse?.result);
    const secondFighterStats = getFighterStats(secondFighterResponse?.result);

    const firstFighterData = FIRST_FIGHTER_PROPERTIES.map(
      (p: TFighterProperty) => ({
        value: firstFighterStats[p],
        bg: firstFighterStats.fullMark - firstFighterStats[p],
      }),
    );
    const secondFighterData = SECOND_FIGHTER_PROPERTIES.map(
      (p: TFighterProperty) => ({
        value: secondFighterStats[p],
        bg: secondFighterStats.fullMark - secondFighterStats[p],
      }),
    );

    setFirstFighterData(firstFighterData);
    setSecondFighterData(secondFighterData);
    setFighters({
      first: {
        ...firstFighterResponse?.result,
        ...firstFighterStats,
      },
      second: {
        ...secondFighterResponse?.result,
        ...secondFighterStats,
      },
    });
  }, [fighterIds]);

  const firstFighterValues = useMemo(
    () =>
      [...(firstFighterData || [])].reverse().map((item, index) => (
        <_Components.Text
          color={FIGHTER_ORDER_COLORS.FIRST}
          size={14}
          bold={600}
          key={`${item.value}-${item.bg}-${index}`}
        >
          {item.value}
        </_Components.Text>
      )),
    [firstFighterData],
  );

  const secondFighterValues = useMemo(
    () =>
      secondFighterData?.map((item, index) => (
        <_Components.Text
          color={FIGHTER_ORDER_COLORS.SECOND}
          size={14}
          bold={600}
          key={`${item.value}-${item.bg}-${index}`}
        >
          {item.value}
        </_Components.Text>
      )),
    [secondFighterData],
  );

  const statsComparation = useMemo(() => {
    const result: _Utils.IObject<IStatBarChartData[]> = {};

    Object.values(FIGHTER_PROPERTIES).forEach((p) => {
      result[p] = [
        {
          first: fighters.first?.[p] || 0,
          second: fighters.second?.[p] || 0,
        },
      ];
    });

    return result;
  }, [fighters.first, fighters.second]);

  const goToHomepage = useCallback(() => {
    navigate(ROUTES.HOME);
  }, [navigate]);

  _Hooks.useEffectOnce(() => {
    fetchFighterData();
  });

  return (
    <>
      <Navbar
        title={"Graph"}
        leftIcon={<IconArrowLeft />}
        onLeftClick={goToHomepage}
        rightIcon={<IconHeart />}
      />
      <StyledLayout.Content>
        <Styled.AvatarGroup>
          <Styled.Avatar>
            <img
              src={fighters.first?.avatar || DEFAULT_AVATAR}
              alt={fighters.first?.name}
            />
          </Styled.Avatar>
          <Styled.Avatar>
            <img
              src={fighters.second?.avatar || DEFAULT_AVATAR}
              alt={fighters.second?.name}
            />
          </Styled.Avatar>
        </Styled.AvatarGroup>
        <TwoVerticalBarsChart
          firstData={firstFighterData}
          secondData={secondFighterData}
          firstValues={firstFighterValues}
          secondValues={secondFighterValues}
        />
        <Styled.StatChartGroup justifyContent="space-around">
          <StatBarChart data={statsComparation.height} label={"Height"} />
          <StatBarChart data={statsComparation.weight} label={"Weight"} />
        </Styled.StatChartGroup>
        <Styled.StatChartGroup justifyContent="space-around">
          <StatBarChart data={statsComparation.win} label={"Win"} />
          <StatBarChart data={statsComparation.lose} label={"Lose"} />
        </Styled.StatChartGroup>
      </StyledLayout.Content>
    </>
  );
};

export default PageGraph;
