import styled from "styled-components";

export const MainButton = styled.button`
  //Colors & Fonts
  background: ${(props) => props.theme.colors.neutral_box};
  color: ${(props) => props.theme.colors.high_text};
  font-family: Tormenta20;
  font-size: 1.2em;

  //Display
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  //Border & Style
  padding: 0.4em 0.6em;
  border-radius: 10px;
  border-style: none;
  box-shadow: 0.15em 0.15em 0.3em black;

  &:hover {
    background: ${(props) => props.theme.colors.active_box};
    cursor: pointer;
  }

  &:disabled {
    background: ${(props) => props.theme.colors.disabled_box};
    cursor: not-allowed;
  }

  &:active {
    box-shadow: 0 0 0 black;
    transition-duration: 0s;
    margin-top: 3px;
    background: ${(props) => props.theme.colors.neutral_box};
  }
`;
