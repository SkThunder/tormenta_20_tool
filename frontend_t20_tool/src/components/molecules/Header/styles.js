import styled from "styled-components";

export const Container = styled.div`
  min-height: 3.5em;
  height: 15vh;
  background: ${(props) => props.theme.colors.medium_background};
  color: ${(props) => props.theme.colors.high_text};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
`;
