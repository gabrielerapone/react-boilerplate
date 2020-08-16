import styled, { createGlobalStyle } from "styled-components";

// Global style
const GlobalStyle = createGlobalStyle`
html {
  font-family: "Pangram", sans-serif;
  font-size: 16px;
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
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.primary}30;
}
::-webkit-scrollbar {
  /* display: none; */
}
* {
  box-sizing: border-box;
  transition: all 250ms ${({theme}) => theme.bezier.ease_out};
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
  font-family: 'Pangram-ExtraLight';
  src: local('Pangram_ExtraLight'), local('PangramExtraLight'),
  url(assets/fonts/Pangram-ExtraLight.otf) format('otf');
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: 'Pangram-Light';
  src: local('Pangram_Light'), local('PangramLight'),
  url(assets/fonts/Pangram-Light.otf) format('otf');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Pangram';
  src: local('Pangram'), local('Pangram'),
  url(assets/fonts/Pangram.otf) format('otf');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'Pangram-ExtraBold';
  src: local('Pangram_ExtraBold'), local('PangramExtraBold'),
  url(assets/fonts/Pangram-ExtraBold.otf) format('otf');
  font-weight: 700;
  font-style: normal;
}
`;

// Transition between routes
export const PageTransition = styled.div`
  .fade-appear {
    opacity: 0;
    transform: translateY(-1%) scale(0.975);
  }

  .fade-appear.fade-appear-active {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition: all 600ms ${({ theme }) => theme.bezier.ease_out};
  }

  .fade-done {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .fade-done.fade-done-active {
    opacity: 0;
    transform: translateY(-1%) scale(0.975);
    transition: all 600ms ${({ theme }) => theme.bezier.ease_out};
  }

  .fade-enter {
    opacity: 0;
    transform: translateY(-1%) scale(0.975);
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition: all 600ms ${({ theme }) => theme.bezier.ease_out};
  }

  .fade-exit {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transform: translateY(-1%) scale(0.975);
    transition: all 600ms ${({ theme }) => theme.bezier.ease_out};
  }
`;

export default GlobalStyle;
