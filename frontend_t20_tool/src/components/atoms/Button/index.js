import React from "react";
import { MainButton } from "./styles";

const Button = ({ onClick, children, text, style, disabled }) => {
  return (
    <MainButton text={text} onClick={onClick} disabled={disabled} style={style}>
      {children}
    </MainButton>
  );
};

export default Button;
