import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import useToggleTheme from "./utils/useToggleTheme";

function App() {
  const { theme } = useToggleTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
