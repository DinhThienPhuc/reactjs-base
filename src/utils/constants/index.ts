import * as _Utils from "_core/utils";

import { TFighterProperty } from "utils/definations/types";

export const DEFAULT_AVATAR =
  "https://i0.wp.com/www.artstation.com/assets/default_avatar.jpg";

export const MAX_COMPARE_FIGHTERS = 2;

export const FIGHTER_PROPERTIES: _Utils.IObject<TFighterProperty> = {
  HEIGHT: "height",
  WEIGHT: "weight",
  WIN: "win",
  LOSE: "lose",
};

export const FIRST_FIGHTER_PROPERTIES = [
  FIGHTER_PROPERTIES.LOSE,
  FIGHTER_PROPERTIES.WIN,
  FIGHTER_PROPERTIES.WEIGHT,
  FIGHTER_PROPERTIES.HEIGHT,
];

export const SECOND_FIGHTER_PROPERTIES = [
  FIGHTER_PROPERTIES.HEIGHT,
  FIGHTER_PROPERTIES.WEIGHT,
  FIGHTER_PROPERTIES.WIN,
  FIGHTER_PROPERTIES.LOSE,
];

export const FIGHTER_LABELS: _Utils.IObject<{
  label: string;
  key: TFighterProperty;
}> = {
  [FIGHTER_PROPERTIES.HEIGHT]: {
    label: "Height",
    key: FIGHTER_PROPERTIES.HEIGHT,
  },
  [FIGHTER_PROPERTIES.WEIGHT]: {
    label: "Weight",
    key: FIGHTER_PROPERTIES.WEIGHT,
  },
  [FIGHTER_PROPERTIES.WIN]: {
    label: "Win",
    key: FIGHTER_PROPERTIES.WIN,
  },
  [FIGHTER_PROPERTIES.LOSE]: {
    label: "Lose",
    key: FIGHTER_PROPERTIES.LOSE,
  },
};

export const FIGHTER_ORDER_COLORS = {
  FIRST: "#fff374",
  SECOND: "#68fdf9",
};

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  NOT_FOUND: "/not-found",
};

export const NAVBAR_ITEMS = [
  {
    label: "Post",
    path: "/post",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Login",
    path: "/login",
  },
];

export const SPECIAL_VALUE = {
  UNDEFINED_STRING: "undefined",
  NULL_STRING: "null",
  EMPTY_STRING: "",
};

export const LAYOUT_SIZE = {
  NAVBAR: 124,
  TABBAR: 100,
};
