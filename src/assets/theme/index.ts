import { createGlobalStyle } from "styled-components";
import PixeloidSans from '../fonts/PixeloidSans.ttf';
import PixelMillennium from '../fonts/PixelMillennium.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pixeloid-Sans";
    src: url(${PixeloidSans}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "PixelMillennium";
    src: url(${PixelMillennium}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pixeloid-Sans', sans-serif;
  }

  body {
    background-color: #FFFFFF;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-size: 12px;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100vw;
  }
`;