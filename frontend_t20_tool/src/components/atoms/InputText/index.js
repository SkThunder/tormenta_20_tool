import React from "react";
import { CustomInput } from "./styles";

const InputText = ({ onChange, style, placeholder }) => {
  return <CustomInput
    onChange={onChange}
    placeholder={placeholder}
    style={style}
  />;
};

export default InputText;
