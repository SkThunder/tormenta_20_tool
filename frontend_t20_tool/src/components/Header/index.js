import React, { useContext } from "react";
import { Container } from "./styles";
import { ThemeContext } from "styled-components";

const Header = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      Hello world
      <button onClick={toggleTheme}>Clique aqui</button>
    </Container>
  );
};

export default Header;
