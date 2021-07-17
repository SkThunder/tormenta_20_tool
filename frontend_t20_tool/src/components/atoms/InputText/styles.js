import styled from "styled-components";

export const CustomInput = styled.input`
  color: ${(props) => props.theme.colors.high_text};
  font-family: Iowan_Old_Style_Regular;
  background: ${(props) => props.theme.colors.pop_background};
  border: none;
  border-radius: 10px;
  padding: 0.7em 0.9em;
`;
