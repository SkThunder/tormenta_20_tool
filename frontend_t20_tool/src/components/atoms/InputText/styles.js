import styled from "styled-components";

export const CustomInput = styled.input`
  //Colors & Fonts
  color: ${(props) => props.theme.colors.high_text};
  background: ${(props) => props.theme.colors.neutral_box};
  font-family: Iowan_Old_Style_Regular;
  font-size: 1.05em;

  //Display
  flex: 1;
  padding: 0.7em 0.9em;

  //Border & Style
  border: none;
  border-radius: 10px;

  &::placeholder {
    color: ${(props) => props.theme.colors.medium_text};
  }

  &:hover {
    background: ${(props) => props.theme.colors.active_box};
    cursor: pointer;
  }

  &:focus {
    outline: none;
    background: ${(props) => props.theme.colors.active_box};
    &:hover {
      cursor: default;
    }
  }

  &:disabled {
    background: ${(props) => props.theme.colors.disabled_box};
    cursor: not-allowed;
  }
`;
