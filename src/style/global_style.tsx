import styled, { createGlobalStyle } from "styled-components";

// Global style
const GlobalStyle = createGlobalStyle`
html {
  font-family: "Pangram", sans-serif;
  font-size: 14px;
  overflow-x: hidden;
  line-height: 26px;
}
body {
  font-size: 1rem;
  line-height: 1.625rem;
  margin: auto;
  background: ${({ theme }) => theme.background};
}
::selection {
  color: ${({ theme }) => theme.color.primary.default};
  background-color: ${({ theme }) => theme.color.primary.default}30;
}
::-webkit-scrollbar {
  /* display: none; */
}
* {
  box-sizing: border-box;
  transition: all 250ms ${({ theme }) => theme.bezier.ease_out};
}
img {
  vertical-align: bottom
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}

/* Fonts import */
@font-face {
  font-family: 'Pangram';
  src: local('Pangram_ExtraLight'), local('PangramExtraLight'),
  url(assets/fonts/Pangram-ExtraLight.otf) format('otf');
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: 'Pangram';
  src: local('Pangram_Light'), local('PangramLight'),
  url(assets/fonts/Pangram-Light.otf) format('otf');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'Pangram';
  src: local('Pangram'), local('Pangram'),
  url(assets/fonts/Pangram.otf) format('otf');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Pangram';
  src: local('Pangram_ExtraBold'), local('PangramExtraBold'),
  url(assets/fonts/Pangram-ExtraBold.otf) format('otf');
  font-weight: 700;
  font-style: normal;
}
`;

export default GlobalStyle;
