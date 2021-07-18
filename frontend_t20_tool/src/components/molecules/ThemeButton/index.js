import React from "react";
import Button from "../../atoms/Button";
import useToggleTheme from "../../../utils/useToggleTheme";

const ThemeButton = ({style}) => {
  const { toggleTheme } = useToggleTheme();
  return <Button style={style} onClick={toggleTheme} title="Mudar tema">Mudar tema</Button>;
};

export default ThemeButton;
