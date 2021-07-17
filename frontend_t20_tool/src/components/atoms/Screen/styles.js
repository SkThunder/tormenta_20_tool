import styled from "styled-components";

export const FullScreen = styled.section`
  background-color: ${(props) => props.theme.colors.deep_background};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
`;
