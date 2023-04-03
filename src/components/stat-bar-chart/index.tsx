import { Bar, BarChart, Cell, ResponsiveContainer } from "recharts";
import { FIGHTER_ORDER_COLORS, IStatBarChartData } from "utils";

import { ReactNode } from "react";
import Styled from "./style";

interface IProps {
  data: IStatBarChartData[] | undefined;
  label: string | ReactNode;
}

const StatBarChart = ({ data, label }: IProps) => {
  return (
    <Styled.Container>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <Bar dataKey="first" label={{ position: "top" }}>
            {data?.map((_, index) => (
              <Cell fill={FIGHTER_ORDER_COLORS.FIRST} key={`cell1-${index}`} />
            ))}
          </Bar>
          <Bar dataKey="second" label={{ position: "top" }}>
            {data?.map((_, index) => (
              <Cell fill={FIGHTER_ORDER_COLORS.SECOND} key={`cell2-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
  );
};

export default StatBarChart;
