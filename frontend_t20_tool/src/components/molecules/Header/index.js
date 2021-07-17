import React from "react";
import { Container } from "./styles";
import useToggleTheme from "../../../utils/useToggleTheme";
import TitleText from "../../atoms/TitleText";
import Button from "../../atoms/Button";
import InputText from "../../atoms/InputText";

const Header = () => {
  const { toggleTheme } = useToggleTheme();

  return (
    <Container>
      <TitleText>Tormenta</TitleText>
      <InputText placeholder="Teste"/>
      <Button onClick={toggleTheme}>Clique aqui</Button>
    </Container>
  );
};

export default Header;
