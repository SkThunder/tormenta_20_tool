import React from "react";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePesistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePesistedState('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
