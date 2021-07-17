import React from "react";
import { Title } from "./styles";

const TitleText = ({ onClick, children, text, style }) => {
  return (
    <Title text={text} onClick={onClick} style={style}>
      {children}
    </Title>
  );
};

export default TitleText;
