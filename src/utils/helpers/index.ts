import * as _Utils from "_core/utils";

import { IFighter, IFighterInfo } from "utils/definations/types";

export const getFighterStats = (data: IFighter | null): IFighterInfo => {
  let win = 0;
  let lose = 0;
  let height = 0;
  let weight = 0;

  if (data?.height && data?.height !== _Utils.NOT_AVAILABLE) {
    height = +data?.height;
  }
  if (data?.weight && data?.weight !== _Utils.NOT_AVAILABLE) {
    weight = +data?.weight;
  }
  if (data?.winLoseRate && data?.winLoseRate !== _Utils.NOT_AVAILABLE) {
    const winLoseRate = data?.winLoseRate;
    const arr = winLoseRate.split("/");
    win = +arr[0].replace("+", "");
    lose = +arr[1].replace("+", "");
  }

  return {
    height,
    weight,
    win,
    lose,
    fullMark: Math.max(height, weight, win, lose) + 30,
  };
};
