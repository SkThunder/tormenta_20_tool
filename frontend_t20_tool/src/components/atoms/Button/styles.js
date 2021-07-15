import styled from "styled-components";

export const MainButton = styled.button`
  background: ${(props) => props.theme.colors.neutral_box};
  color: ${(props) => props.theme.colors.high_text};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.7em 0.9em;
  justify-content: space-between;
  border-radius: 10px;
  border-style: none;
  font-family: Tormenta20;
  transition-duration: 0.3s;
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
