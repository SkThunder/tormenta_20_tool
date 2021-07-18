import styled from "styled-components";

export const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 15vw 85vw;
  grid-template-rows: 15vh 85vh;
  grid-template-areas:
    "h h"
    "s b";
`;

export const HeaderTop = styled.div`
  min-height: 3.5em;
  height: auto;
  background: ${(props) => props.theme.colors.medium_background};
  color: ${(props) => props.theme.colors.high_text};
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  grid-area: h;
`;

export const Sidebar = styled.div`
  min-width: 6em;
  width: auto;
  display: flex;
  flex-direction: column;
  grid-area: s;
`;

export const Body = styled.div`
  min-width: 6em;
  height: auto;
  width: auto;
  display: flex;
  grid-area: b;
`;
