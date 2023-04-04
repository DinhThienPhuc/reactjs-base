import {
  DEFAULT_AVATAR,
  FIGHTER_PROPERTIES,
  FIRST_FIGHTER_PROPERTIES,
  IFighter,
  IFighterInfo,
  IObject,
  IStatBarChartData,
  ITwoVerticalBarsChartData,
  SECOND_FIGHTER_PROPERTIES,
  TFighterProperty,
  TTryCatchResult,
  getFighterStats,
} from "utils";
import { ArrowLeft as IconArrowLeft, Heart as IconHeart } from "react-feather";
import { StatBarChart, TwoVerticalBarsChart, WrapperNavbar } from "components";
import { useCallback, useMemo, useState } from "react";

import Styled from "./style";
import StyledLayout from "layouts/style";
import { getFighterById } from "services";
import { useCompareFighters } from "store";
import { useEffectOnce } from "hooks";
import { useNavigate } from "react-router-dom";
import ROUTES from "routes/constants";

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
    const promises: Promise<TTryCatchResult<IFighter>>[] = [];
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
      [...(firstFighterData || [])]
        .reverse()
        .map((item, index) => (
          <span key={`${item.value}-${item.bg}-${index}`}>{item.value}</span>
        )),
    [firstFighterData],
  );

  const secondFighterValues = useMemo(
    () =>
      secondFighterData?.map((item, index) => (
        <span key={`${item.value}-${item.bg}-${index}`}>{item.value}</span>
      )),
    [secondFighterData],
  );

  const statsComparation = useMemo(() => {
    const result: IObject<IStatBarChartData[]> = {};

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

  useEffectOnce(() => {
    fetchFighterData();
  });

  return (
    <>
      <WrapperNavbar
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
        <Styled.StatChartGroup>
          <StatBarChart data={statsComparation.height} label={"Height"} />
          <StatBarChart data={statsComparation.weight} label={"Weight"} />
        </Styled.StatChartGroup>
        <Styled.StatChartGroup>
          <StatBarChart data={statsComparation.win} label={"Win"} />
          <StatBarChart data={statsComparation.lose} label={"Lose"} />
        </Styled.StatChartGroup>
      </StyledLayout.Content>
    </>
  );
};

export default PageGraph;
