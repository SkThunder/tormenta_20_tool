import React from "react";
import { MainButton } from "./styles";

const Button = ({ onClick, children, text, disabled }) => {
  return (
    <MainButton text={text} onClick={onClick} disabled={disabled}>
      {children}
    </MainButton>
  );
};

export default Button;
