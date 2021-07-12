import React, { createContext } from "react";

import { KEY_LOCAL_STORAGE_THEME } from "../constants/localStorage";
import { LIGHT } from "../constants/theme";
import usePersistedState from "../utils/usePersistedState";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = usePersistedState(KEY_LOCAL_STORAGE_THEME, light);

  function toggleTheme() {
    setTheme(theme.title === LIGHT ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeContextProvider };
