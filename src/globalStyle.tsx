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
  background-color: ${({ theme }) => theme.colors.grey10}
}
::selection {
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.grey30};;
}
::-webkit-scrollbar {
  display: none;
}
* {
  box-sizing: border-box;
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
@font-face {
  font-family: 'Pangram';
  src: local('Pangram'), local('Pangram'),
  url(assets/fonts/Pangram.otf) format('ttf');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'Pangram_ExtraLight';
  src: local('Pangram extralight'), local('PangramExtraLight'),
  url(assets/fonts/Pangram-ExtraLight.otf) format('ttf');
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: 'Pangram_Medium';
  src: local('Pangram_Medium'), local('PangramMedium'),
  url(assets/fonts/Pangram-Medium.otf) format('ttf');
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: 'Pangram_SemiBold';
  src: local('Pangram semibold'), local('PangramSemiBold'),
  url(assets/fonts/Pangram-SemiBold.otf) format('ttf');
  font-weight: 500;
  font-style: normal;
}
`;

export const PageTransition = styled.div`
  .fade-appear {
    opacity: 0;
    transform: translateY(-1%) scale(0.975);
  }

  .fade-appear.fade-appear-active {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition: all 600ms ${({ theme }) => theme.bezier};
  }

  .fade-done {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .fade-done.fade-done-active {
    opacity: 0;
    transform: translateY(-1%) scale(0.975);
    transition: all 600ms ${({ theme }) => theme.bezier};
  }

  .fade-enter {
    opacity: 0;
    transform: translateY(-1%) scale(0.975);
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition: all 600ms ${({ theme }) => theme.bezier};
  }

  .fade-exit {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transform: translateY(-1%) scale(0.975);
    transition: all 600ms ${({ theme }) => theme.bezier};
  }
`;

export default GlobalStyle;
