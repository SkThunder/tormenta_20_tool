import React from "react";
import { CustomInput } from "./styles";

const InputText = ({ onChange, style, placeholder, disabled }) => {
  return (
    <CustomInput
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      disabled={disabled}
    />
  );
};

export default InputText;
