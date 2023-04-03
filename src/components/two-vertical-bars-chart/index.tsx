import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  FIGHTER_LABELS,
  FIGHTER_ORDER_COLORS,
  ITwoVerticalBarsChartData,
} from "utils";

import Styled from "./style";
import { useMemo } from "react";

interface IProps {
  firstValues: JSX.Element[] | undefined;
  secondValues: JSX.Element[] | undefined;
  firstData: ITwoVerticalBarsChartData[] | undefined;
  secondData: ITwoVerticalBarsChartData[] | undefined;
}

const TwoVerticalBarsChart = ({
  firstValues,
  firstData,
  secondValues,
  secondData,
}: IProps) => {
  const barItemLabels = useMemo(
    () =>
      Object.values(FIGHTER_LABELS).map((item) => (
        <span key={item.key}>{item.label}</span>
      )),
    [],
  );

  return (
    <Styled.Container>
      <Styled.Values>{firstValues}</Styled.Values>
      <Styled.ChartBox>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={firstData} layout="vertical">
            <XAxis type="number" reversed hide />
            <YAxis type="category" reversed hide />
            <Bar
              dataKey="value"
              stackId="firstData"
              fill={FIGHTER_ORDER_COLORS.FIRST}
              isAnimationActive
            />
            <Bar
              dataKey="bg"
              stackId="firstData"
              fill="#0009"
              isAnimationActive
            />
          </BarChart>
        </ResponsiveContainer>
      </Styled.ChartBox>
      <Styled.Labels>{barItemLabels}</Styled.Labels>
      <Styled.ChartBox>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={secondData} layout="vertical">
            <XAxis type="number" hide />
            <YAxis type="category" hide />
            <Bar
              dataKey="value"
              stackId="secondData"
              fill={FIGHTER_ORDER_COLORS.SECOND}
              isAnimationActive
            />
            <Bar
              dataKey="bg"
              stackId="secondData"
              fill="#0009"
              isAnimationActive
            />
          </BarChart>
        </ResponsiveContainer>
      </Styled.ChartBox>
      <Styled.Values>{secondValues}</Styled.Values>
    </Styled.Container>
  );
};

export default TwoVerticalBarsChart;
