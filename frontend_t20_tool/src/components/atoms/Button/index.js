import React from "react";
import { MainButton } from "./styles";
import { DEFAULT_TITLE } from "../../../constants/button";

const Button = ({ onClick, children, text, style, disabled, title }) => {
  return (
    <MainButton
      text={text}
      onClick={onClick}
      disabled={disabled}
      style={style}
      title={title ? title : DEFAULT_TITLE}
    >
      {children}
    </MainButton>
  );
};

export default Button;
