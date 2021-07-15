import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.medium_background};
  color: ${(props) => props.theme.colors.high_text};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
`;
