import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@font-face {
  font-family: "Tormenta20";
  src: local("Tormenta20"), url("./fonts/Tormenta20.ttf"), format("ttf");
}

@font-face {
  font-family: "Iowan Old Style";
  src: local("Iowan Old Style"), url("./fonts/Iowan_Old_Style_Regular.ttf"), format("ttf");
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  min-height: 100vh;
  min-width: 100vw;
}

body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};;
    font: 400 16 Tormenta20, Iowan_Old_Style_Regular, sans-serif;
    font-size: 100%;
}
`;
