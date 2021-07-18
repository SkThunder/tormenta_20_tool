import React, { useState } from "react";
import { getImageUrl } from "../../../utils/imageFunctions";
import { FiMenu } from "react-icons/fi";
import IconBox from "../../atoms/IconBox";
import ImageBox from "../../atoms/ImageBox";
import TitleText from "../../atoms/TitleText";
import FlexBox from "../../atoms/FlexBox";

import { HeaderGrid, HeaderTop, Sidebar, Body } from "./styles";

const logo = getImageUrl("title@1x.png");
const Header = ({ children }) => {
  const alertScreen = () => {
    console.log("Clicou!");
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderGrid>
      <HeaderTop>
        <IconBox
          title="Menu"
          style={{ margin: "0 0 0 8px" }}
          onClick={() => setIsOpen(!isOpen)}
          size="5vh"
        >
          <FiMenu size="90%" />
        </IconBox>
        <TitleText>{isOpen ? "Aberto" : "Fechado"}</TitleText>
        <ImageBox
          src={logo}
          style={{ margin: "0 8px" }}
          onClick={alertScreen}
          size={["100%", "30vh"]}
          borderMode="circle"
          transparent
          title="Tormenta 20"
        />
      </HeaderTop>
      <Sidebar>
        <TitleText>Teste 1</TitleText>
        <TitleText>Teste 2</TitleText>
        <TitleText>Teste 3</TitleText>
      </Sidebar>
      <Body>
        <FlexBox>{children}</FlexBox>
      </Body>
    </HeaderGrid>
  );
};

export default Header;
