import React from "react";
import { Container } from "./styles";
import useToggleTheme from "../../../utils/useToggleTheme";

const Header = () => {
  const { toggleTheme } = useToggleTheme();

  return (
    <Container>
      Hello world
      <button onClick={toggleTheme}>Clique aqui</button>
    </Container>
  );
};

export default Header;
