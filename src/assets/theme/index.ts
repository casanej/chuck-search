import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #FFFFFF;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100vw;
  }
`;