import React from "react";
import { Container } from "./styles";
import useToggleTheme from "../../../utils/useToggleTheme";
import Button from "../../atoms/Button";

const Header = () => {
  const { toggleTheme } = useToggleTheme();

  return (
    <Container>
      Hello world
      <Button onClick={toggleTheme}>Clique aqui</Button>
    </Container>
  );
};

export default Header;
