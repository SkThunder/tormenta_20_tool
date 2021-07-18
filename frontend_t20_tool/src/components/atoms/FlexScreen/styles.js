import styled from "styled-components";

export const FullScreen = styled.section`
  //Colors & Fonts
  background-color: ${(props) => props.theme.colors.deep_background};

  //Display
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
`;
