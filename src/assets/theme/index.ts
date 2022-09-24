import { createGlobalStyle } from "styled-components";
import PixeloidSans from '../fonts/PixeloidSans.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pixeloid-Sans";
    src: url(${PixeloidSans}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

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
    font-family: 'Pixeloid-Sans', sans-serif;
    font-size: 12px;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100vw;
  }
`;