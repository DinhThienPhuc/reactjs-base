import { ReactNode } from "react";

import { TAny } from "@phantomthief-react/utils";

export type TStyledTheme = "light" | "dark";

export type TStyledThemeContext = {
  theme: TStyledTheme;
  setTheme: (theme: TStyledTheme) => void;
};

export interface IStyledThemeProps {
  schema?: TAny;
  defaultTheme?: TStyledTheme;
  children?: ReactNode;
}
