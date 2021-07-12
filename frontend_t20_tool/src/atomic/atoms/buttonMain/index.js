import React, { useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";
import "./styles.css";
import { StyledButton } from "./styles";

export default function MainButton({
  style,
  className,
  text,
  onClick,
  onChange,
  ...args
}) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <StyledButton theme={darkMode}>
      {text}
      {args.children}
    </StyledButton>
  );
}
