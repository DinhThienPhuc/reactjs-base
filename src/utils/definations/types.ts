import { DocumentData } from "firebase/firestore/lite";

export interface IFighter extends DocumentData {
  avatar: string;
  epithet: string;
  fightingStyles: string[];
  height: string;
  name: string;
  weight: string;
  winLoseRate: string;
  id: string;
}

export interface IFighterInfo {
  height: number;
  weight: number;
  win: number;
  lose: number;
  fullMark: number;
}

export interface ITwoVerticalBarsChartData {
  value: number;
  bg: number;
}

export interface IStatBarChartData {
  name?: string;
  first: number;
  second: number;
}

export type TFighterProperty = "height" | "weight" | "win" | "lose";
