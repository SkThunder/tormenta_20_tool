import styled from "styled-components";

export const View = styled.div`
  //Colors & Fonts
  color: ${(props) => props.theme.colors.high_text};
  background-color: ${(props) => props.theme.colors.medium_background};
  font-family: Tormenta20;

  //Display
  display: flex;
  align-content: center;
  justify-content: center;
  height: auto;
  margin: 1em;
  padding: 0.5em;

  //Border & Style
  border-radius: 10px;
  border: none;
`;

export const PopView = styled.div``;
