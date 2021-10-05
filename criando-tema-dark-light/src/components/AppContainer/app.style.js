import styled from "styled-components";

export const AppContainer = styled.div`
  height: 37vh;
  display: flex;
  justify-content: center;
  padding: 300px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  transition: background-color 0.8s linear, color 0.5 linear;
`;

export const MainSection = styled.div`
    text-align: center;
`;