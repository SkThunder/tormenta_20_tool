import styled from "styled-components";

export const View = styled.div`
  color: ${(props) => props.theme.colors.high_text};
  background-color: ${(props) => props.theme.colors.medium_background};
  font-family: Tormenta20;
  display: flex;
  height: auto;
  align-content: center;
  justify-content: center;
  margin: 1em;
  padding: 0.5em;
  border-radius: 10px;
  border: none;
`;

export const PopView = styled.div`
`