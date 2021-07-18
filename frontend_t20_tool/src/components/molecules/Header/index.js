import React from "react";
import { Container } from "./styles";
import { getImageUrl } from "../../../utils/imageFunctions";
import useToggleTheme from "../../../utils/useToggleTheme";
import TitleText from "../../atoms/TitleText";
import Button from "../../atoms/Button";
import ImageBox from "../../atoms/ImageBox";

const logo = getImageUrl("logo_t20@1x.png");
const Header = () => {
  const { toggleTheme } = useToggleTheme();
  const alertScreen = () => {
    console.log("Clicou!");
  };

  return (
    <Container>
      <ImageBox
        src={logo}
        size={"80px"}
        onClick={alertScreen}
        mode="circle"
        transparent
        title="Menu"
      />
      <TitleText>Tormenta</TitleText>
      <Button onClick={toggleTheme}>Clique aqui</Button>
    </Container>
  );
};

export default Header;
