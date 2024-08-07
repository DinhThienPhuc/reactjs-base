import React, { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";

import { STYLED_THEMES } from "./_constants";
import defaultSchema from "./_schema.json";
import { IStyledThemeProps, TStyledTheme, TStyledThemeContext } from "./_types";

const ThemeContext = createContext<TStyledThemeContext>({
  theme: STYLED_THEMES.DARK,
  setTheme: () => "",
});

export const ThemesProvider = ({
  schema = defaultSchema,
  defaultTheme = STYLED_THEMES.DARK,
  children,
}: IStyledThemeProps) => {
  const [theme, setTheme] = useState<TStyledTheme>(defaultTheme);

  const selectedSchema = useMemo(
    () => (theme ? schema?.data?.[theme] : schema?.data?.[defaultTheme]),
    [defaultTheme, schema?.data, theme],
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={selectedSchema}>{children}</ThemeProvider>;
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return { setTheme, theme };
};
